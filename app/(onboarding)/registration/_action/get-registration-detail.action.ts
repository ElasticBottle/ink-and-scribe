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

console.log("GOOGLE_SERVICE_ACCOUNT_EMAIL", GOOGLE_SERVICE_ACCOUNT_EMAIL);

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
  logoUrl: string | null;
  submittedAt: string;
}

function extractUrlFromImageFormula(formula: string): string | null {
  if (!formula) return null;
  const match = formula.match(/=IMAGE\("([^"]+)"\)/);
  if (!match?.[1]) return null;

  // Convert the URL to an embeddable format
  const url = match[1];
  const idMatch = url.match(/id=([^&]+)/);
  if (!idMatch?.[1]) return null;

  // Return the embeddable URL format
  return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
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
      valueRenderOption: "FORMULA", // Get the actual formulas instead of computed values
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
    const logoUrl = extractUrlFromImageFormula(row[16]) ?? null;
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
        wordMark: row[14] ?? undefined,
        countries: row[15] ? row[15].split(", ") : [],
      },
      logoUrl,
      submittedAt: row[17],
    };
  } catch (error) {
    console.error("Failed to fetch registration details:", error);
    return null;
  }
}
