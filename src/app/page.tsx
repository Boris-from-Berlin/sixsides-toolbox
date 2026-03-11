"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslation } from "@/contexts/LanguageContext";
import { openCookieSettings } from "@/components/CookieBanner";
import NewsletterWidget from "@/components/NewsletterWidget";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import {
  Search, ExternalLink,
  Sun, Moon, Box, LayoutGrid, Zap,
  Lightbulb, ArrowRight, Newspaper, Hexagon, ChevronDown,
} from "lucide-react";

export default function ToolboxPage() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <p className="text-xs text-text-muted mt-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Zuletzt aktualisiert: März 2026
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

            {/* Newsletter Widget */}
            <NewsletterWidget />

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
                  {cat.intro && (
                    <p className="text-sm text-text-secondary dark:text-zinc-400 leading-relaxed mb-4 max-w-3xl">
                      {cat.intro}
                    </p>
                  )}
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

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="bg-bg-alt dark:bg-zinc-900 rounded-2xl border border-border dark:border-zinc-800 p-8">
          <h3 className="text-xl font-bold text-text-primary dark:text-white mb-6">
            H&auml;ufig gestellte Fragen
          </h3>
          <div className="space-y-2">
            {[
              {
                q: "Was ist die AI Toolbox?",
                a: "Ein kuratiertes Verzeichnis von 177+ KI-Tools in 15 Kategorien, betrieben von SixSides-ai.org. Wir helfen Ihnen, das richtige KI-Werkzeug f\u00fcr Ihre Anforderungen zu finden.",
              },
              {
                q: "Wie werden die Tools ausgew\u00e4hlt?",
                a: "Redaktionelle Kuratierung basierend auf Qualit\u00e4t, N\u00fctzlichkeit und Relevanz. Die Toolbox wird w\u00f6chentlich aktualisiert, um neue Tools aufzunehmen und bestehende Eintr\u00e4ge zu \u00fcberpr\u00fcfen.",
              },
              {
                q: "Welche KI-Tools eignen sich f\u00fcr Einsteiger?",
                a: "ChatGPT, Claude, Canva AI und Gamma sind besonders einsteigerfreundlich. Sie bieten intuitive Oberfl\u00e4chen und erfordern keine technischen Vorkenntnisse.",
              },
              {
                q: "Was ist Vibecoding?",
                a: "Ein neuer Ansatz zur Softwareentwicklung, bei dem KI-gest\u00fctzte IDEs wie Cursor, Claude Code und v0 den Gro\u00dfteil des Codes generieren. Der Entwickler beschreibt in nat\u00fcrlicher Sprache, was gebaut werden soll.",
              },
              {
                q: "Sind die Tools kostenlos?",
                a: "Viele Tools bieten kostenlose Versionen oder Freemium-Modelle. Die Beschreibungen in unserer Toolbox enthalten Hinweise zur Preisgestaltung.",
              },
              {
                q: "Wie kann ich ein Tool vorschlagen?",
                a: "Kontaktieren Sie uns unter info@sixsides-ai.org. Wir pr\u00fcfen jeden Vorschlag und nehmen qualitativ hochwertige Tools gerne in unsere Sammlung auf.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-border dark:border-zinc-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-text-primary dark:text-zinc-100 hover:bg-surface/50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  {faq.q}
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-text-muted transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-text-secondary dark:text-zinc-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Was ist die AI Toolbox?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ein kuratiertes Verzeichnis von 177+ KI-Tools in 15 Kategorien, betrieben von SixSides-ai.org.",
                },
              },
              {
                "@type": "Question",
                name: "Wie werden die Tools ausgew\u00e4hlt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Redaktionelle Kuratierung basierend auf Qualit\u00e4t, N\u00fctzlichkeit und Relevanz. W\u00f6chentlich aktualisiert.",
                },
              },
              {
                "@type": "Question",
                name: "Welche KI-Tools eignen sich f\u00fcr Einsteiger?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ChatGPT, Claude, Canva AI und Gamma sind besonders einsteigerfreundlich.",
                },
              },
              {
                "@type": "Question",
                name: "Was ist Vibecoding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ein neuer Ansatz zur Softwareentwicklung, bei dem KI-gest\u00fctzte IDEs wie Cursor, Claude Code und v0 den Gro\u00dfteil des Codes generieren.",
                },
              },
              {
                "@type": "Question",
                name: "Sind die Tools kostenlos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Viele Tools bieten kostenlose Versionen oder Freemium-Modelle. Die Beschreibungen enthalten Hinweise zur Preisgestaltung.",
                },
              },
              {
                "@type": "Question",
                name: "Wie kann ich ein Tool vorschlagen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kontaktieren Sie uns unter info@sixsides-ai.org.",
                },
              },
            ],
          }),
        }}
      />

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} SixSides-ai.org
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Link
                href="/impressum"
                className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
              >
                {t("footer.impressum")}
              </Link>
              <Link
                href="/datenschutz"
                className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
              >
                {t("footer.datenschutz")}
              </Link>
              <Link
                href="/about"
                className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
              >
                &Uuml;ber uns
              </Link>
              <button
                onClick={openCookieSettings}
                className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
              >
                {t("footer.cookieSettings")}
              </button>
              <span className="text-border dark:text-zinc-700">|</span>
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
              <span className="text-border dark:text-zinc-700">|</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
