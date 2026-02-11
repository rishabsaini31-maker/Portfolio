import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Rishab Saini - Full Stack Developer | Building Scalable Web Applications",
  description:
    "Full Stack Developer specializing in building production-ready, scalable web applications. Expert in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Rishab Saini",
  ],
  authors: [{ name: "Rishab Saini" }],
  creator: "Rishab Saini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rishabsaini.com",
    title: "Rishab Saini - Full Stack Developer",
    description: "Full Stack Developer building scalable web applications",
    siteName: "Rishab Saini Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishab Saini - Full Stack Developer",
    description: "Full Stack Developer building scalable web applications",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
