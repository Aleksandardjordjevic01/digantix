import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://digantix.com'),
  title: {
    default: "Digantix - Digital Product Design and Technology Partner",
    template: "%s | Digantix"
  },
  description: "Working alongside ambitious startups and enterprises to build scalable web, mobile, and cross-platform products. Expert development in Next.js, React, React Native, and modern web technologies.",
  keywords: [
    "web development",
    "mobile app development",
    "digital agency",
    "software development",
    "Next.js",
    "React",
    "React Native",
    "UI/UX design",
    "custom software",
    "CRM development",
    "e-commerce development",
    "digital transformation",
    "technology partner",
    "startup development",
    "enterprise solutions"
  ],
  authors: [{ name: "Digantix" }],
  creator: "Digantix",
  publisher: "Digantix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Digantix - Digital Product Design and Technology Partner",
    description: "Working alongside ambitious startups and enterprises to build scalable web, mobile, and cross-platform products.",
    url: 'https://digantix.com',
    siteName: 'Digantix',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo/logo-light.png',
        width: 1200,
        height: 630,
        alt: 'Digantix - Digital Product Design and Technology Partner',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digantix - Digital Product Design and Technology Partner',
    description: 'Working alongside ambitious startups and enterprises to build scalable web, mobile, and cross-platform products.',
    images: ['/logo/logo-light.png'],
    creator: '@digantix',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://digantix.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
