import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import TrackingScripts from "@/components/TrackingScripts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toolbox.sixsides-ai.org"),
  title: "AI Toolbox — 177+ kuratierte KI-Tools | by SixSides-ai.org",
  description: "177+ kuratierte KI-Tools in 15 Kategorien auf einen Blick. Content Creation, Vibecoding, Automatisierung, Datenbanken und mehr — kuratiert von SixSides-ai.org aus Berlin.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Toolbox — 177+ kuratierte KI-Tools",
    description: "177+ KI-Tools in 15 Kategorien. Von Content Creation bis Vibecoding — kuratiert von SixSides-ai.org.",
    url: "https://toolbox.sixsides-ai.org",
    siteName: "AI Toolbox by SixSides-ai.org",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Toolbox — 177+ kuratierte KI-Tools",
    description: "177+ KI-Tools in 15 Kategorien. Von Content Creation bis Vibecoding.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sixsides-ai.org/#organization",
      name: "SixSides AI",
      url: "https://sixsides-ai.org",
      logo: "https://toolbox.sixsides-ai.org/favicon.svg",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@sixsides-ai.org",
        telephone: "+49-174-327-3078",
        contactType: "customer service",
        availableLanguage: ["German", "English", "Spanish", "Portuguese"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carl-Herz-Ufer 11",
        addressLocality: "Berlin",
        postalCode: "10961",
        addressCountry: "DE",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://toolbox.sixsides-ai.org/#website",
      url: "https://toolbox.sixsides-ai.org",
      name: "AI Toolbox by SixSides-ai.org",
      description: "Kuratiertes Verzeichnis von 177+ KI-Tools in 15 Kategorien",
      publisher: { "@id": "https://sixsides-ai.org/#organization" },
      inLanguage: "de-DE",
    },
    {
      "@type": "CollectionPage",
      "@id": "https://toolbox.sixsides-ai.org/#collectionpage",
      url: "https://toolbox.sixsides-ai.org",
      name: "AI Toolbox — 177+ kuratierte KI-Tools",
      description: "Die besten AI-Tools auf einen Blick in 15 Kategorien: AI Chatbots, Content Creation, Bildgenerierung, Video, Audio, Vibecoding, Automatisierung, AI Agents, Datenbanken, DevTools, Lernen, Produktivität, Marketing, Research, Sicherheit.",
      isPartOf: { "@id": "https://toolbox.sixsides-ai.org/#website" },
      about: {
        "@type": "Thing",
        name: "Künstliche Intelligenz Tools",
      },
      mainEntity: {
        "@type": "ItemList",
        name: "KI-Tools Verzeichnis",
        description: "177+ kuratierte KI-Tools in 15 Kategorien",
        numberOfItems: 177,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "AI Chatbots & Assistenten", description: "ChatGPT, Claude, Gemini, Perplexity und weitere Konversations-KIs" },
          { "@type": "ListItem", position: 2, name: "Content Creation & Text", description: "Jasper, Copy.ai, Writesonic und weitere KI-Texterstellungstools" },
          { "@type": "ListItem", position: 3, name: "Bildgenerierung & Design", description: "Midjourney, DALL-E 3, Stable Diffusion und weitere KI-Bildgeneratoren" },
          { "@type": "ListItem", position: 4, name: "Video & Animation", description: "Runway, Sora, Pika und weitere KI-Videogeneratoren" },
          { "@type": "ListItem", position: 5, name: "Audio & Musik", description: "ElevenLabs, Suno, Udio und weitere KI-Audio-Tools" },
          { "@type": "ListItem", position: 6, name: "Vibecoding & AI IDEs", description: "Cursor, Claude Code, GitHub Copilot und weitere KI-Code-Editoren" },
          { "@type": "ListItem", position: 7, name: "Automatisierung & Workflows", description: "Zapier, Make, n8n und weitere Automatisierungstools" },
          { "@type": "ListItem", position: 8, name: "AI Agents & Frameworks", description: "LangChain, LlamaIndex, CrewAI und weitere Agent-Frameworks" },
          { "@type": "ListItem", position: 9, name: "Datenbanken & Backend", description: "Supabase, Neon, Pinecone und weitere Backend-Dienste" },
          { "@type": "ListItem", position: 10, name: "GitHub & DevTools", description: "GitHub Actions, Vercel, Sentry und weitere Entwicklertools" },
          { "@type": "ListItem", position: 11, name: "AI Skills & Lernen", description: "DeepLearning.AI, Hugging Face, Kaggle und weitere Lernplattformen" },
          { "@type": "ListItem", position: 12, name: "Produktivität & Business", description: "Notion AI, Gamma, Otter.ai und weitere Produktivitätstools" },
          { "@type": "ListItem", position: 13, name: "Marketing & SEO", description: "SEMrush, Ahrefs, Surfer SEO und weitere Marketing-Tools" },
          { "@type": "ListItem", position: 14, name: "Daten & Research", description: "Perplexity, Elicit, Consensus und weitere Forschungstools" },
          { "@type": "ListItem", position: 15, name: "Sicherheit & Compliance", description: "Snyk, GitGuardian, Lakera Guard und weitere Security-Tools" },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('toolbox-theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-bg dark:bg-zinc-950 text-text-primary dark:text-zinc-100 transition-colors duration-200`}
      >
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <CookieBanner />
            <TrackingScripts />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
