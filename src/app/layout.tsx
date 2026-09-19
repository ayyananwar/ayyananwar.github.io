import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/layout/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { FloatingConsultation } from "@/components/layout/FloatingConsultation";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Globus Elevators | Premium Architecture",
  description: "Experience cinematic luxury with Globus Elevators.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        <WhatsAppButton />
        
        {/* Main Content */}
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer />
        <FloatingConsultation />
      </body>
    </html>
  );
}
