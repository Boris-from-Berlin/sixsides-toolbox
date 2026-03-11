"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-bg dark:bg-zinc-950 text-text-primary dark:text-zinc-100">
      {/* Header */}
      <header className="border-b border-border dark:border-zinc-800">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <Link
            href="/"
            className="text-sm text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
          >
            {t("footer.backToHome")}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-12 tracking-tight">
          &Uuml;ber uns
        </h1>

        <div className="grid gap-8">
          {/* Wer wir sind */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">Wer wir sind</h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-3">
              <p>
                Die AI Toolbox wird betrieben von <strong className="text-text-primary dark:text-zinc-100">Boris Dittberner</strong> und{" "}
                <strong className="text-text-primary dark:text-zinc-100">SixSides-ai.org</strong> mit Sitz in Berlin.
              </p>
              <p>
                SixSides ist eine KI-Agentur, die Unternehmen in sechs Kernbereichen unterst&uuml;tzt:
                Prototyping, Marketing, Micro-SaaS, Daten &amp; CI, Automation und Enablement.
                Wir verbinden strategisches Denken mit modernster KI-Technologie, um messbares Wachstum zu erm&ouml;glichen.
              </p>
            </div>
          </section>

          {/* Unsere Mission */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">Unsere Mission</h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-3">
              <p>
                Unser Ziel ist es, KI-Tools f&uuml;r deutschsprachige Fachkr&auml;fte zug&auml;nglich und auffindbar zu machen.
                Die KI-Landschaft ver&auml;ndert sich rasant &mdash; jeden Tag erscheinen neue Tools,
                bestehende werden verbessert oder verschwinden.
              </p>
              <p>
                Mit der AI Toolbox kuratieren wir die besten Werkzeuge in &uuml;ber 15 Kategorien
                und helfen Ihnen, das richtige Tool f&uuml;r Ihre Anforderungen zu finden &mdash;
                ob f&uuml;r Content Creation, Vibecoding, Automatisierung oder Datenanalyse.
              </p>
            </div>
          </section>

          {/* Wie wir kuratieren */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">Wie wir kuratieren</h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-3">
              <p>
                Jedes Tool in unserer Sammlung wird von unserem Team getestet und bewertet.
                Wir achten dabei auf drei Kriterien:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong className="text-text-primary dark:text-zinc-100">Qualit&auml;t</strong> &mdash; Funktioniert das Tool zuverl&auml;ssig und liefert es gute Ergebnisse?</li>
                <li><strong className="text-text-primary dark:text-zinc-100">N&uuml;tzlichkeit</strong> &mdash; L&ouml;st es ein echtes Problem f&uuml;r die Zielgruppe?</li>
                <li><strong className="text-text-primary dark:text-zinc-100">Relevanz</strong> &mdash; Ist es f&uuml;r den deutschsprachigen Markt verf&uuml;gbar und relevant?</li>
              </ul>
              <p>
                Die Toolbox wird w&ouml;chentlich aktualisiert. Besonders herausragende Tools
                erhalten unser redaktionelles <span className="inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Empfehlung</span>-Tag.
              </p>
            </div>
          </section>

          {/* Das SixSides Ökosystem */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">Das SixSides &Ouml;kosystem</h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-3">
              <p>
                Die AI Toolbox ist Teil des SixSides-&Ouml;kosystems. Entdecken Sie auch unsere weiteren Angebote:
              </p>
              <ul className="space-y-3 mt-4">
                <li>
                  <a
                    href="https://pulse.sixsides-ai.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary dark:text-zinc-100 font-medium hover:underline transition-colors"
                  >
                    AI Pulse &mdash; Newsletter
                  </a>
                  <p className="text-sm mt-0.5">
                    W&ouml;chentlicher Newsletter mit den wichtigsten KI-Entwicklungen, Business Ideas und Tool-Empfehlungen.
                  </p>
                </li>
                <li>
                  <a
                    href="https://sixsides-ai.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary dark:text-zinc-100 font-medium hover:underline transition-colors"
                  >
                    SixSides-ai.org &mdash; KI-Agentur
                  </a>
                  <p className="text-sm mt-0.5">
                    Pers&ouml;nliche Beratung und Umsetzung f&uuml;r KI-Projekte in Ihrem Unternehmen.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* Kontakt */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">Kontakt</h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-1">
              <p>
                Haben Sie Fragen, Feedback oder m&ouml;chten ein Tool vorschlagen?
              </p>
              <p className="mt-3">
                E-Mail:{" "}
                <a
                  href="mailto:info@sixsides-ai.org"
                  className="text-text-primary dark:text-zinc-100 hover:underline transition-colors"
                >
                  info@sixsides-ai.org
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border dark:border-zinc-800 py-8">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <Link
            href="/"
            className="text-sm text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
          >
            {t("footer.backToHome")}
          </Link>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm">
            <Link
              href="/impressum"
              className="text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
            >
              {t("footer.impressum")}
            </Link>
            <span className="text-text-muted dark:text-zinc-600">&bull;</span>
            <Link
              href="/datenschutz"
              className="text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
            >
              {t("footer.datenschutz")}
            </Link>
          </div>
          <p className="text-text-muted dark:text-zinc-600 text-xs mt-2">
            &copy; {new Date().getFullYear()} SixSides AI. {t("footer.allRightsReserved")}
          </p>
        </div>
      </footer>
    </div>
  );
}
