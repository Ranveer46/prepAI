"use client";

import { RoadmapItem } from "@/types";
import { CheckCircle2, Clock, AlertCircle, Info } from "lucide-react";

interface RoadmapSectionProps {
  darkMode: boolean;
  roadmap: RoadmapItem[];
  companyName: string;
}

const PRIORITY_CONFIG = {
  high: {
    color: "red",
    label: "High Priority",
    bg: "bg-red-500/10",
    text: "text-red-500",
    border: "border-red-500/30",
    icon: AlertCircle,
  },
  medium: {
    color: "amber",
    label: "Medium Priority",
    bg: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500/30",
    icon: Info,
  },
  low: {
    color: "green",
    label: "Low Priority",
    bg: "bg-green-500/10",
    text: "text-green-500",
    border: "border-green-500/30",
    icon: CheckCircle2,
  },
};

const PHASE_COLORS = [
  "from-violet-600 to-indigo-600",
  "from-blue-600 to-cyan-600",
  "from-teal-600 to-green-600",
  "from-amber-600 to-orange-600",
  "from-rose-600 to-pink-600",
];

export default function RoadmapSection({
  darkMode,
  roadmap,
  companyName,
}: RoadmapSectionProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`p-6 rounded-2xl border ${
          darkMode
            ? "bg-gradient-to-br from-indigo-900/30 to-violet-900/30 border-indigo-700/50"
            : "bg-gradient-to-br from-indigo-50 to-violet-50 border-indigo-200"
        }`}
      >
        <h3
          className={`text-xl font-bold mb-1 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Interview Preparation Roadmap — {companyName}
        </h3>
        <p
          className={`text-sm ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          A structured week-by-week plan to maximize your preparation
          efficiency.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className={`absolute left-6 top-0 bottom-0 w-0.5 ${
            darkMode ? "bg-slate-700" : "bg-slate-200"
          }`}
        />

        <div className="space-y-6">
          {roadmap.map((item, i) => {
            const priorityConfig = PRIORITY_CONFIG[item.priority];
            const PriorityIcon = priorityConfig.icon;
            const colorGradient = PHASE_COLORS[i % PHASE_COLORS.length];

            return (
              <div key={i} className="relative flex gap-6">
                {/* Timeline dot */}
                <div
                  className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center z-10 text-white text-sm font-bold bg-gradient-to-br ${colorGradient} shadow-lg`}
                >
                  {i + 1}
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 p-5 rounded-2xl border mb-2 ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span
                        className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${colorGradient} bg-clip-text text-transparent`}
                      >
                        {item.phase}
                      </span>
                      <h4
                        className={`font-bold text-base mt-0.5 ${
                          darkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border ${priorityConfig.bg} ${priorityConfig.text} ${priorityConfig.border}`}
                      >
                        <PriorityIcon className="w-3 h-3" />
                        {priorityConfig.label}
                      </span>
                      <span
                        className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full ${
                          darkMode
                            ? "bg-slate-700 text-slate-400"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <p
                    className={`text-sm mb-3 ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.topics.map((topic, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                          darkMode
                            ? "bg-slate-700 text-slate-300"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
