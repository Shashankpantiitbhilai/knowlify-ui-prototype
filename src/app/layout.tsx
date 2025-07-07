import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knowlify - AI Educational Video Generator",
  description: "Transform PDFs, text, and documents into engaging Khan Academy-style educational videos in just 15 seconds using AI. No manual editing required.",
  keywords: "AI, education, video generation, Khan Academy, learning, teaching, content creation",
  authors: [{ name: "Knowlify Team" }],
  creator: "Knowlify",
  publisher: "Knowlify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://knowlify.net"),
  openGraph: {
    title: "Knowlify - AI Educational Video Generator",
    description: "Transform any content into engaging educational videos in 15 seconds",
    url: "https://knowlify.net",
    siteName: "Knowlify",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowlify - AI Educational Video Generator",
    description: "Transform any content into engaging educational videos in 15 seconds",
    creator: "@knowlify",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
