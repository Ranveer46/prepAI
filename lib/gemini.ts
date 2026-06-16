import Groq from "groq-sdk";
import { GeneratedContent } from "@/types";
import { buildMasterPrompt, parseGeminiResponse } from "./prompts";

export async function generateInterviewPrep(
  pdfText: string,
  companyName: string
): Promise<GeneratedContent> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY environment variable is not set");
  }

  const groq = new Groq({ apiKey });

  const prompt = buildMasterPrompt(pdfText, companyName);

  const chatCompletion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "You are an expert interview preparation coach. Always respond with valid JSON only — no markdown, no explanation, no code blocks. Just raw JSON.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 8192,
    response_format: { type: "json_object" },
  });

  const text = chatCompletion.choices[0]?.message?.content ?? "";

  if (!text) {
    throw new Error("No response received from Groq");
  }

  return parseGeminiResponse(text);
}
