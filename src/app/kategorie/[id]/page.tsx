import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { ExternalLink, ArrowLeft, Box } from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const category = CATEGORIES.find((c) => c.id === id);
  if (!category) return {};

  const toolNames = category.tools.slice(0, 5).map((t) => t.name).join(", ");
  const title = `${category.name} — AI Toolbox | SixSides-ai.org`;
  const description = category.intro
    ? `${category.intro} ${category.tools.length} Tools: ${toolNames} und mehr.`
    : `${category.tools.length} kuratierte KI-Tools in der Kategorie ${category.name}: ${toolNames} und mehr. Entdecke die besten AI-Tools auf einen Blick.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://toolbox.sixsides-ai.org/kategorie/${id}`,
      siteName: "AI Toolbox by SixSides-ai.org",
      type: "website",
    },
    alternates: {
      canonical: `https://toolbox.sixsides-ai.org/kategorie/${id}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const category = CATEGORIES.find((c) => c.id === id);

  if (!category) {
    notFound();
  }

  const totalTools = CATEGORIES.reduce((sum, c) => sum + c.tools.length, 0);

  return (
    <div className="min-h-screen bg-bg dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg/90 dark:bg-zinc-950/90 glass-nav border-b border-border dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Alle Tools</span>
            </Link>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white flex items-center justify-center">
              <Box className="w-4 h-4 text-white dark:text-zinc-900" />
            </div>
            <span className="text-lg font-bold">
              AI <span className="font-black">Toolbox</span>
            </span>
          </Link>
          <div className="w-20" />
        </div>
      </header>

      {/* Category Hero */}
      <section className="border-b border-border dark:border-zinc-800 bg-bg-alt/50 dark:bg-zinc-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-4 mb-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
              style={{ background: category.color }}
            >
              {category.icon}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-white">
                {category.name}
              </h1>
              <p className="text-sm text-text-muted mt-1">
                {category.tools.length} kuratierte Tools
              </p>
            </div>
          </div>
          {category.intro && (
            <p className="text-sm text-text-secondary dark:text-zinc-400 leading-relaxed mt-4 max-w-3xl">
              {category.intro}
            </p>
          )}
        </div>
      </section>

      {/* Tool Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-bg dark:bg-zinc-900 border border-border dark:border-zinc-800 rounded-xl p-5 hover:border-border-strong dark:hover:border-zinc-600 hover:bg-surface/50 dark:hover:bg-zinc-800/50 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h2 className="font-semibold text-sm text-text-primary dark:text-zinc-100 group-hover:text-accent dark:group-hover:text-white transition-colors">
                  {tool.name}
                </h2>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 shrink-0 mt-0.5 transition-opacity" />
              </div>
              <p className="text-xs text-text-muted leading-relaxed">{tool.desc}</p>
              {tool.tag && (
                <span
                  className={`absolute top-4 right-4 text-[10px] font-semibold px-1.5 py-0.5 rounded ${
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

        {/* Other Categories */}
        <div className="mt-12">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-4">
            Weitere Kategorien
          </h3>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.filter((c) => c.id !== id).map((cat) => (
              <Link
                key={cat.id}
                href={`/kategorie/${cat.id}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-surface dark:bg-zinc-800 border border-border dark:border-zinc-700 text-sm text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 hover:border-border-strong dark:hover:border-zinc-600 transition-all"
              >
                <span style={{ color: cat.color }}>{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="text-xs text-text-muted">({cat.tools.length})</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: category.name,
            description: `${category.tools.length} kuratierte KI-Tools in der Kategorie ${category.name}`,
            url: `https://toolbox.sixsides-ai.org/kategorie/${id}`,
            isPartOf: {
              "@type": "WebSite",
              name: "AI Toolbox",
              url: "https://toolbox.sixsides-ai.org",
            },
            numberOfItems: category.tools.length,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: category.tools.map((tool, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: tool.name,
                url: tool.url,
                description: tool.desc,
              })),
            },
          }),
        }}
      />

      {/* Footer */}
      <footer className="border-t border-border dark:border-zinc-800 py-6 mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} SixSides-ai.org &mdash; {totalTools} Tools in {CATEGORIES.length} Kategorien
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/impressum"
                className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                href="/"
                className="text-xs text-text-muted hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
              >
                Alle Tools
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
