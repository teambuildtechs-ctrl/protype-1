import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CartDrawer from "@/components/cart/CartDrawer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Cocoa Cafe | Virar West",
  description: "Crafted for every craving. Coffee, Desserts, Food, Experiences in Virar West.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <CartDrawer />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
