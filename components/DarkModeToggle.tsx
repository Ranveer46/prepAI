"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function DarkModeToggle({
  darkMode,
  setDarkMode,
}: DarkModeToggleProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`relative p-2 rounded-full transition-all duration-300 ${
        darkMode
          ? "bg-slate-700 text-yellow-400 hover:bg-slate-600"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      }`}
      aria-label="Toggle dark mode"
      id="dark-mode-toggle"
    >
      <div className="relative w-5 h-5">
        {darkMode ? (
          <Sun className="w-5 h-5 transition-all duration-300" />
        ) : (
          <Moon className="w-5 h-5 transition-all duration-300" />
        )}
      </div>
    </button>
  );
}
