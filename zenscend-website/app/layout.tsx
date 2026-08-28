import type { Metadata } from "next";
import { Martian_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zenscend — interfaces people use, systems that hold",
  description:
    "We are not a web shop or a mobile shop. We are developers. Whatever the problem runs on, we build it, and we run it after.",
  keywords:
    "software development, custom software, cloud infrastructure, DevOps, legacy modernization, technical advisory, software consultancy, Pretoria, South Africa",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Zenscend",
    description:
      "Whatever the problem runs on, we build it, and we run it after.",
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
      <body className={`${display.variable} ${sans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
