import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://quantera.site"),
  title: {
    default: "Quantera (QNR) | Official ERC-20 Token on Ethereum",
    template: "%s | Quantera (QNR)",
  },
  description:
    "Official ERC-20 token on Ethereum with transparent tokenomics, long-term utility roadmap, strong governance, and security-first design.",
  applicationName: "Quantera",
  authors: [{ name: "Quantera Team", url: "https://quantera.site" }],
  generator: "Next.js",
  keywords: [
    "Quantera",
    "QNR",
    "Ethereum",
    "ERC-20",
    "Cryptocurrency",
    "DeFi",
    "Blockchain",
    "Tokenomics",
    "Governance",
    "Security",
    "Web3",
    "Utility Token",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Quantera Team",
  publisher: "Quantera Project",
  category: "cryptocurrency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://quantera.site",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantera.site",
    siteName: "Quantera (QNR)",
    title: "Quantera (QNR) | Official ERC-20 Token on Ethereum",
    description:
      "Official ERC-20 token on Ethereum with transparent tokenomics, long-term utility roadmap, strong governance, and security-first design.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Quantera (QNR) - Official ERC-20 Token",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantera (QNR) | Official ERC-20 Token on Ethereum",
    description:
      "Official ERC-20 token on Ethereum with transparent tokenomics, long-term utility roadmap, strong governance, and security-first design.",
    images: ["/og.png"],
    creator: "@QuanteraToken",
    site: "@QuanteraToken",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col text-text-primary`}>
        <InteractiveBackground />
        <JsonLd />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
