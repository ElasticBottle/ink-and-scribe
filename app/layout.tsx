import type { Metadata, Viewport } from "next";
import { TailwindIndicator } from "~/components/ui/tailwind-indicator";
import { ThemeProvider } from "~/components/ui/theme";
import { constructMetadata } from "~/lib/utils";
import "~/styles/globals.css";
import { Bodoni_Moda, Geist, Geist_Mono } from "next/font/google";
import { ClientProviders } from "./client-providers";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = constructMetadata({});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen w-full scroll-smooth antialiased ${bodoniModa.variable} ${geistSans.variable} ${geistMono.variable} font-serif`}
      >
        <ClientProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
          >
            {children}
            <TailwindIndicator />
          </ThemeProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
