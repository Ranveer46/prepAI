import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrepWise AI — AI-Powered Interview Preparation Platform",
  description:
    "Upload your resume or notes and generate company-specific interview prep material: flashcards, interview questions, networking messages, and a preparation roadmap. Built by Ranveer Pensalwar.",
  keywords: [
    "interview preparation",
    "AI interview prep",
    "flashcards",
    "resume analysis",
    "Google interview",
    "Amazon interview",
    "PrepWise AI",
    "Ranveer Pensalwar",
  ],
  authors: [{ name: "Ranveer Pensalwar" }],
  openGraph: {
    title: "PrepWise AI — AI-Powered Interview Preparation",
    description:
      "Transform your resume and notes into personalized interview prep material with AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
