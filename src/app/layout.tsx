import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Wilshire Law Firm | Over $2 Billion Recovered | Free Consultation",
    template: "%s | Wilshire Law Firm",
  },
  description:
    "Wilshire Law Firm has recovered over $2 billion for injury victims. 500+ legal professionals. No fees unless you get paid. Available 24/7. Call (855) 977-9094.",
  keywords: [
    "personal injury lawyer",
    "car accident attorney",
    "Los Angeles lawyer",
    "Wilshire Law Firm",
    "injury attorney",
    "free consultation",
  ],
  openGraph: {
    title: "Wilshire Law Firm | Over $2 Billion Recovered",
    description:
      "500+ legal professionals fighting for maximum compensation. No fees unless you get paid.",
    type: "website",
    locale: "en_US",
    siteName: "Wilshire Law Firm",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Wilshire Law Firm",
              description:
                "Over $2 Billion recovered. 500+ legal professionals. Personal injury, employment rights, and class action attorneys.",
              telephone: "+1-855-977-9094",
              address: {
                "@type": "PostalAddress",
                streetAddress: "660 S. Figueroa Street Sky Lobby",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90017",
              },
              url: "https://wilshirelawfirm.com",
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "Free Consultation",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "1000",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
