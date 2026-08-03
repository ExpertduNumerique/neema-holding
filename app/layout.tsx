import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://www.neemaholding.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Neema Holding International",
    template: "%s | Neema Holding International",
  },
  description:
    "Construire aujourd'hui les solutions qui façonnent l'Afrique de demain. Neema Holding International : Élevage, Agro-Business, Trading, Training, Immo, Store.",
  authors: [{ name: "Neema Holding International" }],
  creator: "Neema Holding International",
  publisher: "Neema Holding International",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Neema Holding International",
    title: "Neema Holding International",
    description:
      "Construire aujourd'hui les solutions qui façonnent l'Afrique de demain.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Neema Holding International",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neema Holding International",
    description:
      "Construire aujourd'hui les solutions qui façonnent l'Afrique de demain.",
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0B2A66",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {/* pt-16 compense le header fixe (64px) — voir AGENTS.md §6 */}
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
