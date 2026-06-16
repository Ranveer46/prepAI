import { NextRequest, NextResponse } from "next/server";
import { generateInterviewPrep } from "@/lib/gemini";
import { GenerateRequest } from "@/types";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();

    if (!body.pdfText || body.pdfText.trim().length === 0) {
      return NextResponse.json(
        { error: "PDF text is required" },
        { status: 400 }
      );
    }

    if (!body.companyName || body.companyName.trim().length === 0) {
      return NextResponse.json(
        { error: "Company name is required" },
        { status: 400 }
      );
    }

    const content = await generateInterviewPrep(
      body.pdfText,
      body.companyName.trim()
    );

    return NextResponse.json({ success: true, data: content });
  } catch (error) {
    console.error("Generation error:", error);

    if (error instanceof Error) {
      if (error.message.includes("GROQ_API_KEY")) {
        return NextResponse.json(
          {
            error:
              "API key not configured. Please add GROQ_API_KEY to environment variables.",
          },
          { status: 500 }
        );
      }
      if (error.message.includes("JSON")) {
        return NextResponse.json(
          {
            error:
              "Failed to parse AI response. Please try again.",
          },
          { status: 500 }
        );
      }
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
