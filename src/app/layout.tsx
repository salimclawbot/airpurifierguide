import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Air Purifier Report", template: "%s | Air Purifier Report" },
  description: "Expert guides on air purifiers, CADR ratings, HEPA filters, and improving indoor air quality for allergies, asthma, and home health.",
  metadataBase: new URL("https://airpurifierreport.com"),
  alternates: { canonical: "https://airpurifierreport.com" },
  openGraph: { siteName: "Air Purifier Report", type: "website", title: "Air Purifier Report", description: "Expert guides on air purifiers, CADR ratings, HEPA filters, and improving indoor air quality.", url: "https://airpurifierreport.com" },
  twitter: { card: "summary_large_image", title: "Air Purifier Report", description: "Expert guides on air purifiers, CADR ratings, HEPA filters, and improving indoor air quality." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={`${inter.className} antialiased`}><Header /><main className="min-h-screen">{children}</main><Footer />        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VWGKYBQYNR" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VWGKYBQYNR');`}
        </Script>
      </body></html>);
}