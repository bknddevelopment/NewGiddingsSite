import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Giddings Consulting Group | Social Impact Strategy Firm",
  description: "Giddings Consulting Group strengthens organizations working for equity and community impact. Strategic planning, board development, leadership coaching, and philanthropic strategy.",
  keywords: "nonprofit consulting, social impact, strategic planning, board development, fundraising, leadership development, equity, community impact",
  openGraph: {
    title: "Giddings Consulting Group | Social Impact Strategy Firm",
    description: "Strengthening organizations working for equity and community impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
