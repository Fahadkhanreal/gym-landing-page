import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from '@/components/ui/whatsapp-button';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitForge Gym - Transform Your Body. Forge Your Future.",
  description: "Elite training. World-class trainers. Real results. Join Karachi's most premium fitness experience.",
  keywords: ["gym", "fitness", "karachi", "training", "workout", "premium gym", "fitforge"],
  authors: [{ name: "FitForge Gym" }],
  openGraph: {
    title: "FitForge Gym - Premium Fitness in Karachi",
    description: "Elite training. World-class trainers. Real results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
