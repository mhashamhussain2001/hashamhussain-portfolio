import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const stixTwoText = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Muhammad Hasham Hussain — Data Science & Machine Learning",
  description:
    "Portfolio of Muhammad Hasham Hussain, a data science graduate student working on machine learning and analytics projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${stixTwoText.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
