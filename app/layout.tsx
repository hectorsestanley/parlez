import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Parlez — Learn French Through Conversation",
  description:
    "AI-powered French learning through real conversation practice. Speak first, type second.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} font-sans bg-cream text-midnight antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
