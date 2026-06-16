export interface Flashcard {
  question: string;
  answer: string;
}

export interface InterviewQuestion {
  question: string;
  category: "technical" | "behavioral" | "hr" | "company-specific";
  hint?: string;
}

export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  duration: string;
  priority: "high" | "medium" | "low";
  topics: string[];
}

export interface NetworkingMessage {
  type: "linkedin" | "alumni" | "recruiter";
  subject: string;
  message: string;
}

export interface AlumniSearch {
  query: string;
  url: string;
  description: string;
}

export interface GeneratedContent {
  summary: {
    keyConcepts: string[];
    importantPoints: string[];
    interviewTopics: string[];
    overview: string;
  };
  flashcards: Flashcard[];
  interviewQuestions: InterviewQuestion[];
  mockInterview: {
    questions: string[];
    tips: string[];
  };
  roadmap: RoadmapItem[];
  networking: NetworkingMessage[];
  alumniSearch: AlumniSearch[];
}

export interface GenerateRequest {
  pdfText: string;
  companyName: string;
  documentType?: string;
}
