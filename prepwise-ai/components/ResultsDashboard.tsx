"use client";

import { useState } from "react";
import { GeneratedContent } from "@/types";
import {
  Brain,
  BookOpen,
  MessageSquare,
  Map,
  Users,
  Search,
  Mic,
  CheckCircle2,
} from "lucide-react";
import SummaryCard from "./SummaryCard";
import FlashcardsSection from "./FlashcardsSection";
import InterviewQuestionsSection from "./InterviewQuestionsSection";
import MockInterviewSection from "./MockInterviewSection";
import RoadmapSection from "./RoadmapSection";
import NetworkingSection from "./NetworkingSection";
import AlumniSearchSection from "./AlumniSearchSection";
import ExportSection from "./ExportSection";

interface ResultsDashboardProps {
  darkMode: boolean;
  content: GeneratedContent;
  companyName: string;
}

const TABS = [
  { id: "summary", label: "Summary", icon: Brain },
  { id: "flashcards", label: "Flashcards", icon: BookOpen },
  { id: "questions", label: "Questions", icon: MessageSquare },
  { id: "mock", label: "Mock Interview", icon: Mic },
  { id: "roadmap", label: "Roadmap", icon: Map },
  { id: "networking", label: "Networking", icon: Users },
  { id: "alumni", label: "Alumni Search", icon: Search },
];

export default function ResultsDashboard({
  darkMode,
  content,
  companyName,
}: ResultsDashboardProps) {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <section
      id="results"
      className={`py-16 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-green-500 text-sm font-medium">
                Generation complete!
              </span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Your{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {companyName}
              </span>{" "}
              Prep Material
            </h2>
          </div>
          <ExportSection darkMode={darkMode} content={content} companyName={companyName} />
        </div>

        {/* Tabs */}
        <div
          className={`flex gap-1 p-1 rounded-2xl mb-8 overflow-x-auto ${
            darkMode ? "bg-slate-800" : "bg-white border border-slate-200"
          }`}
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                id={`tab-${tab.id}`}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25"
                    : darkMode
                    ? "text-slate-400 hover:text-white hover:bg-slate-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {activeTab === "summary" && (
            <SummaryCard darkMode={darkMode} summary={content.summary} companyName={companyName} />
          )}
          {activeTab === "flashcards" && (
            <FlashcardsSection darkMode={darkMode} flashcards={content.flashcards} />
          )}
          {activeTab === "questions" && (
            <InterviewQuestionsSection
              darkMode={darkMode}
              questions={content.interviewQuestions}
              companyName={companyName}
            />
          )}
          {activeTab === "mock" && (
            <MockInterviewSection
              darkMode={darkMode}
              mockInterview={content.mockInterview}
              companyName={companyName}
            />
          )}
          {activeTab === "roadmap" && (
            <RoadmapSection darkMode={darkMode} roadmap={content.roadmap} companyName={companyName} />
          )}
          {activeTab === "networking" && (
            <NetworkingSection darkMode={darkMode} networking={content.networking} companyName={companyName} />
          )}
          {activeTab === "alumni" && (
            <AlumniSearchSection darkMode={darkMode} alumniSearch={content.alumniSearch} companyName={companyName} />
          )}
        </div>
      </div>
    </section>
  );
}
