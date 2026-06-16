<div align="center">

<h1>⚡ PrepWise AI</h1>

<p><strong>AI-powered interview preparation — from resume to offer letter.</strong></p>

<p>Upload any PDF. Pick a company. Get summaries, flashcards, interview questions, a mock interview, a roadmap, and networking messages — all in seconds.</p>

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-prepwise--ai.vercel.app-6366f1?style=for-the-badge&logoColor=white)](https://prepwise-ai.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Ranveer46-181717?style=for-the-badge&logo=github)](https://github.com/Ranveer46/prepwise-ai)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Gemini AI](https://img.shields.io/badge/Google%20Gemini-1.5%20Flash-4285F4?style=flat-square&logo=google&logoColor=white)](https://aistudio.google.com)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment-to-vercel)
- [Project Structure](#-project-structure)
- [UI/UX Design](#-uiux-highlights)
- [Testing Checklist](#-testing-checklist)
- [Links](#-links)

---

## 🎯 About

**PrepWise AI** helps students and job seekers prepare for interviews at top companies like Google, Amazon, Microsoft, Adobe, and more — with zero cost and zero fluff.

Simply **upload a PDF** (resume, notes, job description, or study material), enter a **target company**, and let Gemini AI generate everything you need:

- A clean, readable **summary**
- **Flashcards** you can actually flip and study
- Curated **interview questions** (technical, behavioral, HR)
- A simulated **mock interview** with progress tracking
- A **week-by-week roadmap** to land the job
- Ready-to-send **networking messages** for LinkedIn and email
- **Alumni search** links to find connections on LinkedIn

> Built as part of a hackathon project for [Digital Heroes](https://digitalheroesco.com).

---

## ✨ Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | 📄 **PDF Upload** | Drag & drop or click to upload. Supports resumes, notes, JDs, research papers |
| 2 | 🏢 **Company Targeting** | Type any company name or use quick-select buttons (Google, Amazon, Microsoft…) |
| 3 | 🧠 **AI Summary** | Extracts key concepts, important points, and interview-relevant topics |
| 4 | 🃏 **Flashcards** | 12+ interactive flip cards with card view and grid view modes |
| 5 | ❓ **Interview Questions** | Technical, behavioral, HR & company-specific Q&A with expandable hints |
| 6 | 🎤 **Mock Interview** | 10-question practice session with progress tracking and answer marking |
| 7 | 🗺️ **Prep Roadmap** | Week-by-week study plan with priority indicators and milestones |
| 8 | 📧 **Networking Assistant** | LinkedIn outreach templates, alumni messages, and recruiter cold emails |
| 9 | 🔍 **Alumni Search** | One-click Google `site:` search links to find alumni on LinkedIn |
| 10 | 💾 **Export** | Copy all content to clipboard or download as a `.txt` file |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Language** | [TypeScript 5](https://typescriptlang.org) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **PDF Parsing** | [pdfjs-dist (PDF.js)](https://mozilla.github.io/pdf.js/) |
| **AI Model** | [Google Gemini 1.5 Flash](https://aistudio.google.com) (Free API) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Deployment** | [Vercel](https://vercel.com) (Free Hobby Plan) |
| **Cost** | **$0 / ₹0** — completely free to run |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** / **yarn** / **pnpm**
- A free **Google Gemini API key** ([get one here](https://aistudio.google.com/app/apikey))

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ranveer46/prepwise-ai.git
cd prepwise-ai

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# → Open .env.local and paste your GEMINI_API_KEY

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. That's it!

---

## 🔑 Environment Variables

Create a `.env.local` file at the root of the project:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

| Variable | Description | Required |
|----------|-------------|:--------:|
| `GEMINI_API_KEY` | Google Gemini API key from AI Studio | ✅ |

### Getting a Free Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key into your `.env.local`

**Free tier limits:**
- 15 requests / minute
- 1,000,000 tokens / day
- **$0 cost** on Gemini 1.5 Flash

---

## 📦 Deployment to Vercel

### Option A — One-click via GitHub (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. Under **Environment Variables**, add:
   - `GEMINI_API_KEY` → `your_key_here`
4. Click **Deploy** 🚀

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

> When prompted, add your `GEMINI_API_KEY` as an environment variable.

### Why Vercel works out of the box

- ✅ No extra `vercel.json` config needed
- ✅ API routes auto-deploy as Serverless Functions
- ✅ Static assets served via global CDN
- ✅ Automatic HTTPS & instant rollbacks

---

## 📁 Project Structure

```
prepwise-ai/
├── app/
│   ├── layout.tsx                    # Root layout + SEO metadata
│   ├── page.tsx                      # Main page (client component)
│   ├── globals.css                   # Global styles + Tailwind
│   └── api/
│       └── generate/
│           └── route.ts              # Gemini API route handler
│
├── components/
│   ├── ui/                           # shadcn/ui primitives
│   ├── HeroSection.tsx               # Hero banner with CTA
│   ├── FeaturesSection.tsx           # 8 feature highlight cards
│   ├── UploadSection.tsx             # PDF upload + company input
│   ├── ResultsDashboard.tsx          # Tabbed results container
│   ├── SummaryCard.tsx               # AI summary output
│   ├── FlashcardsSection.tsx         # Interactive flip flashcards
│   ├── InterviewQuestionsSection.tsx # Categorized Q&A with hints
│   ├── MockInterviewSection.tsx      # Practice interview mode
│   ├── RoadmapSection.tsx            # Week-by-week timeline
│   ├── NetworkingSection.tsx         # Message templates
│   ├── AlumniSearchSection.tsx       # LinkedIn search links
│   ├── ExportSection.tsx             # Copy / download results
│   ├── DarkModeToggle.tsx            # Theme toggle
│   └── Footer.tsx
│
├── lib/
│   ├── gemini.ts                     # Gemini API client wrapper
│   └── prompts.ts                    # Structured AI prompt templates
│
├── types/
│   └── index.ts                      # Shared TypeScript interfaces
│
├── .env.example                      # Template for environment setup
├── .env.local                        # Your local secrets (git-ignored)
└── README.md
```

---

## 🎨 UI/UX Highlights

- 🌙 **Dark mode by default** — with a smooth light/dark toggle
- 🪟 **Glassmorphism** navbar and card styling
- 🌈 **Gradient** accents and animated backgrounds
- 🎞️ **Framer Motion** animations on load, hover, and tab transitions
- 📱 **Fully responsive** — mobile, tablet, and desktop ready
- ♿ **Accessible** — all interactive elements have proper labels and IDs

---

## 🧪 Testing Checklist

Use this checklist to verify everything works after deployment:

**PDF Upload**
- [ ] Upload a PDF resume → text is extracted and word count shown
- [ ] Try drag-and-drop upload
- [ ] Try a non-PDF file → should show an error

**Company Selection**
- [ ] Type a company name manually
- [ ] Use quick-select buttons (Google, Amazon, Microsoft, etc.)

**Generation**
- [ ] Click "Generate Interview Prep Material"
- [ ] Loading state appears (typically 15–30 seconds)
- [ ] All 7 result tabs appear after generation

**Result Tabs**
- [ ] **Summary** — key concepts and topics display correctly
- [ ] **Flashcards** — flip animation works; grid view toggles
- [ ] **Questions** — category filters work; hints expand on click
- [ ] **Mock Interview** — questions appear; "Mark as Answered" works
- [ ] **Roadmap** — weeks and priority indicators display
- [ ] **Networking** — copy buttons copy text to clipboard
- [ ] **Alumni Search** — links open LinkedIn search in a new tab

**Export**
- [ ] "Copy All" copies all content to clipboard
- [ ] "Download TXT" downloads a properly formatted `.txt` file

**Dark Mode**
- [ ] Toggle switches theme correctly and persists during session

---

## 🔗 Links

| | |
|---|---|
| 🌐 **Live Demo** | [prepwise-ai.vercel.app](https://prepwise-ai.vercel.app) |
| 💻 **GitHub** | [github.com/Ranveer46/prepwise-ai](https://github.com/Ranveer46/prepwise-ai) |
| 🏢 **Digital Heroes** | [digitalheroesco.com](https://digitalheroesco.com) |
| 📬 **Contact** | [pensalwarranveer1@gmail.com](mailto:pensalwarranveer1@gmail.com) |

---

## 📝 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

<div align="center">
  <p>Built with ❤️ by <strong>Ranveer Pensalwar</strong></p>
  <p><em>PrepWise AI — because great preparation beats luck, every time.</em></p>
</div>
