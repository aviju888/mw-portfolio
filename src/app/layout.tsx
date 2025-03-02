import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Microbiology Portfolio | UC Berkeley",
  description: "Professional portfolio showcasing microbiology research, projects, and academic achievements from UC Berkeley",
  keywords: ["microbiology", "UC Berkeley", "biology", "research", "portfolio", "science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
