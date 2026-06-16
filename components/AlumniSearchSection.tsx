"use client";

import { AlumniSearch } from "@/types";
import { ExternalLink, Search, Info } from "lucide-react";

interface AlumniSearchSectionProps {
  darkMode: boolean;
  alumniSearch: AlumniSearch[];
  companyName: string;
}

export default function AlumniSearchSection({
  darkMode,
  alumniSearch,
  companyName,
}: AlumniSearchSectionProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`p-5 rounded-2xl border ${
          darkMode
            ? "bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border-teal-700/30"
            : "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-200"
        }`}
      >
        <h3
          className={`font-bold text-lg mb-1 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Alumni & Network Search for {companyName}
        </h3>
        <p
          className={`text-sm ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Click any search link to find alumni at {companyName} directly on
          Google. We use Google's site search operator instead of scraping
          LinkedIn directly — fully compliant and effective.
        </p>
      </div>

      {/* Disclaimer */}
      <div
        className={`flex items-start gap-3 p-4 rounded-xl border ${
          darkMode
            ? "bg-blue-900/20 border-blue-700/30 text-blue-400"
            : "bg-blue-50 border-blue-200 text-blue-700"
        }`}
      >
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <p className="text-sm">
          <strong>Ethical Approach:</strong> These are Google search URLs using
          the <code className="text-xs font-mono bg-blue-500/20 px-1 py-0.5 rounded">site:</code> operator to find LinkedIn profiles. This
          respects platform terms of service and requires no scraping.
        </p>
      </div>

      {/* Search Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {alumniSearch.map((search, i) => (
          <a
            key={i}
            href={search.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              darkMode
                ? "bg-slate-800/50 border-slate-700 hover:border-teal-500/50 hover:shadow-teal-500/10"
                : "bg-white border-slate-200 hover:border-teal-400 hover:shadow-teal-100"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    darkMode ? "bg-teal-900/50 text-teal-400" : "bg-teal-100 text-teal-600"
                  }`}
                >
                  <Search className="w-4 h-4" />
                </div>
                <p
                  className={`font-medium text-sm ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {search.description}
                </p>
              </div>
              <ExternalLink
                className={`w-4 h-4 flex-shrink-0 transition-colors ${
                  darkMode
                    ? "text-slate-500 group-hover:text-teal-400"
                    : "text-slate-400 group-hover:text-teal-600"
                }`}
              />
            </div>

            <code
              className={`text-xs font-mono p-2 rounded-lg break-all ${
                darkMode ? "bg-slate-700 text-slate-300" : "bg-slate-50 text-slate-600"
              }`}
            >
              {search.query}
            </code>

            <span
              className={`text-xs font-medium ${
                darkMode ? "text-teal-400" : "text-teal-600"
              }`}
            >
              Click to search on Google →
            </span>
          </a>
        ))}
      </div>

      {/* Additional manual tips */}
      <div
        className={`p-5 rounded-2xl border ${
          darkMode ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-200"
        }`}
      >
        <h4
          className={`font-semibold mb-3 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Additional Tips for Finding Alumni
        </h4>
        <ul className="space-y-2">
          {[
            `Search LinkedIn directly: "${companyName} software engineer" and filter by "Connections of connections"`,
            "Check your college's alumni portal or LinkedIn alumni page",
            `Visit Blind or Reddit r/cscareerquestions for ${companyName} interview experiences`,
            "Join Discord servers for tech job seekers — many have company-specific channels",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className={`mt-0.5 flex-shrink-0 ${
                  darkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                →
              </span>
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
