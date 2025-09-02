import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteClose from "./components/SiteClose";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lucas Voron",
  description: "I am a UI/UX Engineer interested in design and software engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <SiteClose />
        {children}
      </body>
    </html>
  );
}
