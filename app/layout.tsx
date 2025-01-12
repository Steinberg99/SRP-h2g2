// External
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// Internal
import H2G2Provider from "@/contexts/LogicContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "H2G2",
  description: "Hitchhikers Guide to the Galaxy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex h-screen w-screen items-center justify-center">
          <H2G2Provider>{children}</H2G2Provider>
        </main>
      </body>
    </html>
  );
}
