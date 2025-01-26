"use server";

import { Buffer } from "node:buffer";
import { Readable } from "node:stream";
import { JWT } from "google-auth-library";
import { google } from "googleapis";
import type { drive_v3 } from "googleapis";

// Define types for our form data
export interface BusinessInfo {
  haveSocials: boolean;
  website?: string;
  instagram?: string;
  facebook?: string;
  productDescription?: string;
}

export interface TrademarkOwner {
  isCompany: boolean;
  companyName?: string;
  registrationCountry?: string;
  registrationNumber?: string;
  ownerName?: string;
  nationality?: string;
  residenceCountry?: string;
  contactName: string;
  contactEmail: string;
}

export interface TrademarkFiling {
  isWordMark: boolean;
  wordMark?: string;
  countries: string[];
}

export interface RegistrationData {
  businessInfo: BusinessInfo;
  trademarkOwner: TrademarkOwner;
  trademarkFiling: TrademarkFiling;
  logoFile?: File;
  submittedAt: string;
}

// Ensure required environment variables are present
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID;

if (!GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY || !SPREADSHEET_ID) {
  throw new Error(
    "Missing required environment variables for Google integration",
  );
}

// Create a JWT auth client using service account credentials
const auth = new JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ],
});

const sheets = google.sheets({ version: "v4", auth });
const drive = google.drive({ version: "v3", auth });

async function uploadFileToDrive(
  file: File,
  registrationId: string,
): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const stream = Readable.from(buffer);

  const fileMetadata: drive_v3.Schema$File = {
    name: `${registrationId}-${file.name}`,
    ...(FOLDER_ID && { parents: [FOLDER_ID] }),
  };

  const media = {
    mimeType: file.type,
    body: stream,
  };

  const driveResponse = await drive.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: "id",
  });

  if (!driveResponse.data.id) {
    throw new Error("Failed to get file ID from Google Drive");
  }

  // Make the file publicly viewable
  await drive.permissions.create({
    fileId: driveResponse.data.id,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  // Return the embeddable URL format
  return `https://drive.google.com/file/d/${driveResponse.data.id}/preview`;
}

export async function saveRegistrationDetails(data: RegistrationData) {
  try {
    if (!SPREADSHEET_ID) {
      throw new Error("Missing spreadsheet ID");
    }

    // Generate a unique ID for this registration
    const registrationId = `TM${Date.now()}`;

    // Upload logo to Google Drive if provided
    let logoUrl: string | undefined;
    if (data.logoFile) {
      logoUrl = await uploadFileToDrive(data.logoFile, registrationId);
    }

    // Format the data into a single row
    const values = [
      // Registration ID
      registrationId,

      // Business Info
      data.businessInfo.haveSocials ? "Yes" : "No",
      data.businessInfo.website || "",
      data.businessInfo.instagram || "",
      data.businessInfo.facebook || "",
      data.businessInfo.productDescription || "",

      // Trademark Owner
      data.trademarkOwner.isCompany ? "Company" : "Individual",
      data.trademarkOwner.companyName || data.trademarkOwner.ownerName || "",
      data.trademarkOwner.registrationCountry ||
        data.trademarkOwner.nationality ||
        "",
      data.trademarkOwner.registrationNumber || "",
      data.trademarkOwner.residenceCountry || "",
      data.trademarkOwner.contactName,
      data.trademarkOwner.contactEmail,

      // Trademark Filing
      data.trademarkFiling.isWordMark ? "Word Mark" : "Logo Mark",
      data.trademarkFiling.wordMark || "",
      data.trademarkFiling.countries.join(", "),
      logoUrl ? `=IMAGE("${logoUrl}")` : "",

      // Metadata
      data.submittedAt,
    ];

    // Append the row to the sheet
    const params = {
      spreadsheetId: SPREADSHEET_ID,
      range: "customer-info!A:R",
      valueInputOption: "USER_ENTERED" as const,
      requestBody: { values: [values] },
    };

    await sheets.spreadsheets.values.append(params);

    return { success: true, registrationId };
  } catch (error) {
    console.error("Failed to save registration details:", error);
    return { success: false, error: "Failed to save registration details" };
  }
}
