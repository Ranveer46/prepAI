import { GoogleGenerativeAI } from "@google/generative-ai";
import { GeneratedContent } from "@/types";
import { buildMasterPrompt, parseGeminiResponse } from "./prompts";

export async function generateInterviewPrep(
  pdfText: string,
  companyName: string
): Promise<GeneratedContent> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = buildMasterPrompt(pdfText, companyName);

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return parseGeminiResponse(text);
}
