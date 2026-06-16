"use client";

import { useState } from "react";
import { InterviewQuestion } from "@/types";
import { Code2, Heart, Users, Building2, ChevronDown } from "lucide-react";

interface InterviewQuestionsSectionProps {
  darkMode: boolean;
  questions: InterviewQuestion[];
  companyName: string;
}

const CATEGORY_CONFIG = {
  technical: {
    label: "Technical",
    color: "blue",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
  },
  behavioral: {
    label: "Behavioral",
    color: "purple",
    icon: Heart,
    gradient: "from-purple-500 to-pink-500",
  },
  hr: {
    label: "HR",
    color: "green",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
  },
  "company-specific": {
    label: "Company Specific",
    color: "orange",
    icon: Building2,
    gradient: "from-orange-500 to-amber-500",
  },
};

export default function InterviewQuestionsSection({
  darkMode,
  questions,
  companyName,
}: InterviewQuestionsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = ["all", "technical", "behavioral", "hr", "company-specific"];

  const filtered =
    activeCategory === "all"
      ? questions
      : questions.filter((q) => q.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const count =
            cat === "all"
              ? questions.length
              : questions.filter((q) => q.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md"
                  : darkMode
                  ? "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat === "all" ? "All" : CATEGORY_CONFIG[cat as keyof typeof CATEGORY_CONFIG]?.label || cat}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat
                    ? "bg-white/20 text-white"
                    : darkMode
                    ? "bg-slate-700 text-slate-400"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Questions list */}
      <div className="space-y-3">
        {filtered.map((q, i) => {
          const config = CATEGORY_CONFIG[q.category];
          const Icon = config.icon;
          const isExpanded = expandedIndex === i;

          return (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700 hover:border-slate-600"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="w-full flex items-center gap-4 p-4 text-left"
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-medium text-sm ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {q.question}
                  </p>
                  <span
                    className={`text-xs mt-0.5 inline-block ${
                      darkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {config.label}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  } ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                />
              </button>

              {isExpanded && q.hint && (
                <div
                  className={`px-4 pb-4 ${
                    darkMode ? "border-t border-slate-700" : "border-t border-slate-100"
                  }`}
                >
                  <div
                    className={`mt-3 p-3 rounded-xl text-sm ${
                      darkMode
                        ? "bg-violet-900/20 text-violet-300 border border-violet-700/30"
                        : "bg-violet-50 text-violet-700 border border-violet-100"
                    }`}
                  >
                    <span className="font-semibold">💡 Hint: </span>
                    {q.hint}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div
          className={`text-center py-12 ${
            darkMode ? "text-slate-500" : "text-slate-400"
          }`}
        >
          No questions in this category.
        </div>
      )}
    </div>
  );
}
