"use client";

import { ArrowDown, Sparkles, Upload, Zap } from "lucide-react";

interface HeroSectionProps {
  darkMode: boolean;
  onGetStarted: () => void;
}

export default function HeroSection({
  darkMode,
  onGetStarted,
}: HeroSectionProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 to-violet-50"
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-violet-600" : "bg-violet-400"
          } animate-pulse`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            darkMode ? "bg-indigo-600" : "bg-indigo-400"
          } animate-pulse`}
          style={{ animationDelay: "1s" }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5 ${
            darkMode ? "bg-violet-500" : "bg-violet-300"
          }`}
        />
        {/* Grid pattern */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]"
          } bg-[size:64px_64px]`}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border ${
            darkMode
              ? "bg-violet-900/30 text-violet-300 border-violet-700/50"
              : "bg-violet-100 text-violet-700 border-violet-200"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Powered by Google Gemini AI
        </div>

        {/* Heading */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Ace Your Interview with{" "}
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            AI-Powered Prep
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Upload your resume or notes, enter a company name, and get
          personalized{" "}
          <span className="font-semibold">flashcards, interview questions,</span>{" "}
          and <span className="font-semibold">networking messages</span> in
          seconds.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { value: "12+", label: "Flashcards Generated" },
            { value: "14+", label: "Interview Questions" },
            { value: "8", label: "AI-Powered Features" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className={`text-3xl font-black bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm mt-1 ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onGetStarted}
            id="get-started-btn"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300"
          >
            <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Upload PDF & Start
          </button>

          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
            id="digital-heroes-btn"
            className={`flex items-center gap-2 px-8 py-4 font-bold text-lg rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "border-violet-500 text-violet-400 hover:bg-violet-900/30"
                : "border-violet-500 text-violet-700 hover:bg-violet-50"
            }`}
          >
            🦸 Built for Digital Heroes
          </a>
        </div>

        {/* Creator badge */}
        <div
          className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl border ${
            darkMode
              ? "bg-slate-800/50 border-slate-700 text-slate-300"
              : "bg-white border-slate-200 text-slate-600"
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
            R
          </div>
          <div className="text-left">
            <div
              className={`text-sm font-semibold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Ranveer Pensalwar
            </div>
            <div className="text-xs">ranveerpensalwar@gmail.com</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown
            className={`w-6 h-6 ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
