import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  display: "swap",
});

const sunroll = localFont({
  src: "../../public/fonts/Sunroll.ttf",
  variable: "--font-sunroll",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srikanth K | Portfolio",
  description: "Premium editorial-style portfolio of Srikanth K.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${afacad.variable} ${sunroll.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
