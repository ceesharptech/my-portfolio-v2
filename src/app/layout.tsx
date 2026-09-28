import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Mrs_Saint_Delafield} from "next/font/google";

const mrsSaintDelafield = Mrs_Saint_Delafield({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mrs-saint-delafield",
  display: "swap",
});

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
    <html lang="en" className={`${geistSans.variable} ${mrsSaintDelafield.variable}`}>
      <body className="m-0 min-h-screen">{children}</body>
    </html>
  );
}
