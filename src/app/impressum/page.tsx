"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export default function ImpressumPage() {
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
          Impressum
        </h1>

        <div className="grid gap-8">
          {/* Angaben gemäß § 5 TMG */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              Angaben gem&auml;&szlig; &sect; 5 TMG
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-1">
              <p>Boris Dittberner</p>
              <p>Carl-Herz-Ufer 11</p>
              <p>10961 Berlin</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              Kontakt
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-1">
              <p>Telefon: +49 174 327 3078</p>
              <p>
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

          {/* Umsatzsteuer-ID */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              Umsatzsteuer-ID
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-1">
              <p>
                Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
                Umsatzsteuergesetz:
              </p>
              <p>DE339806056</p>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-1">
              <p>Boris Dittberner</p>
              <p>Carl-Herz-Ufer 11</p>
              <p>10961 Berlin</p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              Haftungsausschluss
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-6">
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Haftung f&uuml;r Inhalte
                </h3>
                <p>
                  Als Diensteanbieter bin ich gem&auml;&szlig; &sect; 7 Abs. 1
                  TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis
                  10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
                  &uuml;bermittelte oder gespeicherte fremde Informationen zu
                  &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf
                  eine rechtswidrige T&auml;tigkeit hinweisen.
                </p>
                <p className="mt-2">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten
                  Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von
                  entsprechenden Rechtsverletzungen werde ich diese Inhalte
                  umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Haftung f&uuml;r Links
                </h3>
                <p>
                  Mein Angebot enth&auml;lt Links zu externen Websites
                  Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb
                  kann ich f&uuml;r diese fremden Inhalte auch keine
                  Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder
                  Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                  wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
                  Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige
                  Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="mt-2">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                  ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                  nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                  werde ich derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">Urheberrecht</h3>
                <p>
                  Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
                  bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen
                  Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                  nur f&uuml;r den privaten, nicht kommerziellen Gebrauch
                  gestattet.
                </p>
                <p className="mt-2">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                  erstellt wurden, werden die Urheberrechte Dritter beachtet.
                  Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                  aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
                  Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
                  Inhalte umgehend entfernen.
                </p>
              </div>
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
            <span className="text-text-primary dark:text-zinc-100 font-medium">{t("footer.impressum")}</span>
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
