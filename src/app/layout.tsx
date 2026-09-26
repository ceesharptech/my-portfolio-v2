import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eniola — Frontend Engineer",
  description:
    "The portfolio of Eniola, a frontend engineer building thoughtful digital experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="m-0 min-h-screen">{children}</body>
    </html>
  );
}
