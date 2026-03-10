"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import {
  Search, ExternalLink, Bot, PenTool, Image, Video,
  Music, Code, Database, GitBranch, Zap, BarChart3,
  Globe, Shield, Workflow, BrainCircuit,
  MessageSquare, BookOpen, Sun, Moon, Box, LayoutGrid,
  Lightbulb, ArrowRight, Newspaper, Hexagon,
} from "lucide-react";

interface Tool {
  name: string;
  url: string;
  desc: string;
  tag?: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  tools: Tool[];
}

const CATEGORIES: Category[] = [
  {
    id: "chatbots",
    name: "AI Chatbots & Assistenten",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "#8B5CF6",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com", desc: "OpenAIs Konversations-KI", tag: "Popular" },
      { name: "Claude", url: "https://claude.ai", desc: "Anthropics KI-Assistent", tag: "Empfehlung" },
      { name: "Gemini", url: "https://gemini.google.com", desc: "Googles KI-Modell" },
      { name: "Perplexity", url: "https://perplexity.ai", desc: "KI-Suchmaschine mit Quellen", tag: "Popular" },
      { name: "Poe", url: "https://poe.com", desc: "Multi-Modell Chat-Plattform" },
      { name: "Pi", url: "https://pi.ai", desc: "Persönlicher KI-Assistent von Inflection" },
      { name: "Mistral Le Chat", url: "https://chat.mistral.ai", desc: "Mistrals Chat-Interface" },
      { name: "DeepSeek", url: "https://chat.deepseek.com", desc: "Open-Source KI-Chat aus China" },
      { name: "Grok", url: "https://grok.com", desc: "xAIs Textgenerator" },
      { name: "Qwen", url: "https://chat.qwenlm.ai/", desc: "Chat-System von Alibaba (kostenlos)" },
    ],
  },
  {
    id: "content",
    name: "Content Creation & Text",
    icon: <PenTool className="w-5 h-5" />,
    color: "#FB923C",
    tools: [
      { name: "Jasper", url: "https://jasper.ai", desc: "KI-Texterstellung für Marketing", tag: "Popular" },
      { name: "Copy.ai", url: "https://copy.ai", desc: "KI-Copywriting & Workflows" },
      { name: "Writesonic", url: "https://writesonic.com", desc: "Blog-Posts, Ads & SEO-Texte" },
      { name: "Rytr", url: "https://rytr.me", desc: "Bezahlbarer KI-Textgenerator" },
      { name: "Surfer SEO", url: "https://surferseo.com", desc: "SEO-optimierte Content-Erstellung" },
      { name: "Grammarly", url: "https://grammarly.com", desc: "KI-Schreibassistent & Korrektur" },
      { name: "Hemingway Editor", url: "https://hemingwayapp.com", desc: "Klarheit & Lesbarkeit verbessern" },
      { name: "Notion AI", url: "https://notion.so/product/ai", desc: "KI direkt in Notion Docs" },
      { name: "Wordtune", url: "https://wordtune.com", desc: "Sätze umformulieren & verbessern" },
      { name: "QuillBot", url: "https://quillbot.com", desc: "Paraphrasierung & Zusammenfassung" },
    ],
  },
  {
    id: "image",
    name: "Bildgenerierung & Design",
    icon: <Image className="w-5 h-5" />,
    color: "#FB7185",
    tools: [
      { name: "Midjourney", url: "https://midjourney.com", desc: "Hochwertige KI-Bilder via Discord", tag: "Popular" },
      { name: "DALL-E 3", url: "https://openai.com/dall-e-3", desc: "OpenAIs Bildgenerator" },
      { name: "Stable Diffusion", url: "https://stability.ai", desc: "Open-Source Bildgenerierung" },
      { name: "Leonardo.ai", url: "https://leonardo.ai", desc: "KI-Bilder für Games & Design" },
      { name: "Ideogram", url: "https://ideogram.ai", desc: "Text-in-Bild Spezialist" },
      { name: "Flux", url: "https://flux1.ai", desc: "Schnelle Open-Source Bildgenerierung" },
      { name: "Adobe Firefly", url: "https://firefly.adobe.com", desc: "KI-Bildgenerierung von Adobe" },
      { name: "Canva AI", url: "https://canva.com", desc: "Design-Plattform mit KI-Features", tag: "Popular" },
      { name: "Remove.bg", url: "https://remove.bg", desc: "Hintergrund automatisch entfernen" },
      { name: "Clipdrop", url: "https://clipdrop.co", desc: "KI-Bildbearbeitung von Stability AI" },
      { name: "Freepik Pikaso", url: "https://www.freepik.com/pikaso/", desc: "Image Generation, Reimage, Upscale" },
      { name: "Krea AI", url: "https://www.krea.ai/", desc: "KI-Bildgenerierung" },
      { name: "reve.art", url: "https://reve.art", desc: "Fotorealistische KI-Bilder", tag: "Empfehlung" },
      { name: "Napkin", url: "https://www.napkin.ai/", desc: "Text in visuelle Grafiken umwandeln" },
      { name: "Immersity", url: "https://app.immersity.ai/", desc: "Bewegtbilder & 3D-Effekte aus Fotos" },
      { name: "Enhancer", url: "https://app.enhancor.ai/editor", desc: "KI-Bilder natürlicher machen" },
      { name: "Pic Copilot", url: "https://www.picccopilot.com/", desc: "E-Commerce Produktbilder mit KI-Models" },
    ],
  },
  {
    id: "video",
    name: "Video & Animation",
    icon: <Video className="w-5 h-5" />,
    color: "#EF4444",
    tools: [
      { name: "Runway", url: "https://runwayml.com", desc: "KI-Videogenerierung & -bearbeitung", tag: "Popular" },
      { name: "Sora", url: "https://openai.com/sora", desc: "OpenAIs Text-zu-Video Modell" },
      { name: "Pika", url: "https://pika.art", desc: "Text & Bild zu Video" },
      { name: "Kling AI", url: "https://klingai.com", desc: "Realistische KI-Videos" },
      { name: "HeyGen", url: "https://heygen.com", desc: "KI-Avatare & Video-Personalisierung" },
      { name: "Synthesia", url: "https://synthesia.io", desc: "KI-Avatar-Videos für Business" },
      { name: "D-ID", url: "https://d-id.com", desc: "Sprechende KI-Avatare" },
      { name: "Luma Dream Machine", url: "https://lumalabs.ai", desc: "3D & Video-Generierung" },
      { name: "Descript", url: "https://descript.com", desc: "Video- & Podcast-Editing mit KI" },
      { name: "OpusClip", url: "https://opus.pro", desc: "Lange Videos in Clips umwandeln" },
      { name: "Pixverse", url: "https://app.pixverse.ai/", desc: "Stabile Videos aus Bildern generieren", tag: "Empfehlung" },
      { name: "Viggle", url: "https://viggle.ai/", desc: "Lipsync und Trend-Videogenerator" },
      { name: "InVideo", url: "https://ai.invideo.io/", desc: "KI-Videos & Präsentationen erstellen" },
      { name: "Wan Video", url: "https://create.wan.video/", desc: "Kostenlose Video-Generierung" },
      { name: "Dreamina", url: "https://dreamina.capcut.com/", desc: "KI-Bilder & Videos von CapCut" },
      { name: "Captions AI", url: "https://www.captions.ai/", desc: "UGC Content & Produktvideos" },
      { name: "Rendernet AI", url: "https://rendernet.ai/", desc: "E-Commerce Produktbild-Swap" },
    ],
  },
  {
    id: "audio",
    name: "Audio & Musik",
    icon: <Music className="w-5 h-5" />,
    color: "#14B8A6",
    tools: [
      { name: "ElevenLabs", url: "https://elevenlabs.io", desc: "Realistische KI-Stimmen & TTS", tag: "Popular" },
      { name: "Suno", url: "https://suno.com", desc: "KI-Musikgenerierung aus Text", tag: "Popular" },
      { name: "Udio", url: "https://udio.com", desc: "KI-Songs in jeder Stilrichtung" },
      { name: "Murf AI", url: "https://murf.ai", desc: "Professionelle KI-Voiceovers" },
      { name: "Play.ht", url: "https://play.ht", desc: "Text-to-Speech API & Studio" },
      { name: "AIVA", url: "https://aiva.ai", desc: "KI-Filmmusik & Soundtracks" },
      { name: "Whisper", url: "https://openai.com/research/whisper", desc: "OpenAIs Sprach-zu-Text (Open Source)" },
      { name: "Resemble AI", url: "https://resemble.ai", desc: "Voice Cloning & generative Stimmen" },
      { name: "Fish Audio", url: "https://fish.audio/de/", desc: "AI Voice Clone (Beta)" },
      { name: "Riffusion", url: "https://www.riffusion.com/", desc: "KI-Musikgenerierung" },
      { name: "VAPI AI", url: "https://vapi.ai", desc: "Voice Call-Center AI" },
      { name: "NotebookLM", url: "https://notebooklm.google/", desc: "Podcast-Konversation aus Dokumenten" },
    ],
  },
  {
    id: "vibecoding",
    name: "Vibecoding & AI IDEs",
    icon: <Code className="w-5 h-5" />,
    color: "#06B6D4",
    tools: [
      { name: "Cursor", url: "https://cursor.com", desc: "KI-first Code-Editor (VS Code Fork)", tag: "Popular" },
      { name: "Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code", desc: "Anthropics CLI Coding Agent", tag: "Empfehlung" },
      { name: "GitHub Copilot", url: "https://github.com/features/copilot", desc: "KI-Pair-Programmer in VS Code", tag: "Popular" },
      { name: "Windsurf", url: "https://codeium.com/windsurf", desc: "KI-IDE von Codeium" },
      { name: "Replit", url: "https://replit.com", desc: "Browser-IDE mit KI-Agent" },
      { name: "v0", url: "https://v0.dev", desc: "Vercels KI-UI-Generator", tag: "Popular" },
      { name: "bolt.new", url: "https://bolt.new", desc: "Full-Stack Apps im Browser bauen" },
      { name: "Lovable", url: "https://lovable.dev", desc: "KI-App-Builder (ehem. GPT Engineer)" },
      { name: "Tabnine", url: "https://tabnine.com", desc: "KI-Code-Completion (privat & sicher)" },
      { name: "Aider", url: "https://aider.chat", desc: "Open-Source KI Pair-Programming im Terminal" },
      { name: "Continue", url: "https://continue.dev", desc: "Open-Source KI-Erweiterung für IDEs" },
      { name: "Devin", url: "https://devin.ai", desc: "Autonomer KI-Software-Entwickler" },
      { name: "Relume", url: "https://www.relume.io/", desc: "AI Websitebuilder mit UX/UI Frameworks" },
      { name: "UXPilot", url: "https://uxpilot.ai/", desc: "UI/UX Design mit KI" },
      { name: "Aura Build", url: "https://www.aura.build/", desc: "Web & Mobile Designs mit KI" },
      { name: "MGX DEV", url: "https://mgx.dev/", desc: "AI Agent Dev Team" },
      { name: "Rocket.new", url: "https://www.rocket.new/", desc: "Vibecoding wie Lovable und Bolt" },
      { name: "Abacus.ai", url: "https://apps.abacus.ai", desc: "App Builder mit KI" },
      { name: "Firebase Studio", url: "https://studio.firebase.google.com", desc: "Google App-Entwicklung" },
      { name: "21st.dev", url: "https://21st.dev", desc: "UI Components Library" },
    ],
  },
  {
    id: "automation",
    name: "Automatisierung & Workflows",
    icon: <Workflow className="w-5 h-5" />,
    color: "#F97316",
    tools: [
      { name: "Zapier", url: "https://zapier.com", desc: "No-Code Automatisierung (7.000+ Apps)", tag: "Popular" },
      { name: "Make", url: "https://make.com", desc: "Visuelle Workflow-Automatisierung" },
      { name: "n8n", url: "https://n8n.io", desc: "Open-Source Workflow Automation", tag: "Empfehlung" },
      { name: "Bardeen", url: "https://bardeen.ai", desc: "Browser-Automatisierung mit KI" },
      { name: "Activepieces", url: "https://activepieces.com", desc: "Open-Source Zapier-Alternative" },
      { name: "Relevance AI", url: "https://relevanceai.com", desc: "KI-Agent Workforce Builder" },
      { name: "Lindy.ai", url: "https://lindy.ai", desc: "KI-Assistenten für Workflows" },
      { name: "Respell", url: "https://respell.ai", desc: "KI-Workflows ohne Code" },
      { name: "Pabbly", url: "https://pabbly.com", desc: "Automatisierung (günstiger als Make/Zapier)" },
      { name: "IFTTT", url: "https://ifttt.com", desc: "Einfache Automatisierung" },
    ],
  },
  {
    id: "agents",
    name: "AI Agents & Frameworks",
    icon: <Bot className="w-5 h-5" />,
    color: "#A78BFA",
    tools: [
      { name: "LangChain", url: "https://langchain.com", desc: "Framework für LLM-Anwendungen", tag: "Popular" },
      { name: "LlamaIndex", url: "https://llamaindex.ai", desc: "Daten-Framework für LLM-Apps" },
      { name: "CrewAI", url: "https://crewai.com", desc: "Multi-Agent Orchestrierung" },
      { name: "AutoGen", url: "https://microsoft.github.io/autogen", desc: "Microsofts Multi-Agent Framework" },
      { name: "Semantic Kernel", url: "https://learn.microsoft.com/semantic-kernel", desc: "Microsofts KI-Orchestration SDK" },
      { name: "Haystack", url: "https://haystack.deepset.ai", desc: "NLP-Framework für Pipelines" },
      { name: "Vercel AI SDK", url: "https://sdk.vercel.ai", desc: "TypeScript SDK für KI-Apps" },
      { name: "Anthropic SDK", url: "https://docs.anthropic.com", desc: "Claude API & Agent SDK" },
      { name: "Dify", url: "https://dify.ai", desc: "Open-Source LLM App Platform" },
      { name: "FlowiseAI", url: "https://flowiseai.com", desc: "Drag & Drop LLM Flows" },
      { name: "OpenRouter", url: "https://openrouter.ai/", desc: "API-Schnittstelle für alle LLMs" },
      { name: "GoToHuman", url: "https://gotohuman.com", desc: "AI Agent mit Human Oversight" },
      { name: "Bytez", url: "https://bytez.com/agent", desc: "One API für alle KI-Modelle" },
    ],
  },
  {
    id: "database",
    name: "Datenbanken & Backend",
    icon: <Database className="w-5 h-5" />,
    color: "#60A5FA",
    tools: [
      { name: "Supabase", url: "https://supabase.com", desc: "Open-Source Firebase-Alternative", tag: "Empfehlung" },
      { name: "Neon", url: "https://neon.tech", desc: "Serverless Postgres" },
      { name: "PlanetScale", url: "https://planetscale.com", desc: "Serverless MySQL" },
      { name: "Turso", url: "https://turso.tech", desc: "Edge SQLite (libSQL)" },
      { name: "Upstash", url: "https://upstash.com", desc: "Serverless Redis & Kafka" },
      { name: "Pinecone", url: "https://pinecone.io", desc: "Vektor-Datenbank für KI", tag: "Popular" },
      { name: "Weaviate", url: "https://weaviate.io", desc: "Open-Source Vektor-DB" },
      { name: "Qdrant", url: "https://qdrant.tech", desc: "Vektor-Suche (Rust-basiert)" },
      { name: "ChromaDB", url: "https://trychroma.com", desc: "Einfache Vektor-DB für KI-Apps" },
      { name: "Convex", url: "https://convex.dev", desc: "Reaktive Backend-Plattform" },
      { name: "Airtable", url: "https://airtable.com/", desc: "Database mit Automatisierungen" },
      { name: "Google Looker Studio", url: "https://lookerstudio.google.com/", desc: "Datenanalyse und Visualisierung" },
    ],
  },
  {
    id: "github",
    name: "GitHub & DevTools",
    icon: <GitBranch className="w-5 h-5" />,
    color: "#71717A",
    tools: [
      { name: "GitHub Copilot", url: "https://github.com/features/copilot", desc: "KI-Code-Suggestions in GitHub" },
      { name: "GitHub Actions", url: "https://github.com/features/actions", desc: "CI/CD Automatisierung" },
      { name: "Vercel", url: "https://vercel.com", desc: "Frontend-Deployment Plattform", tag: "Popular" },
      { name: "Netlify", url: "https://netlify.com", desc: "Jamstack Hosting & Functions" },
      { name: "Railway", url: "https://railway.app", desc: "Einfaches Backend-Deployment" },
      { name: "Render", url: "https://render.com", desc: "Cloud-Hosting für alles" },
      { name: "Sentry", url: "https://sentry.io", desc: "Error Tracking & Monitoring" },
      { name: "Linear", url: "https://linear.app", desc: "Modernes Issue Tracking" },
      { name: "Turborepo", url: "https://turbo.build", desc: "Monorepo Build-System" },
    ],
  },
  {
    id: "skills",
    name: "AI Skills & Lernen",
    icon: <BookOpen className="w-5 h-5" />,
    color: "#4ADE80",
    tools: [
      { name: "Prompt Engineering Guide", url: "https://promptingguide.ai", desc: "Umfassender Prompting-Guide" },
      { name: "DeepLearning.AI", url: "https://deeplearning.ai", desc: "KI-Kurse von Andrew Ng" },
      { name: "fast.ai", url: "https://fast.ai", desc: "Praktische Deep-Learning-Kurse" },
      { name: "Hugging Face", url: "https://huggingface.co", desc: "ML-Modelle, Datasets & Spaces", tag: "Popular" },
      { name: "Papers with Code", url: "https://paperswithcode.com", desc: "ML-Papers mit Implementierungen" },
      { name: "Kaggle", url: "https://kaggle.com", desc: "ML-Wettbewerbe & Datasets" },
      { name: "LangSmith", url: "https://smith.langchain.com", desc: "LLM-Observability & Testing" },
      { name: "Weights & Biases", url: "https://wandb.ai", desc: "ML-Experiment Tracking" },
      { name: "Replicate", url: "https://replicate.com", desc: "ML-Modelle per API ausführen" },
      { name: "LLM Arena", url: "https://lmarena.ai/", desc: "Alle LLMs kostenlos vergleichen" },
      { name: "Dende", url: "https://app.dende.ai", desc: "Quiz & Education Content erstellen" },
      { name: "Google AI Studio", url: "https://aistudio.google.com/", desc: "Googles AI Prompt Playground" },
    ],
  },
  {
    id: "productivity",
    name: "Produktivität & Business",
    icon: <Zap className="w-5 h-5" />,
    color: "#FACC15",
    tools: [
      { name: "Notion AI", url: "https://notion.so/product/ai", desc: "KI in Docs, Wikis & Projekten", tag: "Popular" },
      { name: "Gamma", url: "https://gamma.app", desc: "KI-Präsentationen & Dokumente", tag: "Popular" },
      { name: "Otter.ai", url: "https://otter.ai", desc: "Meeting-Transkription & Notes" },
      { name: "Fireflies.ai", url: "https://fireflies.ai", desc: "KI-Meeting-Assistent" },
      { name: "tl;dv", url: "https://tldv.io", desc: "Meeting-Aufnahmen mit KI-Summary" },
      { name: "Tome", url: "https://tome.app", desc: "KI-Storytelling & Präsentationen" },
      { name: "Beautiful.ai", url: "https://beautiful.ai", desc: "KI-gestützte Folien-Erstellung" },
      { name: "Mem", url: "https://mem.ai", desc: "KI-Notizbuch mit Auto-Organisation" },
      { name: "Taskade", url: "https://taskade.com", desc: "KI-Produktivität & Projektmanagement" },
      { name: "Tally", url: "https://tally.so/", desc: "Umfragen mit n8n-Integration" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & SEO",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "#EC4899",
    tools: [
      { name: "SEMrush", url: "https://semrush.com", desc: "All-in-One SEO & Marketing Suite", tag: "Popular" },
      { name: "Ahrefs", url: "https://ahrefs.com", desc: "SEO-Tools & Backlink-Analyse" },
      { name: "Surfer SEO", url: "https://surferseo.com", desc: "On-Page SEO Optimierung" },
      { name: "Clearscope", url: "https://clearscope.io", desc: "Content-Optimierung für SEO" },
      { name: "Frase", url: "https://frase.io", desc: "SEO-Content Research & Writing" },
      { name: "Instantly", url: "https://instantly.ai", desc: "KI-E-Mail-Outreach Plattform" },
      { name: "Smartly.io", url: "https://smartly.io", desc: "KI-gesteuerte Social Ads" },
      { name: "AdCreative.ai", url: "https://adcreative.ai", desc: "KI-generierte Werbeanzeigen" },
      { name: "Brandwatch", url: "https://brandwatch.com", desc: "Social Listening & Analytics" },
      { name: "Mailchimp", url: "https://mailchimp.com", desc: "E-Mail Marketing & Automatisierung" },
      { name: "Brevo", url: "https://www.brevo.com/", desc: "E-Mail Marketing & Automatisierung" },
    ],
  },
  {
    id: "data",
    name: "Daten & Research",
    icon: <BrainCircuit className="w-5 h-5" />,
    color: "#14B8A6",
    tools: [
      { name: "Perplexity", url: "https://perplexity.ai", desc: "KI-Research mit Quellenangaben" },
      { name: "Elicit", url: "https://elicit.com", desc: "KI-Forschungsassistent" },
      { name: "Consensus", url: "https://consensus.app", desc: "Wissenschaftliche Papers durchsuchen" },
      { name: "Scite.ai", url: "https://scite.ai", desc: "Smart Citations für Forschung" },
      { name: "Connected Papers", url: "https://connectedpapers.com", desc: "Visuelle Paper-Exploration" },
      { name: "Julius AI", url: "https://julius.ai", desc: "KI-Datenanalyse & Visualisierung" },
      { name: "Rows", url: "https://rows.com", desc: "Spreadsheets mit KI-Integration" },
      { name: "Apify", url: "https://apify.com/", desc: "Web Scraping Plattform" },
    ],
  },
  {
    id: "security",
    name: "Sicherheit & Compliance",
    icon: <Shield className="w-5 h-5" />,
    color: "#F43F5E",
    tools: [
      { name: "Snyk", url: "https://snyk.io", desc: "Code & Dependency Security" },
      { name: "Socket", url: "https://socket.dev", desc: "Supply Chain Security" },
      { name: "GitGuardian", url: "https://gitguardian.com", desc: "Secrets Detection in Code" },
      { name: "Lakera Guard", url: "https://lakera.ai", desc: "LLM Security & Prompt Protection" },
      { name: "Nightfall AI", url: "https://nightfall.ai", desc: "Data Loss Prevention mit KI" },
      { name: "Pangea", url: "https://pangea.cloud", desc: "Security APIs für KI-Apps" },
    ],
  },
];

export default function ToolboxPage() {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = CATEGORIES.map((cat) => ({
    ...cat,
    tools: cat.tools.filter(
      (t) =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.desc.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(
    (cat) =>
      cat.tools.length > 0 &&
      (!activeCategory || cat.id === activeCategory)
  );

  const totalTools = CATEGORIES.reduce((sum, c) => sum + c.tools.length, 0);

  return (
    <div className="min-h-screen">
      {/* Header — AI Pulse style */}
      <header className="sticky top-0 z-50 bg-bg/90 dark:bg-zinc-950/90 glass-nav border-b border-border dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center">
              <Box className="w-5 h-5 text-white dark:text-zinc-900" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">
                AI <span className="font-black">Toolbox</span>
              </h1>
              <p className="text-[10px] text-text-muted font-medium hidden sm:block">
                by SixSides-ai.org
              </p>
            </div>
          </div>

          {/* Search — desktop */}
          <div className="hidden md:block relative flex-1 max-w-sm mx-8">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Tool suchen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-surface dark:bg-zinc-800 border border-border dark:border-zinc-700 text-sm text-text-primary dark:text-zinc-100 placeholder-text-muted outline-none focus:border-border-strong dark:focus:border-blue-500 focus:bg-bg dark:focus:bg-zinc-900 transition-colors"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href="https://pulse.sixsides-ai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium px-3 py-1.5 rounded-full text-text-secondary dark:text-zinc-400 hover:bg-surface dark:hover:bg-zinc-800 transition-colors hidden sm:flex items-center gap-1.5"
            >
              <Newspaper className="w-3.5 h-3.5" />
              AI Pulse
            </a>
            <a
              href="https://sixsides-ai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium px-3 py-1.5 rounded-full text-text-secondary dark:text-zinc-400 hover:bg-surface dark:hover:bg-zinc-800 transition-colors hidden sm:flex items-center gap-1.5"
            >
              <Hexagon className="w-3.5 h-3.5" />
              SixSides
            </a>
            <span className="text-xs text-text-muted hidden lg:block">
              {totalTools} Tools
            </span>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-surface dark:hover:bg-zinc-800 text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pt-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Tool suchen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface dark:bg-zinc-800 border border-border dark:border-zinc-700 text-sm text-text-primary dark:text-zinc-100 placeholder-text-muted outline-none focus:border-border-strong dark:focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border dark:border-zinc-800 bg-bg-alt/50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 animate-fade-up">
            Die besten AI-Tools auf einen Blick
          </h2>
          <p className="text-text-secondary dark:text-zinc-400 text-sm max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {totalTools}+ kuratierte KI-Tools in {CATEGORIES.length} Kategorien — von Content Creation bis Vibecoding.
          </p>
        </div>
      </section>

      {/* Main Layout: Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar — AI Pulse style */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-5">
            {/* Stats */}
            <div className="bg-bg-alt dark:bg-zinc-900 rounded-2xl border border-border dark:border-zinc-800 p-5 shadow-sm">
              <h3 className="text-[11px] font-semibold text-text-muted uppercase tracking-widest mb-4">Übersicht</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary dark:text-white">{totalTools}</div>
                  <div className="text-[11px] text-text-muted font-medium">Tools</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary dark:text-white">{CATEGORIES.length}</div>
                  <div className="text-[11px] text-text-muted font-medium">Kategorien</div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-bg-alt dark:bg-zinc-900 rounded-2xl border border-border dark:border-zinc-800 p-5 shadow-sm">
              <h3 className="text-[11px] font-semibold text-text-muted uppercase tracking-widest mb-4">Kategorien</h3>
              <nav className="space-y-0.5">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    !activeCategory
                      ? "bg-surface dark:bg-zinc-800 text-text-primary dark:text-zinc-200"
                      : "text-text-secondary dark:text-zinc-400 hover:bg-surface/50 dark:hover:bg-zinc-800 hover:text-text-primary"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  Alle Tools
                  <span className="ml-auto text-xs text-text-muted tabular-nums">{totalTools}</span>
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-surface dark:bg-zinc-800 text-text-primary dark:text-zinc-200"
                        : "text-text-secondary dark:text-zinc-400 hover:bg-surface/50 dark:hover:bg-zinc-800 hover:text-text-primary"
                    }`}
                  >
                    <span style={{ color: cat.color }}>{cat.icon}</span>
                    <span className="truncate">{cat.name}</span>
                    <span className="ml-auto text-xs text-text-muted tabular-nums">{cat.tools.length}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Business Ideas Promo */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl border border-zinc-700 p-6 shadow-sm text-white">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest">Premium</span>
              </div>
              <h3 className="font-bold text-[15px] mb-2 leading-snug">
                Business-Ideas Around the Globe
              </h3>
              <div className="bg-zinc-800/60 rounded-lg p-3 mb-3 border border-zinc-700/50">
                <p className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider mb-1">Beispiel aus KW 10</p>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  <span className="text-red-400">Pain:</span> GPU-Kosten explodieren<br />
                  <span className="text-emerald-400">Case:</span> Serverless-Inference-Broker
                </p>
              </div>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Jede Woche 6–10 Pain Points + konkrete Business Cases aus 2.500+ Artikeln in 11 Sprachen.
              </p>
              <a
                href="https://pulse.sixsides-ai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* AI Pulse Link */}
            <div className="bg-bg-alt dark:bg-zinc-900 rounded-2xl border border-border dark:border-zinc-800 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
                  <Newspaper className="w-4 h-4 text-white dark:text-zinc-900" />
                </div>
                <span className="text-[11px] font-semibold text-text-muted uppercase tracking-widest">News</span>
              </div>
              <h3 className="font-bold text-[15px] text-text-primary dark:text-white mb-2 leading-snug">
                AI Pulse — KI-News
              </h3>
              <p className="text-xs text-text-secondary dark:text-zinc-400 mb-4 leading-relaxed">
                2.500+ KI-Artikel pro Woche aus 11+ Sprachen. Der Newsfeed der Branche.
              </p>
              <a
                href="https://pulse.sixsides-ai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-outline inline-flex items-center gap-2 text-sm"
              >
                Zum Newsfeed
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* SixSides CTA */}
            <div className="bg-bg-alt dark:bg-zinc-900 rounded-2xl border border-border dark:border-zinc-800 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-text-primary dark:text-white" />
                <span className="text-[11px] font-semibold text-text-muted uppercase tracking-widest">SixSides-ai.org</span>
              </div>
              <h3 className="font-bold text-text-primary dark:text-white text-[15px] mb-2 leading-snug">
                Du brauchst mehr als nur Tools?
              </h3>
              <p className="text-sm text-text-secondary dark:text-zinc-400 mb-4 leading-relaxed">
                Persönliche Beratung zu KI & Automation für dein Business.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {["Prototyping", "Marketing", "Micro-SaaS", "Automation", "Enablement"].map((side) => (
                  <span key={side} className="text-[10px] font-medium px-2 py-1 rounded-lg bg-surface dark:bg-zinc-800 text-text-muted">{side}</span>
                ))}
              </div>
              <a
                href="https://sixsides-ai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-dark inline-flex items-center gap-2 text-sm"
              >
                Termin buchen
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </aside>

          {/* Mobile Category Filter (horizontal) */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-bg/95 dark:bg-zinc-950/95 glass-nav border-t border-border dark:border-zinc-800 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 px-4 whitespace-nowrap">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-3 text-xs font-medium border-t-2 transition-colors shrink-0 ${
                  !activeCategory
                    ? "border-text-primary dark:border-white text-text-primary dark:text-white"
                    : "border-transparent text-text-muted"
                }`}
              >
                Alle
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                  className={`px-2.5 py-3 text-xs font-medium border-t-2 transition-colors shrink-0 flex items-center gap-1 ${
                    activeCategory === cat.id
                      ? "border-text-primary dark:border-white text-text-primary dark:text-white"
                      : "border-transparent text-text-muted"
                  }`}
                >
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <main className="flex-1 min-w-0 pb-16 lg:pb-0">
            <div className="space-y-10">
              {filtered.map((cat) => (
                <section key={cat.id} id={cat.id} className="animate-fade-up">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                      style={{ background: cat.color }}
                    >
                      {cat.icon}
                    </div>
                    <h3 className="text-lg font-bold">{cat.name}</h3>
                    <span className="text-xs text-text-muted bg-surface dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                      {cat.tools.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {cat.tools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-bg dark:bg-zinc-900 border border-border dark:border-zinc-800 rounded-xl p-4 hover:border-border-strong dark:hover:border-zinc-600 hover:bg-surface/50 dark:hover:bg-zinc-800/50 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-sm text-text-primary dark:text-zinc-100 group-hover:text-accent dark:group-hover:text-white transition-colors">
                            {tool.name}
                          </h4>
                          <ExternalLink className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 shrink-0 mt-0.5 transition-opacity" />
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed">{tool.desc}</p>
                        {tool.tag && (
                          <span
                            className={`absolute top-3 right-3 text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                              tool.tag === "Empfehlung"
                                ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
                                : "bg-surface dark:bg-zinc-800 text-text-muted"
                            }`}
                          >
                            {tool.tag}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-surface dark:bg-zinc-800 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-7 h-7 text-text-muted" />
                </div>
                <p className="text-text-secondary dark:text-zinc-400">
                  Keine Tools gefunden. Versuche einen anderen Suchbegriff.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-8">
        <div className="bg-bg-alt dark:bg-zinc-900 rounded-2xl border border-border dark:border-zinc-800 p-8 text-center">
          <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
            Sechs Seiten. Eine Vision. Dein Wachstum.
          </h3>
          <p className="text-text-secondary dark:text-zinc-400 mb-6 max-w-lg mx-auto">
            Von Prototyping über Marketing bis Automation — SixSides-ai.org ist dein Partner für KI-getriebenes Wachstum.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["Prototyping", "Marketing", "Micro-SaaS", "Daten & CI", "Automation", "Enablement"].map((side) => (
              <span key={side} className="pill-btn pill-btn-outline text-xs">{side}</span>
            ))}
          </div>
          <a
            href="https://sixsides-ai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn-dark inline-flex items-center gap-2"
          >
            Jetzt Termin buchen
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border dark:border-zinc-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-text-muted">
            {new Date().getFullYear()} SixSides-ai.org
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://pulse.sixsides-ai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
            >
              AI Pulse
            </a>
            <a
              href="https://sixsides-ai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
            >
              SixSides-AI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
