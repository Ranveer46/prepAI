"use client";

import { useState } from "react";
import { Flashcard } from "@/types";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface FlashcardsSectionProps {
  darkMode: boolean;
  flashcards: Flashcard[];
}

export default function FlashcardsSection({
  darkMode,
  flashcards,
}: FlashcardsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  const current = flashcards[currentIndex];

  const next = () => {
    setFlipped(false);
    setTimeout(() => setCurrentIndex((i) => (i + 1) % flashcards.length), 150);
  };

  const prev = () => {
    setFlipped(false);
    setTimeout(
      () =>
        setCurrentIndex((i) => (i - 1 + flashcards.length) % flashcards.length),
      150
    );
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
            Flashcards ({flashcards.length})
          </h3>
          <p
            className={`text-sm mt-1 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Click the card to reveal the answer
          </p>
        </div>
        <button
          onClick={() => setViewAll(!viewAll)}
          className={`text-sm px-4 py-2 rounded-xl border transition-colors ${
            darkMode
              ? "border-slate-600 text-slate-300 hover:bg-slate-700"
              : "border-slate-300 text-slate-600 hover:bg-slate-100"
          }`}
        >
          {viewAll ? "Card View" : "View All"}
        </button>
      </div>

      {viewAll ? (
        /* All cards grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flashcards.map((card, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl border ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white border-slate-200"
              }`}
            >
              <div
                className={`text-xs font-semibold mb-2 ${
                  darkMode ? "text-violet-400" : "text-violet-600"
                }`}
              >
                Q{i + 1}
              </div>
              <p
                className={`font-medium text-sm mb-3 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {card.question}
              </p>
              <div
                className={`pt-3 border-t ${
                  darkMode ? "border-slate-700" : "border-slate-200"
                }`}
              >
                <div
                  className={`text-xs font-semibold mb-1 ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  Answer
                </div>
                <p
                  className={`text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {card.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Single card flip view */
        <div className="flex flex-col items-center gap-6">
          {/* Progress */}
          <div className="flex gap-1.5">
            {flashcards.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 bg-violet-600"
                    : i < currentIndex
                    ? "w-1.5 bg-violet-400"
                    : "w-1.5 bg-slate-600"
                }`}
              />
            ))}
          </div>

          {/* Flashcard */}
          <div
            className="w-full max-w-2xl perspective-1000 cursor-pointer"
            style={{ perspective: "1000px" }}
            onClick={() => setFlipped(!flipped)}
            id={`flashcard-${currentIndex}`}
          >
            <div
              className="relative h-64 transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className={`absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center text-center border-2 ${
                  darkMode
                    ? "bg-gradient-to-br from-slate-800 to-slate-900 border-violet-500/30"
                    : "bg-gradient-to-br from-white to-violet-50 border-violet-200"
                }`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-widest mb-4 ${
                    darkMode ? "text-violet-400" : "text-violet-600"
                  }`}
                >
                  Question {currentIndex + 1} of {flashcards.length}
                </div>
                <p
                  className={`text-xl font-semibold leading-relaxed ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {current.question}
                </p>
                <p
                  className={`text-xs mt-4 ${
                    darkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Click to reveal answer
                </p>
              </div>

              {/* Back */}
              <div
                className={`absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center text-center border-2 ${
                  darkMode
                    ? "bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-500/30"
                    : "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div
                  className={`text-xs font-bold uppercase tracking-widest mb-4 ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  Answer
                </div>
                <p
                  className={`text-lg leading-relaxed ${
                    darkMode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {current.answer}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
                darkMode
                  ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                  : "border-slate-300 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => setFlipped(false)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all duration-200 ${
                darkMode
                  ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                  : "border-slate-300 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>

            <button
              onClick={next}
              className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
                darkMode
                  ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                  : "border-slate-300 text-slate-600 hover:bg-slate-100"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p
            className={`text-sm ${
              darkMode ? "text-slate-500" : "text-slate-400"
            }`}
          >
            {currentIndex + 1} / {flashcards.length}
          </p>
        </div>
      )}
    </div>
  );
}
