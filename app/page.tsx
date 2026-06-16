"use client";

import { useState, useRef } from "react";
import { GeneratedContent } from "@/types";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UploadSection from "@/components/UploadSection";
import ResultsDashboard from "@/components/ResultsDashboard";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import { Zap, AlertCircle } from "lucide-react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");

  const uploadRef = useRef<HTMLElement | null>(null);
  const resultsRef = useRef<HTMLElement | null>(null);

  const scrollToUpload = () => {
    document.getElementById("upload-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleGenerate = async (pdfText: string, company: string) => {
    setIsLoading(true);
    setError("");
    setCompanyName(company);
    setContent(null);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdfText, companyName: company }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate content");
      }

      setContent(data.data);

      // Scroll to results after a short delay
      setTimeout(() => {
        document.getElementById("results")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    } catch (err) {
      console.error("Generation error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          darkMode
            ? "bg-slate-950/80 border-slate-800"
            : "bg-white/80 border-slate-200"
        } backdrop-blur-xl border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span
                className={`font-bold text-lg ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                PrepWise AI
              </span>
            </div>

            {/* Nav items */}
            <div className="hidden sm:flex items-center gap-6">
              <a
                href="#features"
                className={`text-sm font-medium transition-colors ${
                  darkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Features
              </a>
              <a
                href="#upload-section"
                className={`text-sm font-medium transition-colors ${
                  darkMode
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Try It
              </a>
              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                id="nav-digital-heroes"
                className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                🦸 Digital Heroes
              </a>
            </div>

            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </nav>

      {/* Main content with top padding for fixed nav */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection darkMode={darkMode} onGetStarted={scrollToUpload} />

        {/* Features Section */}
        <FeaturesSection darkMode={darkMode} />

        {/* Upload Section */}
        <UploadSection
          darkMode={darkMode}
          onGenerate={handleGenerate}
          isLoading={isLoading}
        />

        {/* Loading State */}
        {isLoading && (
          <div
            className={`py-24 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}
          >
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="relative w-24 h-24 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-4 border-violet-500/20 animate-ping" />
                <div className="absolute inset-2 rounded-full border-4 border-violet-500/40 animate-ping" style={{ animationDelay: "0.2s" }} />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center animate-pulse">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Generating Your Prep Material
              </h3>
              <p
                className={`text-lg mb-2 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Analyzing your document with AI for{" "}
                <span className="text-violet-500 font-semibold">
                  {companyName}
                </span>
                ...
              </p>
              <p className={`text-sm ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                This takes 15-30 seconds. Generating 8 sections of content.
              </p>
              <div className="mt-6 flex justify-center gap-1">
                {["Parsing PDF", "Analyzing content", "Creating flashcards", "Writing questions"].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span className={darkMode ? "text-slate-400" : "text-slate-500"}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div
            className={`py-12 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}
          >
            <div className="max-w-2xl mx-auto px-4">
              <div
                className={`flex items-start gap-4 p-6 rounded-2xl border ${
                  darkMode
                    ? "bg-red-900/20 border-red-700/50 text-red-400"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Generation Failed</h4>
                  <p className="text-sm">{error}</p>
                  <button
                    onClick={() => setError("")}
                    className="mt-3 text-sm underline hover:no-underline"
                  >
                    Dismiss and try again
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Dashboard */}
        {content && !isLoading && (
          <ResultsDashboard
            darkMode={darkMode}
            content={content}
            companyName={companyName}
          />
        )}
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
