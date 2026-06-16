"use client";

import { useState, useRef, useCallback } from "react";
import {
  Upload,
  FileText,
  X,
  Building2,
  Zap,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface UploadSectionProps {
  darkMode: boolean;
  onGenerate: (pdfText: string, companyName: string) => void;
  isLoading: boolean;
}

const POPULAR_COMPANIES = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Apple",
  "Adobe",
  "Infosys",
  "TCS",
  "Wipro",
  "Flipkart",
  "Netflix",
  "Uber",
];

export default function UploadSection({
  darkMode,
  onGenerate,
  isLoading,
}: UploadSectionProps) {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [companyName, setCompanyName] = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [extracting, setExtracting] = useState(false);
  const [extractError, setExtractError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const extractPdfText = async (pdfFile: File): Promise<string> => {
    // Use PDF.js to extract text from the PDF
    const arrayBuffer = await pdfFile.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    // Dynamically import pdfjs-dist to avoid SSR issues
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

    const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;
    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item) => ("str" in item ? item.str : ""))
        .join(" ");
      fullText += pageText + "\n";
    }

    return fullText.trim();
  };

  const handleFile = useCallback(async (selectedFile: File) => {
    if (!selectedFile.type.includes("pdf")) {
      setExtractError("Please upload a PDF file only.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setExtractError("File size must be under 10MB.");
      return;
    }

    setFile(selectedFile);
    setExtractError("");
    setExtracting(true);

    try {
      const text = await extractPdfText(selectedFile);
      if (text.length < 50) {
        setExtractError(
          "Could not extract enough text from this PDF. It may be a scanned image. Please try a text-based PDF."
        );
        setExtractedText("");
      } else {
        setExtractedText(text);
      }
    } catch (err) {
      console.error("PDF extraction error:", err);
      setExtractError(
        "Failed to extract text from PDF. Please try a different file."
      );
    } finally {
      setExtracting(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) handleFile(droppedFile);
    },
    [handleFile]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFile(selectedFile);
  };

  const handleSubmit = () => {
    if (!extractedText || !companyName.trim()) return;
    onGenerate(extractedText, companyName);
  };

  const clearFile = () => {
    setFile(null);
    setExtractedText("");
    setExtractError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section
      id="upload-section"
      className={`py-24 ${darkMode ? "bg-slate-950" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Get Started in{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              30 seconds
            </span>
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Upload your PDF and enter a company name to generate all your
            preparation material.
          </p>
        </div>

        <div className="space-y-6">
          {/* PDF Upload */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => !file && fileInputRef.current?.click()}
            id="pdf-drop-zone"
            className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
              file
                ? darkMode
                  ? "border-green-500/50 bg-green-900/10"
                  : "border-green-400 bg-green-50"
                : dragOver
                ? darkMode
                  ? "border-violet-400 bg-violet-900/20 scale-[1.01]"
                  : "border-violet-400 bg-violet-50 scale-[1.01]"
                : darkMode
                ? "border-slate-600 bg-slate-800/30 hover:border-violet-500 hover:bg-slate-800/50 cursor-pointer"
                : "border-slate-300 bg-slate-50 hover:border-violet-400 hover:bg-violet-50 cursor-pointer"
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileInput}
              className="hidden"
              id="pdf-file-input"
            />

            {file ? (
              <div className="flex flex-col items-center gap-3">
                {extracting ? (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                    <p
                      className={`font-semibold ${
                        darkMode ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Extracting text from PDF...
                    </p>
                  </>
                ) : extractedText ? (
                  <>
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                    <div>
                      <p
                        className={`font-semibold ${
                          darkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {file.name}
                      </p>
                      <p className="text-green-500 text-sm mt-1">
                        ✓ {extractedText.split(" ").length} words extracted
                        successfully
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-16 h-16 text-red-500" />
                    <p className="text-red-500 text-sm">{extractError}</p>
                  </>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearFile();
                  }}
                  className={`flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg transition-colors ${
                    darkMode
                      ? "text-slate-400 hover:text-red-400 hover:bg-red-900/20"
                      : "text-slate-500 hover:text-red-500 hover:bg-red-50"
                  }`}
                >
                  <X className="w-4 h-4" /> Remove file
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center ${
                    darkMode
                      ? "bg-slate-700 text-slate-400"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <Upload className="w-10 h-10" />
                </div>
                <div>
                  <p
                    className={`text-lg font-semibold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Drop your PDF here or click to browse
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Supports: Resume, Notes, Study Material, Job Description,
                    Research Paper • Max 10MB
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  {["Resume", "Notes", "Study Material", "JD"].map((type) => (
                    <span
                      key={type}
                      className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${
                        darkMode
                          ? "bg-slate-700 text-slate-300"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      <FileText className="w-3 h-3" />
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Error message */}
          {extractError && !file && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{extractError}</p>
            </div>
          )}

          {/* Company Input */}
          <div
            className={`rounded-2xl p-6 border ${
              darkMode
                ? "bg-slate-800/50 border-slate-700"
                : "bg-slate-50 border-slate-200"
            }`}
          >
            <label
              className={`flex items-center gap-2 text-sm font-semibold mb-3 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              <Building2 className="w-4 h-4 text-violet-500" />
              Target Company
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g., Google, Amazon, Microsoft, Adobe..."
              id="company-name-input"
              className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                darkMode
                  ? "bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
              }`}
            />

            {/* Popular companies */}
            <div className="flex flex-wrap gap-2 mt-3">
              {POPULAR_COMPANIES.map((company) => (
                <button
                  key={company}
                  onClick={() => setCompanyName(company)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all duration-200 hover:scale-105 ${
                    companyName === company
                      ? "bg-violet-600 text-white border-violet-600"
                      : darkMode
                      ? "bg-slate-700 text-slate-300 border-slate-600 hover:border-violet-500"
                      : "bg-white text-slate-600 border-slate-300 hover:border-violet-400"
                  }`}
                >
                  {company}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleSubmit}
            disabled={!extractedText || !companyName.trim() || isLoading}
            id="generate-btn"
            className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
              !extractedText || !companyName.trim() || isLoading
                ? darkMode
                  ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-[1.02] cursor-pointer"
            }`}
          >
            {isLoading ? (
              <>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Generating your prep material...
              </>
            ) : (
              <>
                <Zap className="w-6 h-6" />
                Generate Interview Prep Material
              </>
            )}
          </button>

          {/* Info */}
          {extractedText && companyName && !isLoading && (
            <p
              className={`text-center text-sm ${
                darkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              ⚡ Ready to generate prep material for{" "}
              <span className="font-semibold text-violet-500">{companyName}</span>{" "}
              based on your uploaded document.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
