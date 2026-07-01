import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Xythera | Ultra-Low Latency Trading Infrastructure",
  description:
    "Building next-generation low-latency infrastructure for quantitative finance, algorithmic trading, and high-frequency trading systems.",
  keywords: [
    "high frequency trading",
    "low latency",
    "quantitative finance",
    "algorithmic trading",
    "FPGA",
    "market making",
    "exchange connectivity",
  ],
  openGraph: {
    title: "Xythera",
    description:
      "Outcompute. Outtrade. Outlast. — Ultra-low latency trading infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-xythera-background antialiased">
        <div className="scan-line-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
