import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://sanjaymalviya.vercel.app"),

  title: {
    default: `${portfolio.name} | ${portfolio.role}`,
    template: `%s | ${portfolio.name}`,
  },

  description: `${portfolio.name} — ${portfolio.tagline} Explore my skills, projects, and frontend development services.`,

  applicationName: `${portfolio.name} Portfolio`,
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,

  keywords: [
    portfolio.role,
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Freelance Web Developer",
    "Responsive Web Development",
  ],

  openGraph: {
    title: `${portfolio.name} | ${portfolio.role}`,
    description: portfolio.tagline,
    url: "https://sanjaymalviya.vercel.app",
    siteName: `${portfolio.name} Portfolio`,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | ${portfolio.role}`,
    description: portfolio.tagline,
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
