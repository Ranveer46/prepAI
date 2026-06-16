"use client";

import { useState } from "react";
import { Mic, ChevronRight, Lightbulb, CheckCircle2 } from "lucide-react";

interface MockInterviewSectionProps {
  darkMode: boolean;
  mockInterview: {
    questions: string[];
    tips: string[];
  };
  companyName: string;
}

export default function MockInterviewSection({
  darkMode,
  mockInterview,
  companyName,
}: MockInterviewSectionProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answered, setAnswered] = useState<Set<number>>(new Set());
  const [mode, setMode] = useState<"practice" | "list">("practice");

  const markAnswered = () => {
    setAnswered((prev) => new Set([...prev, currentQ]));
  };

  const next = () => {
    if (currentQ < mockInterview.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const prev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3
            className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Mock Interview — {companyName}
          </h3>
          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {answered.size}/{mockInterview.questions.length} questions answered
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMode("practice")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              mode === "practice"
                ? "bg-violet-600 text-white"
                : darkMode
                ? "bg-slate-700 text-slate-300"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Practice Mode
          </button>
          <button
            onClick={() => setMode("list")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              mode === "list"
                ? "bg-violet-600 text-white"
                : darkMode
                ? "bg-slate-700 text-slate-300"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            All Questions
          </button>
        </div>
      </div>

      {mode === "practice" ? (
        <div className="space-y-6">
          {/* Question Card */}
          <div
            className={`p-8 rounded-3xl border-2 ${
              answered.has(currentQ)
                ? darkMode
                  ? "border-green-500/30 bg-green-900/10"
                  : "border-green-300 bg-green-50"
                : darkMode
                ? "border-violet-500/30 bg-slate-800/50"
                : "border-violet-200 bg-violet-50"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  answered.has(currentQ)
                    ? "bg-green-500"
                    : "bg-gradient-to-br from-violet-600 to-indigo-600"
                }`}
              >
                {answered.has(currentQ) ? (
                  <CheckCircle2 className="w-6 h-6 text-white" />
                ) : (
                  <Mic className="w-6 h-6 text-white" />
                )}
              </div>
              <div className="flex-1">
                <div
                  className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                    answered.has(currentQ)
                      ? "text-green-500"
                      : darkMode
                      ? "text-violet-400"
                      : "text-violet-600"
                  }`}
                >
                  Question {currentQ + 1} of {mockInterview.questions.length}
                  {answered.has(currentQ) && " • Answered"}
                </div>
                <p
                  className={`text-xl font-semibold leading-relaxed ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {mockInterview.questions[currentQ]}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={currentQ === 0}
              className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                currentQ === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-105"
              } ${
                darkMode
                  ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                  : "border-slate-300 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Previous
            </button>

            <button
              onClick={markAnswered}
              disabled={answered.has(currentQ)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] ${
                answered.has(currentQ)
                  ? "bg-green-500/20 text-green-500 cursor-default"
                  : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40"
              }`}
            >
              {answered.has(currentQ)
                ? "✓ Answered"
                : "Mark as Answered"}
            </button>

            <button
              onClick={next}
              disabled={currentQ === mockInterview.questions.length - 1}
              className={`flex items-center gap-1 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                currentQ === mockInterview.questions.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-105"
              } ${
                darkMode
                  ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                  : "border-slate-300 text-slate-600 hover:bg-slate-100"
              }`}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar */}
          <div
            className={`h-2 rounded-full ${
              darkMode ? "bg-slate-700" : "bg-slate-200"
            }`}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-500"
              style={{
                width: `${(answered.size / mockInterview.questions.length) * 100}%`,
              }}
            />
          </div>
        </div>
      ) : (
        /* List view */
        <div className="space-y-3">
          {mockInterview.questions.map((q, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 p-4 rounded-2xl border ${
                answered.has(i)
                  ? darkMode
                    ? "border-green-500/30 bg-green-900/10"
                    : "border-green-200 bg-green-50"
                  : darkMode
                  ? "border-slate-700 bg-slate-800/50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  answered.has(i)
                    ? "bg-green-500 text-white"
                    : darkMode
                    ? "bg-slate-700 text-slate-400"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {answered.has(i) ? "✓" : i + 1}
              </span>
              <p
                className={`text-sm flex-1 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {q}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tips Section */}
      <div
        className={`p-6 rounded-2xl border ${
          darkMode
            ? "bg-amber-900/10 border-amber-700/30"
            : "bg-amber-50 border-amber-200"
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          <h4
            className={`font-semibold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Pro Tips for {companyName}
          </h4>
        </div>
        <ul className="space-y-2">
          {mockInterview.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
              <span
                className={`text-sm ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {tip}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
