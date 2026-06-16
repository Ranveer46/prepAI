"use client";

import {
  Brain,
  Zap,
  FileText,
  MessageSquare,
  Map,
  Users,
  BookOpen,
  Award,
} from "lucide-react";

interface FeaturesSectionProps {
  darkMode: boolean;
}

const features = [
  {
    icon: FileText,
    title: "PDF Intelligence",
    description:
      "Upload any PDF — resume, notes, or research paper. Our parser extracts every key insight instantly.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI Summary Engine",
    description:
      "Get key concepts, important points, and interview-relevant topics distilled from your documents.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: BookOpen,
    title: "Smart Flashcards",
    description:
      "Generate 12+ interactive flashcards with questions and answers tailored to your target company.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: MessageSquare,
    title: "Interview Questions",
    description:
      "Technical, behavioral, HR, and company-specific questions — all generated from your actual content.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Zap,
    title: "Mock Interview",
    description:
      "Practice with 10 likely interview questions based on your profile and target company culture.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Map,
    title: "Preparation Roadmap",
    description:
      "A week-by-week preparation plan showing exactly what to study, revise, and when to do it.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Networking Assistant",
    description:
      "Personalized LinkedIn outreach, alumni messages, and recruiter emails generated from your profile.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Award,
    title: "Alumni Search",
    description:
      "Smart Google search links to find alumni at your target company without violating any platform rules.",
    gradient: "from-red-500 to-orange-500",
  },
];

export default function FeaturesSection({ darkMode }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={`py-24 ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              darkMode
                ? "bg-violet-900/50 text-violet-300 border border-violet-700/50"
                : "bg-violet-100 text-violet-700 border border-violet-200"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            8 Powerful Features
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              ace your interview
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Stop spending hours manually preparing. Let AI do the heavy lifting
            while you focus on what matters — practicing and building
            confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700/50 hover:border-violet-500/50 hover:shadow-violet-500/10"
                    : "bg-white border-slate-200 hover:border-violet-300 hover:shadow-violet-100"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3
                  className={`font-semibold text-base mb-2 ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
