"use client";

import { Code2, Link2, Mail, Zap } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`border-t mt-24 ${darkMode
        ? "bg-slate-950 border-slate-800 text-slate-400"
        : "bg-white border-slate-200 text-slate-500"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span
                className={`font-bold text-lg ${darkMode ? "text-white" : "text-slate-900"
                  }`}
              >
                PrepWise AI
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              AI-powered interview preparation platform that transforms your
              documents into comprehensive study material.
            </p>
          </div>

          {/* Built By */}
          <div>
            <h3
              className={`font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"
                }`}
            >
              Built By
            </h3>
            <div className="space-y-2">
              <p className="text-sm font-medium">Ranveer Pensalwar</p>
              <a
                href="mailto:pensalwarranveer1@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-violet-500 transition-colors"
                id="footer-email"
              >
                <Mail className="w-4 h-4" />
                pensalwarranveer1@gmail.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className={`font-semibold mb-3 ${darkMode ? "text-white" : "text-slate-900"
                }`}
            >
              Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/Ranveer46"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-violet-500 transition-colors"
                id="footer-github"
              >
                <Code2 className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ranveer-pensalwar-b59b4a25b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-violet-500 transition-colors"
                id="footer-linkedin"
              >
                <Link2 className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-violet-500 transition-colors"
                id="footer-digital-heroes"
              >
                🦸 Digital Heroes
              </a>
            </div>
          </div>
        </div>

        <div
          className={`border-t mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? "border-slate-800" : "border-slate-200"
            }`}
        >
          <p className="text-sm">
            © 2026 PrepWise AI. Built by{" "}
            <span className={darkMode ? "text-white" : "text-slate-900"}>
              Ranveer Pensalwar
            </span>
          </p>
          <p className="text-xs">
            Powered by Google Gemini AI • Next.js 15 • TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
