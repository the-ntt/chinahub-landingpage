import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinahub — Your Trusted Partner for China Sourcing",
  description:
    "Source products from China with confidence. Direct factory access, 100% quality inspection, secure payments, and door-to-door shipping to Lebanon & MENA.",
  keywords: [
    "China sourcing",
    "quality control",
    "international shipping",
    "MENA",
    "Lebanon",
    "import from China",
    "dropshipping",
    "bulk buying",
    "Chinahub",
    "Salam Jawhar",
  ],
  openGraph: {
    title: "Chinahub — Your Trusted Partner for China Sourcing",
    description:
      "Source products from China with confidence. Direct factory access, 100% quality inspection, secure payments, and door-to-door shipping.",
    type: "website",
    locale: "en_US",
    siteName: "Chinahub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinahub — Your Trusted Partner for China Sourcing",
    description:
      "Source products from China with confidence. Direct factory access, 100% quality inspection, secure payments, and door-to-door shipping.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
