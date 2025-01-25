"use server";

import { JWT } from "google-auth-library";
import { google } from "googleapis";
import type {
  BusinessInfo,
  TrademarkFiling,
  TrademarkOwner,
} from "./save-details.action";

// Ensure required environment variables are present
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !SPREADSHEET_ID) {
  throw new Error(
    "Missing required environment variables for Google integration",
  );
}

// Create a JWT auth client using service account credentials
const auth = new JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

export interface RegistrationDetails {
  registrationId: string;
  businessInfo: BusinessInfo;
  trademarkOwner: TrademarkOwner;
  trademarkFiling: TrademarkFiling;
  logoUrl?: string;
  submittedAt: string;
}

export async function getRegistration(
  registrationId: string,
): Promise<RegistrationDetails | null> {
  try {
    if (!SPREADSHEET_ID) {
      throw new Error("Missing spreadsheet ID");
    }

    // Query the sheet to find the row with matching registration ID
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "customer-info!A:R",
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return null;
    }

    // Find the row with matching registration ID (first column)
    const row = rows.find((row) => row[0] === registrationId);
    if (!row) {
      return null;
    }

    // Parse the row data into our RegistrationDetails structure
    return {
      registrationId: row[0],
      businessInfo: {
        haveSocials: row[1] === "Yes",
        website: row[2] || undefined,
        instagram: row[3] || undefined,
        facebook: row[4] || undefined,
        productDescription: row[5] || undefined,
      },
      trademarkOwner: {
        isCompany: row[6] === "Company",
        companyName: row[6] === "Company" ? row[7] : undefined,
        ownerName: row[6] === "Individual" ? row[7] : undefined,
        registrationCountry: row[6] === "Company" ? row[8] : undefined,
        nationality: row[6] === "Individual" ? row[8] : undefined,
        registrationNumber: row[9] || undefined,
        residenceCountry: row[10] || undefined,
        contactName: row[11],
        contactEmail: row[12],
      },
      trademarkFiling: {
        isWordMark: row[13] === "Word Mark",
        wordMark: row[14] || undefined,
        countries: row[15] ? row[15].split(", ") : [],
      },
      logoUrl: row[16]
        ? row[16].replace('=IMAGE("', "").replace('")', "")
        : undefined,
      submittedAt: row[17],
    };
  } catch (error) {
    console.error("Failed to fetch registration details:", error);
    return null;
  }
}
