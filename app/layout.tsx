import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  title: "ENTAPP TECH",
  description: "Transforming businesses through tailored software solutions.",
};

const montserrat = localFont({
  src: "../public/fonts/Montserrat.ttf",
  variable: "--font-montserrat",
});
const openSans = localFont({
  src: "../public/fonts/OpenSans.ttf",
  variable: "--font-openSans",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
