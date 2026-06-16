"use client";

import { Brain, Lightbulb, Target, BookOpen } from "lucide-react";

interface SummaryCardProps {
  darkMode: boolean;
  summary: {
    keyConcepts: string[];
    importantPoints: string[];
    interviewTopics: string[];
    overview: string;
  };
  companyName: string;
}

export default function SummaryCard({
  darkMode,
  summary,
  companyName,
}: SummaryCardProps) {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div
        className={`p-6 rounded-2xl border ${
          darkMode
            ? "bg-gradient-to-br from-violet-900/30 to-indigo-900/30 border-violet-700/50"
            : "bg-gradient-to-br from-violet-50 to-indigo-50 border-violet-200"
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <h3
            className={`font-bold text-lg ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            AI Overview — {companyName} Preparation
          </h3>
        </div>
        <p
          className={`leading-relaxed ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          {summary.overview}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Key Concepts */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-slate-800/50 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-blue-500" />
            </div>
            <h4
              className={`font-semibold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Key Concepts
            </h4>
          </div>
          <ul className="space-y-2">
            {summary.keyConcepts.map((concept, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-500 text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  {i + 1}
                </span>
                <span
                  className={`text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {concept}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Points */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-slate-800/50 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-amber-500" />
            </div>
            <h4
              className={`font-semibold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Important Points
            </h4>
          </div>
          <ul className="space-y-2">
            {summary.importantPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                <span
                  className={`text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interview Topics */}
        <div
          className={`p-6 rounded-2xl border ${
            darkMode
              ? "bg-slate-800/50 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Target className="w-4 h-4 text-green-500" />
            </div>
            <h4
              className={`font-semibold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Interview Topics
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {summary.interviewTopics.map((topic, i) => (
              <span
                key={i}
                className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                  darkMode
                    ? "bg-green-900/30 text-green-400 border border-green-700/50"
                    : "bg-green-100 text-green-700 border border-green-200"
                }`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
