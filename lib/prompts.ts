import {
  GeneratedContent,
  Flashcard,
  InterviewQuestion,
  RoadmapItem,
  NetworkingMessage,
  AlumniSearch,
} from "@/types";

export function buildMasterPrompt(
  pdfText: string,
  companyName: string
): string {
  const truncatedText =
    pdfText.length > 8000 ? pdfText.substring(0, 8000) + "..." : pdfText;

  return `You are an expert interview preparation coach and career advisor. Analyze the following document content and generate comprehensive interview preparation material for someone targeting ${companyName}.

DOCUMENT CONTENT:
${truncatedText}

TARGET COMPANY: ${companyName}

Generate a comprehensive JSON response with the following structure (respond with ONLY valid JSON, no markdown, no explanation):

{
  "summary": {
    "overview": "A 2-3 sentence overview of the document and its relevance to ${companyName}",
    "keyConcepts": ["concept1", "concept2", "concept3", "concept4", "concept5"],
    "importantPoints": ["point1", "point2", "point3", "point4", "point5"],
    "interviewTopics": ["topic1", "topic2", "topic3", "topic4", "topic5"]
  },
  "flashcards": [
    {"question": "Q1", "answer": "A1"},
    {"question": "Q2", "answer": "A2"},
    {"question": "Q3", "answer": "A3"},
    {"question": "Q4", "answer": "A4"},
    {"question": "Q5", "answer": "A5"},
    {"question": "Q6", "answer": "A6"},
    {"question": "Q7", "answer": "A7"},
    {"question": "Q8", "answer": "A8"},
    {"question": "Q9", "answer": "A9"},
    {"question": "Q10", "answer": "A10"},
    {"question": "Q11", "answer": "A11"},
    {"question": "Q12", "answer": "A12"}
  ],
  "interviewQuestions": [
    {"question": "Technical Q1", "category": "technical", "hint": "Focus on..."},
    {"question": "Technical Q2", "category": "technical", "hint": "Consider..."},
    {"question": "Technical Q3", "category": "technical", "hint": "Think about..."},
    {"question": "Technical Q4", "category": "technical"},
    {"question": "Technical Q5", "category": "technical"},
    {"question": "Behavioral Q1", "category": "behavioral", "hint": "Use STAR method"},
    {"question": "Behavioral Q2", "category": "behavioral"},
    {"question": "Behavioral Q3", "category": "behavioral"},
    {"question": "HR Q1", "category": "hr"},
    {"question": "HR Q2", "category": "hr"},
    {"question": "HR Q3", "category": "hr"},
    {"question": "${companyName}-specific Q1", "category": "company-specific"},
    {"question": "${companyName}-specific Q2", "category": "company-specific"},
    {"question": "${companyName}-specific Q3", "category": "company-specific"}
  ],
  "mockInterview": {
    "questions": [
      "Tell me about yourself and your experience with [skills from doc]",
      "Walk me through your most challenging project",
      "How do you approach problem-solving in [key area]?",
      "Describe a time when you had to learn something quickly",
      "What interests you specifically about ${companyName}?",
      "How do you handle disagreements with teammates?",
      "Where do you see yourself in 5 years?",
      "What is your greatest technical strength?",
      "Describe a time you failed and what you learned",
      "Do you have any questions for us?"
    ],
    "tips": [
      "Research ${companyName}'s recent news and products before the interview",
      "Prepare 3-5 STAR stories from your experience",
      "Practice coding problems on LeetCode focusing on arrays, trees, and graphs",
      "Know your resume thoroughly — every project and technology listed",
      "Prepare thoughtful questions for the interviewer"
    ]
  },
  "roadmap": [
    {
      "phase": "Week 1",
      "title": "Foundation & Assessment",
      "description": "Understand the role requirements and assess your current level",
      "duration": "1 week",
      "priority": "high",
      "topics": ["Review job description", "Self-assessment", "Study plan creation"]
    },
    {
      "phase": "Week 2-3",
      "title": "Core Technical Preparation",
      "description": "Strengthen technical fundamentals relevant to ${companyName}",
      "duration": "2 weeks",
      "priority": "high",
      "topics": ["Data Structures & Algorithms", "System Design basics", "Core technologies from resume"]
    },
    {
      "phase": "Week 4",
      "title": "Company-Specific Research",
      "description": "Deep dive into ${companyName}'s culture, products, and interview style",
      "duration": "1 week",
      "priority": "high",
      "topics": ["${companyName} interview patterns", "Company products/services", "Leadership principles"]
    },
    {
      "phase": "Week 5",
      "title": "Mock Interviews & Polish",
      "description": "Practice with mock interviews and refine your answers",
      "duration": "1 week",
      "priority": "medium",
      "topics": ["Mock technical interviews", "Behavioral question practice", "Communication refinement"]
    },
    {
      "phase": "Final Days",
      "title": "Review & Confidence Building",
      "description": "Light review, rest, and mental preparation",
      "duration": "2-3 days",
      "priority": "medium",
      "topics": ["Quick revision of key topics", "Rest and sleep well", "Prepare questions for interviewer"]
    }
  ],
  "networking": [
    {
      "type": "linkedin",
      "subject": "Seeking Guidance for ${companyName} Opportunity",
      "message": "Hi [Name],\\n\\nI came across your profile while preparing for opportunities at ${companyName}. Your journey from [their background] to [their current role] is truly inspiring.\\n\\nI am currently preparing for software engineering roles and have been working on [mention relevant skills from document]. I would be incredibly grateful if you could spare 15-20 minutes to share insights about your experience at ${companyName} and any advice you might have.\\n\\nThank you for your time.\\n\\nBest regards,\\nRanveer Pensalwar"
    },
    {
      "type": "alumni",
      "subject": "Fellow VIT Alumnus Seeking Mentorship for ${companyName}",
      "message": "Hi [Name],\\n\\nI hope this message finds you well! I am Ranveer, currently in my final year at VIT Pune. I came across your profile and noticed you are working at ${companyName} — congratulations on that achievement!\\n\\nI am actively preparing for software engineering roles at ${companyName} and have been building skills in [relevant technologies from document]. As a fellow VIT alumnus, I would greatly appreciate any guidance you could offer regarding the interview process and what ${companyName} looks for in candidates.\\n\\nWould you be open to a brief 15-minute call or a message exchange? Any advice would mean a lot.\\n\\nWarm regards,\\nRanveer Pensalwar\\nVIT Pune"
    },
    {
      "type": "recruiter",
      "subject": "Software Engineering Role at ${companyName} — Application by Ranveer Pensalwar",
      "message": "Hi [Recruiter Name],\\n\\nI am reaching out to express my strong interest in software engineering opportunities at ${companyName}. I am Ranveer Pensalwar, a final-year student at VIT Pune with expertise in [key skills from document].\\n\\nI have recently worked on projects involving [relevant technologies/domains from document] and I am particularly excited about ${companyName}'s work in [relevant domain]. My background aligns well with the technical requirements for your engineering teams.\\n\\nI have submitted my application and would love to discuss how I can contribute to ${companyName}'s mission. Please find my resume attached.\\n\\nThank you for your consideration.\\n\\nBest regards,\\nRanveer Pensalwar"
    }
  ],
  "alumniSearch": [
    {
      "query": "site:linkedin.com/in ${companyName} software engineer VIT Pune",
      "url": "https://www.google.com/search?q=site%3Alinkedin.com%2Fin+${encodeURIComponent(companyName)}+software+engineer+%22VIT+Pune%22",
      "description": "Find ${companyName} engineers from VIT Pune on LinkedIn"
    },
    {
      "query": "site:linkedin.com/in ${companyName} engineer India",
      "url": "https://www.google.com/search?q=site%3Alinkedin.com%2Fin+${encodeURIComponent(companyName)}+software+engineer+India",
      "description": "Find ${companyName} engineers in India on LinkedIn"
    },
    {
      "query": "site:linkedin.com/in ${companyName} intern India 2024",
      "url": "https://www.google.com/search?q=site%3Alinkedin.com%2Fin+${encodeURIComponent(companyName)}+intern+India+2024",
      "description": "Find recent ${companyName} interns from India"
    },
    {
      "query": "${companyName} interview experience GeeksforGeeks",
      "url": "https://www.google.com/search?q=${encodeURIComponent(companyName)}+interview+experience+GeeksforGeeks+2024",
      "description": "Read ${companyName} interview experiences on GFG"
    },
    {
      "query": "${companyName} interview Glassdoor reviews",
      "url": "https://www.glassdoor.com/Interview/${companyName.toLowerCase()}-interview-questions-SRCH_KE0,${companyName.length}.htm",
      "description": "Explore ${companyName} interview questions on Glassdoor"
    }
  ]
}

Make sure the flashcards, interview questions, and all content are highly specific and relevant to BOTH the document content AND ${companyName}. Generate exactly 12 flashcards and at least 14 interview questions. All content must be professional, insightful, and actionable.`;
}

export function parseGeminiResponse(responseText: string): GeneratedContent {
  // Clean up the response - remove markdown code blocks if present
  let cleanText = responseText.trim();
  if (cleanText.startsWith("```json")) {
    cleanText = cleanText.slice(7);
  }
  if (cleanText.startsWith("```")) {
    cleanText = cleanText.slice(3);
  }
  if (cleanText.endsWith("```")) {
    cleanText = cleanText.slice(0, -3);
  }
  cleanText = cleanText.trim();

  const parsed = JSON.parse(cleanText);
  return parsed as GeneratedContent;
}
