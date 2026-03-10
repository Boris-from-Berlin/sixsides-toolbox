"use client";

import { useState } from "react";
import {
  Search, ExternalLink, Sparkles, Bot, PenTool, Image, Video,
  Music, Code, Database, GitBranch, Zap, Mail, BarChart3,
  FileText, Globe, Shield, Mic, Layers, Workflow, BrainCircuit,
  Presentation, MessageSquare, Paintbrush, BookOpen,
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
    color: "from-violet-500 to-purple-600",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com", desc: "OpenAIs Konversations-KI", tag: "Popular" },
      { name: "Claude", url: "https://claude.ai", desc: "Anthropics KI-Assistent", tag: "Empfehlung" },
      { name: "Gemini", url: "https://gemini.google.com", desc: "Googles KI-Modell" },
      { name: "Perplexity", url: "https://perplexity.ai", desc: "KI-Suchmaschine mit Quellen", tag: "Popular" },
      { name: "Poe", url: "https://poe.com", desc: "Multi-Modell Chat-Plattform" },
      { name: "Pi", url: "https://pi.ai", desc: "Persönlicher KI-Assistent von Inflection" },
      { name: "Mistral Le Chat", url: "https://chat.mistral.ai", desc: "Mistrals Chat-Interface" },
      { name: "DeepSeek", url: "https://chat.deepseek.com", desc: "Open-Source KI-Chat aus China" },
    ],
  },
  {
    id: "content",
    name: "Content Creation & Text",
    icon: <PenTool className="w-5 h-5" />,
    color: "from-amber-500 to-orange-600",
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
    color: "from-pink-500 to-rose-600",
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
    ],
  },
  {
    id: "video",
    name: "Video & Animation",
    icon: <Video className="w-5 h-5" />,
    color: "from-red-500 to-rose-600",
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
    ],
  },
  {
    id: "audio",
    name: "Audio & Musik",
    icon: <Music className="w-5 h-5" />,
    color: "from-emerald-500 to-teal-600",
    tools: [
      { name: "ElevenLabs", url: "https://elevenlabs.io", desc: "Realistische KI-Stimmen & TTS", tag: "Popular" },
      { name: "Suno", url: "https://suno.com", desc: "KI-Musikgenerierung aus Text", tag: "Popular" },
      { name: "Udio", url: "https://udio.com", desc: "KI-Songs in jeder Stilrichtung" },
      { name: "Murf AI", url: "https://murf.ai", desc: "Professionelle KI-Voiceovers" },
      { name: "Play.ht", url: "https://play.ht", desc: "Text-to-Speech API & Studio" },
      { name: "AIVA", url: "https://aiva.ai", desc: "KI-Filmmusik & Soundtracks" },
      { name: "Whisper", url: "https://openai.com/research/whisper", desc: "OpenAIs Sprach-zu-Text (Open Source)" },
      { name: "Resemble AI", url: "https://resemble.ai", desc: "Voice Cloning & generative Stimmen" },
      { name: "Podcast.ai", url: "https://podcast.ai", desc: "KI-generierte Podcasts" },
    ],
  },
  {
    id: "vibecoding",
    name: "Vibecoding & AI IDEs",
    icon: <Code className="w-5 h-5" />,
    color: "from-cyan-500 to-blue-600",
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
    ],
  },
  {
    id: "automation",
    name: "Automatisierung & Workflows",
    icon: <Workflow className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    tools: [
      { name: "Zapier", url: "https://zapier.com", desc: "No-Code Automatisierung (7.000+ Apps)", tag: "Popular" },
      { name: "Make", url: "https://make.com", desc: "Visuelle Workflow-Automatisierung" },
      { name: "n8n", url: "https://n8n.io", desc: "Open-Source Workflow Automation", tag: "Empfehlung" },
      { name: "Bardeen", url: "https://bardeen.ai", desc: "Browser-Automatisierung mit KI" },
      { name: "Activepieces", url: "https://activepieces.com", desc: "Open-Source Zapier-Alternative" },
      { name: "Relevance AI", url: "https://relevanceai.com", desc: "KI-Agent Workforce Builder" },
      { name: "Lindy.ai", url: "https://lindy.ai", desc: "KI-Assistenten für Workflows" },
      { name: "Respell", url: "https://respell.ai", desc: "KI-Workflows ohne Code" },
    ],
  },
  {
    id: "agents",
    name: "AI Agents & Frameworks",
    icon: <Bot className="w-5 h-5" />,
    color: "from-indigo-500 to-violet-600",
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
    ],
  },
  {
    id: "database",
    name: "Datenbanken & Backend",
    icon: <Database className="w-5 h-5" />,
    color: "from-sky-500 to-cyan-600",
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
    ],
  },
  {
    id: "github",
    name: "GitHub & DevTools",
    icon: <GitBranch className="w-5 h-5" />,
    color: "from-zinc-400 to-zinc-600",
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
    color: "from-lime-500 to-green-600",
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
    ],
  },
  {
    id: "productivity",
    name: "Produktivität & Business",
    icon: <Zap className="w-5 h-5" />,
    color: "from-yellow-500 to-amber-600",
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
    ],
  },
  {
    id: "marketing",
    name: "Marketing & SEO",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "from-fuchsia-500 to-pink-600",
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
    ],
  },
  {
    id: "data",
    name: "Daten & Research",
    icon: <BrainCircuit className="w-5 h-5" />,
    color: "from-teal-500 to-emerald-600",
    tools: [
      { name: "Perplexity", url: "https://perplexity.ai", desc: "KI-Research mit Quellenangaben" },
      { name: "Elicit", url: "https://elicit.com", desc: "KI-Forschungsassistent" },
      { name: "Consensus", url: "https://consensus.app", desc: "Wissenschaftliche Papers durchsuchen" },
      { name: "Scite.ai", url: "https://scite.ai", desc: "Smart Citations für Forschung" },
      { name: "Connected Papers", url: "https://connectedpapers.com", desc: "Visuelle Paper-Exploration" },
      { name: "Julius AI", url: "https://julius.ai", desc: "KI-Datenanalyse & Visualisierung" },
      { name: "Rows", url: "https://rows.com", desc: "Spreadsheets mit KI-Integration" },
    ],
  },
  {
    id: "security",
    name: "Sicherheit & Compliance",
    icon: <Shield className="w-5 h-5" />,
    color: "from-red-600 to-rose-700",
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
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">AI Toolbox</h1>
              <p className="text-xs text-zinc-500">by SixSides-AI</p>
            </div>
          </div>
          <span className="text-xs text-zinc-500 hidden sm:block">{totalTools} Tools in {CATEGORIES.length} Kategorien</span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Die besten AI-Tools auf einen Blick
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          Kuratierte Sammlung der wichtigsten KI-Tools — von Content Creation bis Vibecoding.
        </p>

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Tool suchen..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-500 outline-none focus:border-zinc-600 transition-colors"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              !activeCategory
                ? "bg-white text-zinc-900"
                : "bg-zinc-800/50 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Alle
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? "bg-white text-zinc-900"
                  : "bg-zinc-800/50 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="space-y-10">
          {filtered.map((cat) => (
            <section key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold">{cat.name}</h3>
                <span className="text-xs text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded-full">
                  {cat.tools.length}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {cat.tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-sm group-hover:text-white transition-colors">
                        {tool.name}
                      </h4>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 shrink-0 mt-0.5 transition-colors" />
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{tool.desc}</p>
                    {tool.tag && (
                      <span
                        className={`absolute top-3 right-10 text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                          tool.tag === "Empfehlung"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-zinc-700/50 text-zinc-400"
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
          <div className="text-center py-20">
            <p className="text-zinc-500">Keine Tools gefunden. Versuche einen anderen Suchbegriff.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center">
        <p className="text-xs text-zinc-500">
          {new Date().getFullYear()} SixSides-AI.org — Kuratierte AI-Tool-Sammlung
        </p>
      </footer>
    </div>
  );
}
