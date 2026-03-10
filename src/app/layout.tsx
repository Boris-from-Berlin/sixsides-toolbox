import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Toolbox — SixSides-AI",
  description: "Kuratierte Sammlung der besten AI-Tools nach Kategorien. Content Creation, Automatisierung, Vibecoding, Datenbanken und mehr.",
  openGraph: {
    title: "AI Toolbox — SixSides-AI",
    description: "Kuratierte Sammlung der besten AI-Tools nach Kategorien.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
