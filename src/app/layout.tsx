import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AI Toolbox — Kuratierte KI-Tools | by SixSides-ai.org",
  description: "Die besten AI-Tools auf einen Blick. Content Creation, Vibecoding, Automatisierung, Datenbanken und mehr — kuratiert von SixSides-ai.org",
  openGraph: {
    title: "AI Toolbox — Kuratierte KI-Tools",
    description: "140+ KI-Tools in 15 Kategorien. Von Content Creation bis Vibecoding.",
    url: "https://toolbox.sixsides-ai.org",
    siteName: "AI Toolbox by SixSides-ai.org",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Toolbox — Kuratierte KI-Tools",
    description: "140+ KI-Tools in 15 Kategorien. Von Content Creation bis Vibecoding.",
  },
  robots: { index: true, follow: true },
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
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('toolbox-theme');if(t==='dark')document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-bg dark:bg-zinc-950 text-text-primary dark:text-zinc-100 transition-colors duration-200`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
