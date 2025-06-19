import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import LenisProvider from "@/components/common/LenisProvider";
import Header from "@/components/common/Header";

const bagoss = localFont({
  src: "../../public/fonts/bagoss/BagossTRIALVF.ttf",
  variable: "--font-bagoss",
});

const sohne = localFont({
  src: "../../public/fonts/sohne/Sohne-Buch.otf",
  variable: "--font-sohne",
});

export const metadata: Metadata = {
  title: "Juicebox",
  description:
    "Compare your thoughs on technology with current industry opinions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bagoss.variable} ${sohne.variable}`}>
        <LenisProvider>
          <Header />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
