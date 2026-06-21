import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description:
    "UI/UX Engineer & Technical Product Manager building thoughtful product experiences at the intersection of design and engineering.",
  metadataBase: new URL("https://lucasvoron.com"),
  openGraph: {
    title: "Lucas Voron",
    description:
      "UI/UX Engineer & Technical Product Manager building thoughtful product experiences at the intersection of design and engineering.",
    url: "https://lucasvoron.com/",
    siteName: "Lucas Voron",
    images: [
      {
        url: "https://lucasvoron.com/favicon.ico",
        width: 180,
        height: 180,
        alt: "Lucas Voron favicon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
