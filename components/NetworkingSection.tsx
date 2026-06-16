"use client";

import { useState } from "react";
import { NetworkingMessage } from "@/types";
import { Link2, Users, Briefcase, Copy, Check } from "lucide-react";

interface NetworkingSectionProps {
  darkMode: boolean;
  networking: NetworkingMessage[];
  companyName: string;
}

const TYPE_CONFIG = {
  linkedin: {
    label: "LinkedIn Outreach",
    icon: Link2,
    gradient: "from-blue-600 to-blue-700",
    color: "blue",
  },
  alumni: {
    label: "Alumni Message",
    icon: Users,
    gradient: "from-violet-600 to-purple-700",
    color: "violet",
  },
  recruiter: {
    label: "Recruiter Email",
    icon: Briefcase,
    gradient: "from-green-600 to-emerald-700",
    color: "green",
  },
};

export default function NetworkingSection({
  darkMode,
  networking,
  companyName,
}: NetworkingSectionProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`p-5 rounded-2xl border ${
          darkMode
            ? "bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-700/30"
            : "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
        }`}
      >
        <h3
          className={`font-bold text-lg mb-1 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Networking Messages for {companyName}
        </h3>
        <p
          className={`text-sm ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Personalized outreach templates. Click the copy button to use them.
          Customize [Name] and [their background] placeholders before sending.
        </p>
      </div>

      {/* Message Cards */}
      <div className="space-y-6">
        {networking.map((msg, i) => {
          const config = TYPE_CONFIG[msg.type];
          const Icon = config.icon;
          const msgId = `${msg.type}-${i}`;

          return (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden ${
                darkMode ? "border-slate-700" : "border-slate-200"
              }`}
            >
              {/* Header bar */}
              <div
                className={`flex items-center justify-between p-4 bg-gradient-to-r ${config.gradient}`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-semibold text-white text-sm">
                      {config.label}
                    </p>
                    {msg.subject && (
                      <p className="text-white/70 text-xs">
                        Subject: {msg.subject}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(msg.message, msgId)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-medium rounded-lg transition-colors"
                >
                  {copied === msgId ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              {/* Message body */}
              <div
                className={`p-5 ${
                  darkMode ? "bg-slate-800/50" : "bg-white"
                }`}
              >
                <pre
                  className={`whitespace-pre-wrap font-sans text-sm leading-relaxed ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {msg.message}
                </pre>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pro tip */}
      <div
        className={`p-4 rounded-xl text-sm ${
          darkMode
            ? "bg-amber-900/20 text-amber-400 border border-amber-700/30"
            : "bg-amber-50 text-amber-700 border border-amber-200"
        }`}
      >
        <strong>💡 Pro Tip:</strong> Personalize each message before sending.
        Replace [Name] with the actual person's name, and customize the skills
        mentioned based on their specific background and experience.
      </div>
    </div>
  );
}
