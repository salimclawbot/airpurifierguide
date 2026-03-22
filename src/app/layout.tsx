import Script from 'next/script';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ADHD Productivity Tips — Focus Guides 2026",
    template: "%s | ADHD Productivity Tips",
  },
  description: "Proven ADHD productivity systems, time management strategies and the best apps for adults with ADHD.",
  metadataBase: new URL("https://www.adhdproductivitytips.com"),
  openGraph: {
    siteName: "ADHD Productivity Tips",
    type: "website",
    locale: "en_US",
    title: "ADHD Productivity Tips — Proven Systems for Adults 2026",
    description: "Proven ADHD productivity systems, time management strategies and the best apps for adults with ADHD.",
    url: "https://adhdproductivitytips.com",
    images: [{
      url: "https://adhdproductivitytips.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "ADHD Productivity Tips — Proven Systems for Adults 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHD Productivity Tips — Proven Systems for Adults 2026",
    description: "Proven ADHD productivity systems, time management strategies and the best apps for adults with ADHD.",
    images: ["https://adhdproductivitytips.com/og-image.jpg"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ADHD Productivity Tips",
  "url": "https://adhdproductivitytips.com",
  "description": "Proven ADHD productivity systems and strategies by Dr. Marcus Webb",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://adhdproductivitytips.com/?s={{search_term_string}}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CMC8LKTDMC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CMC8LKTDMC');
          `}
        </Script>
      </body>
    </html>
  );
}
