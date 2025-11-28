import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "CPGIO Knowledge Base | Capabilities, KPIs & RFP Intelligence",
  description: "Explore CPGIO's proven eCommerce capabilities: 48K units/hr fulfillment, 5-8x ROAS media performance, brand protection, and integrated operations. Access RFP answers, case studies, and service-level KPIs.",
  keywords: ["Amazon FBA", "3PL", "eCommerce fulfillment", "retail media", "brand protection", "marketplace operations", "ROAS", "Amazon advertising"],
  authors: [{ name: "CPGIO" }],
  openGraph: {
    type: "website",
    url: "https://jackyjross.github.io/cpgio-knowledge-base/",
    title: "CPGIO Knowledge Base | Capabilities, KPIs & RFP Intelligence",
    description: "Explore CPGIO's proven eCommerce capabilities: 48K units/hr fulfillment, 5-8x ROAS media performance, brand protection, and integrated operations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CPGIO Knowledge Base",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPGIO Knowledge Base | Capabilities, KPIs & RFP Intelligence",
    description: "Explore CPGIO's proven eCommerce capabilities: 48K units/hr fulfillment, 5-8x ROAS media performance, brand protection, and integrated operations.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.variable} font-sans antialiased bg-slate-950 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
