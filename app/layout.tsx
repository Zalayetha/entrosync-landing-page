import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entrosync",
  description: "Landing page for Entrosync SaaS",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="entrosync"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-background text-foreground">{children}</body>
    </html>
  );
}
