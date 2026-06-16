# PrepWise AI 🚀

> AI-powered interview preparation platform that transforms resumes, notes, and PDFs into summaries, flashcards, company-specific interview questions, networking messages, and preparation roadmaps.

**Built by Ranveer Pensalwar** | [ranveerpensalwar@gmail.com](mailto:ranveerpensalwar@gmail.com)

[![Built for Digital Heroes](https://img.shields.io/badge/Built%20for-Digital%20Heroes-violet)](https://digitalheroesco.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)](https://tailwindcss.com)
[![Gemini AI](https://img.shields.io/badge/Google-Gemini-4285F4)](https://aistudio.google.com)

---

## 📋 Project Overview

PrepWise AI is an AI-powered interview preparation platform that helps students and professionals prepare for interviews at top companies like Google, Amazon, Microsoft, Adobe, and more. Upload any PDF document and get instant, AI-generated preparation material tailored to your target company.

### Portfolio Description

PrepWise AI is an AI-powered interview preparation platform that transforms resumes, notes, and PDFs into summaries, flashcards, company-specific interview questions, networking messages, and preparation roadmaps. Built using Next.js, TypeScript, Tailwind CSS, PDF.js, and Gemini AI.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📄 **PDF Upload** | Drag & drop or click to upload PDFs. Supports resume, notes, study material, JD, research papers |
| 🏢 **Company Input** | Enter any company name with quick-select buttons for popular companies |
| 🧠 **AI Summary** | Key concepts, important points, and interview-relevant topics |
| 🃏 **Flashcards** | 12+ interactive flip flashcards with card and grid view |
| ❓ **Interview Questions** | Technical, behavioral, HR, and company-specific questions with hints |
| 🎤 **Mock Interview** | 10 interview questions with practice mode and progress tracking |
| 🗺️ **Preparation Roadmap** | Week-by-week study plan with priority indicators |
| 📧 **Networking Assistant** | LinkedIn outreach, alumni messages, and recruiter emails |
| 🔍 **Alumni Search** | Google site: search links for finding alumni on LinkedIn |
| 💾 **Export** | Copy all content or download as TXT file |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **PDF Parsing**: pdfjs-dist (PDF.js)
- **AI**: Google Gemini 1.5 Flash API (Free tier)
- **Icons**: Lucide React
- **Deployment**: Vercel Free Hobby Plan
- **Cost**: $0 / ₹0 — completely free

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A free Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ranveer46/prepwise-ai.git
   cd prepwise-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your API key.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | ✅ Yes |

### Getting a Free Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key to your `.env.local` file

**The free tier includes:**
- 15 requests per minute
- 1 million tokens per day
- **$0 cost** on Gemini 1.5 Flash

---

## 📦 Deployment to Vercel

### Method 1: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Method 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your repository
4. Configure environment variables:
   - Add `GEMINI_API_KEY` in the **Environment Variables** section
5. Click **Deploy**

### Vercel Environment Variables Setup

In your Vercel project dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add: `GEMINI_API_KEY` = `your_gemini_api_key`
3. Set scope to: **Production**, **Preview**, **Development**
4. Click **Save** and redeploy

### Vercel Configuration

The project is pre-configured for Vercel:
- ✅ No additional `vercel.json` needed
- ✅ API routes work as Serverless Functions
- ✅ Static assets served via CDN
- ✅ Automatic HTTPS

---

## 📁 Folder Structure

```
prepwise-ai/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page (client component)
│   ├── globals.css         # Global styles + Tailwind
│   └── api/
│       └── generate/
│           └── route.ts    # Gemini API endpoint
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── HeroSection.tsx     # Hero with CTA buttons
│   ├── FeaturesSection.tsx # 8 feature cards
│   ├── UploadSection.tsx   # PDF upload + company input
│   ├── ResultsDashboard.tsx # Tabbed results
│   ├── SummaryCard.tsx     # AI summary output
│   ├── FlashcardsSection.tsx # Interactive flashcards
│   ├── InterviewQuestionsSection.tsx
│   ├── MockInterviewSection.tsx
│   ├── RoadmapSection.tsx
│   ├── NetworkingSection.tsx
│   ├── AlumniSearchSection.tsx
│   ├── ExportSection.tsx   # Download/copy
│   ├── DarkModeToggle.tsx
│   └── Footer.tsx
├── lib/
│   ├── gemini.ts           # Gemini API client
│   └── prompts.ts          # AI prompts
├── types/
│   └── index.ts            # TypeScript interfaces
├── .env.local              # Environment variables (not committed)
├── .env.example            # Example env file
└── README.md
```

---

## 🧪 Testing Instructions

### Manual Testing Checklist

1. **PDF Upload**
   - [ ] Upload a PDF resume — text should be extracted
   - [ ] Try drag and drop
   - [ ] Verify word count shows after extraction

2. **Company Selection**
   - [ ] Type a company name manually
   - [ ] Click quick-select buttons (Google, Amazon, etc.)

3. **Generation**
   - [ ] Click "Generate Interview Prep Material"
   - [ ] Loading state should appear (15-30 seconds)
   - [ ] All 7 tabs should appear in Results Dashboard

4. **Feature Tabs**
   - [ ] Summary — AI overview, concepts, topics
   - [ ] Flashcards — flip animation works, grid view works
   - [ ] Questions — category filter works, hints expand
   - [ ] Mock Interview — practice mode, mark answered
   - [ ] Roadmap — timeline visualization
   - [ ] Networking — copy buttons work
   - [ ] Alumni Search — links open in new tab

5. **Export**
   - [ ] "Copy All" copies to clipboard
   - [ ] "Download TXT" downloads a file

6. **Dark Mode**
   - [ ] Toggle works, persists during session

---

## 🎨 UI/UX Design

- **Dark mode by default** with toggle
- **Glassmorphism** navigation bar
- **Gradient** accents throughout
- **Smooth animations** on hover and load
- **Responsive** — works on mobile, tablet, desktop
- **Accessible** — proper labels and IDs on all interactive elements

---

## 📊 Screenshots

> *(Add screenshots of the app here after deployment)*

---

## 🔗 Links

- **Live Demo**: [https://prepwise-ai.vercel.app](https://prepwise-ai.vercel.app)
- **GitHub**: [https://github.com/Ranveer46/prepwise-ai](https://github.com/Ranveer46/prepwise-ai)
- **Digital Heroes**: [https://digitalheroesco.com](https://digitalheroesco.com)
- **Built by**: Ranveer Pensalwar — [ranveerpensalwar@gmail.com](mailto:ranveerpensalwar@gmail.com)

---

## 📝 License

MIT License — Free to use and modify.

---

*Built with ❤️ by Ranveer Pensalwar for Digital Heroes*
