import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenscend Tech Solutions - Elevate Your Digital Experience",
  description: "Modern, forward-thinking software and technology solutions that deliver clean, efficient, and scalable results for businesses in the digital space.",
  keywords: "software development, technology solutions, digital transformation, scalable software, innovative technology",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Zenscend Tech Solutions",
    description: "Elevate your digital experience with clean, efficient, and scalable software solutions",
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
