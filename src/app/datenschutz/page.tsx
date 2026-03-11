"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

export default function DatenschutzPage() {
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
          Datenschutzerkl&auml;rung
        </h1>

        <div className="grid gap-8">
          {/* 1. Datenschutz auf einen Blick */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-4">
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                  dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert,
                  wenn Sie diese Website besuchen. Personenbezogene Daten sind
                  alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                  k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema
                  Datenschutz entnehmen Sie unserer unter diesem Text
                  aufgef&uuml;hrten Datenschutzerkl&auml;rung.
                </p>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Datenerfassung auf dieser Website
                </h3>
                <p>
                  <strong className="text-text-primary dark:text-zinc-100">
                    Wer ist verantwortlich f&uuml;r die Datenerfassung auf
                    dieser Website?
                  </strong>
                </p>
                <p>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
                  Abschnitt &bdquo;Hinweis zur verantwortlichen Stelle&ldquo; in
                  dieser Datenschutzerkl&auml;rung entnehmen.
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-text-primary dark:text-zinc-100">
                    Wie erfassen wir Ihre Daten?
                  </strong>
                </p>
                <p>
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                  diese mitteilen &mdash; beispielsweise durch eine
                  Newsletter-Anmeldung. Andere Daten werden automatisch oder
                  nach Ihrer Einwilligung beim Besuch der Website durch unsere
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
                  Internetbrowser, Betriebssystem oder Uhrzeit des
                  Seitenaufrufs).
                </p>
              </div>
              <div>
                <p>
                  <strong className="text-text-primary dark:text-zinc-100">
                    Wof&uuml;r nutzen wir Ihre Daten?
                  </strong>
                </p>
                <p>
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie
                  Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
                  k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet
                  werden.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-4">
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">Datenschutz</h3>
                <p>
                  Der Betreiber dieser Seiten nimmt den Schutz Ihrer
                  pers&ouml;nlichen Daten sehr ernst. Ich behandle Ihre
                  personenbezogenen Daten vertraulich und entsprechend den
                  gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerkl&auml;rung.
                </p>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Hinweis zur verantwortlichen Stelle
                </h3>
                <p>
                  Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
                  dieser Website ist:
                </p>
                <p className="mt-2">
                  Boris Dittberner
                  <br />
                  Carl-Herz-Ufer 11
                  <br />
                  10961 Berlin
                </p>
                <p className="mt-2">
                  Telefon: +49 174 327 3078
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:info@sixsides-ai.org"
                    className="text-text-primary dark:text-zinc-100 hover:underline transition-colors"
                  >
                    info@sixsides-ai.org
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Speicherdauer
                </h3>
                <p>
                  Soweit innerhalb dieser Datenschutzerkl&auml;rung keine
                  speziellere Speicherdauer genannt wurde, verbleiben Ihre
                  personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
                  Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes
                  L&ouml;schersuchen geltend machen oder eine Einwilligung zur
                  Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
                  sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
                  f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben.
                </p>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Ihre Rechte
                </h3>
                <p>Sie haben jederzeit das Recht auf:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Unentgeltliche Auskunft &uuml;ber Ihre gespeicherten
                    personenbezogenen Daten
                  </li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>L&ouml;schung Ihrer gespeicherten Daten</li>
                  <li>Einschr&auml;nkung der Datenverarbeitung</li>
                  <li>Daten&uuml;bertragbarkeit</li>
                  <li>
                    Widerspruch gegen die Verarbeitung Ihrer Daten
                  </li>
                  <li>
                    Widerruf einer erteilten Einwilligung jederzeit
                  </li>
                  <li>
                    Beschwerde bei einer Aufsichtsbeh&ouml;rde
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Datenerfassung auf dieser Website */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              3. Datenerfassung auf dieser Website
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-4">
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">Cookies</h3>
                <p>
                  Diese Internetseiten verwenden teilweise sogenannte Cookies.
                  Cookies richten auf Ihrem Rechner keinen Schaden an und
                  enthalten keine Viren. Cookies dienen dazu, unser Angebot
                  nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
                  sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
                  und die Ihr Browser speichert.
                </p>
                <p className="mt-2">
                  Die meisten der von uns verwendeten Cookies sind sogenannte
                  &bdquo;Session-Cookies&ldquo;. Sie werden nach Ende Ihres
                  Besuchs automatisch gel&ouml;scht. Andere Cookies bleiben auf
                  Ihrem Endger&auml;t gespeichert, bis Sie diese l&ouml;schen.
                  Diese Cookies erm&ouml;glichen es uns, Ihren Browser beim
                  n&auml;chsten Besuch wiederzuerkennen.
                </p>
                <p className="mt-2">
                  Wir verwenden folgende Cookies:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong className="text-text-primary dark:text-zinc-100">cookie_consent</strong> &mdash; Speichert Ihre Cookie-Einwilligung (365 Tage)</li>
                  <li><strong className="text-text-primary dark:text-zinc-100">NEXT_LOCALE</strong> &mdash; Speichert Ihre Spracheinstellung (365 Tage)</li>
                  <li><strong className="text-text-primary dark:text-zinc-100">toolbox-theme</strong> &mdash; Speichert Ihre Theme-Einstellung (localStorage)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Server-Log-Dateien
                </h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in sogenannten Server-Log-Dateien, die Ihr
                  Browser automatisch an uns &uuml;bermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mt-2">
                  Eine Zusammenf&uuml;hrung dieser Daten mit anderen
                  Datenquellen wird nicht vorgenommen.
                </p>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Newsletter-Anmeldung
                </h3>
                <p>
                  Wenn Sie sich f&uuml;r unseren Newsletter anmelden, wird Ihre
                  E-Mail-Adresse an unseren Newsletter-Dienst (AI Pulse)
                  &uuml;bermittelt und dort gespeichert. Wir verwenden diese
                  Daten ausschlie&szlig;lich f&uuml;r den Versand des
                  Newsletters. Eine Weitergabe an Dritte erfolgt nicht.
                </p>
                <p className="mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                  Sie k&ouml;nnen sich jederzeit vom Newsletter abmelden.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Analyse-Tools und Werbung */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              4. Analyse-Tools und Werbung
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-4">
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Google Analytics 4
                </h3>
                <p>
                  Wir verwenden Google Analytics 4, einen Webanalysedienst der
                  Google Ireland Limited. Google Analytics verwendet Cookies, die
                  eine Analyse der Benutzung der Website erm&ouml;glichen. Die
                  IP-Adresse wird dabei anonymisiert (IP-Anonymisierung).
                </p>
                <p className="mt-2">
                  <strong className="text-text-primary dark:text-zinc-100">
                    Google Analytics wird nur geladen, wenn Sie im Cookie-Banner
                    der Kategorie &bdquo;Analyse&ldquo; zugestimmt haben.
                  </strong>
                </p>
                <p className="mt-2">
                  Anbieter: Google Ireland Limited, Gordon House, Barrow Street,
                  Dublin 4, Irland.
                </p>
                <p>
                  Datenschutzerkl&auml;rung:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary dark:text-zinc-100 hover:underline transition-colors"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
                <p className="mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
                  &uuml;ber Cookie-Banner).
                </p>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Google AdSense
                </h3>
                <p>
                  Wir nutzen Google AdSense, einen Dienst der Google Ireland
                  Limited, zur Einbindung von Werbeanzeigen. Google
                  AdSense verwendet Cookies und sogenannte &bdquo;Web
                  Beacons&ldquo;, um die Nutzung unserer Website zu analysieren
                  und personalisierte Werbung auszuspielen.
                </p>
                <p className="mt-2">
                  <strong className="text-text-primary dark:text-zinc-100">
                    Google AdSense wird nur geladen, wenn Sie im Cookie-Banner
                    der Kategorie &bdquo;Marketing&ldquo; zugestimmt haben.
                  </strong>
                </p>
                <p className="mt-2">
                  Die durch Cookies erzeugten Informationen &uuml;ber Ihre
                  Benutzung dieser Website werden in der Regel an einen Server
                  von Google in den USA &uuml;bertragen und dort gespeichert.
                  Google ist unter dem EU-US Data Privacy Framework zertifiziert.
                </p>
                <p className="mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
                  &uuml;ber Cookie-Banner).
                </p>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Meta Pixel
                </h3>
                <p>
                  Wir verwenden den Meta Pixel (ehemals Facebook Pixel), einen
                  Dienst der Meta Platforms Ireland Limited, zur Analyse von
                  Nutzerverhalten und zur Optimierung unserer Werbeanzeigen auf
                  Meta-Plattformen (Facebook, Instagram).
                </p>
                <p className="mt-2">
                  <strong className="text-text-primary dark:text-zinc-100">
                    Das Meta Pixel wird nur geladen, wenn Sie im Cookie-Banner
                    der Kategorie &bdquo;Marketing&ldquo; zugestimmt haben.
                  </strong>
                </p>
                <p className="mt-2">
                  Anbieter: Meta Platforms Ireland Limited, 4 Grand Canal Square,
                  Grand Canal Harbour, Dublin 2, Irland.
                </p>
                <p>
                  Datenschutzerkl&auml;rung:{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary dark:text-zinc-100 hover:underline transition-colors"
                  >
                    https://www.facebook.com/privacy/policy/
                  </a>
                </p>
                <p className="mt-2">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
                  &uuml;ber Cookie-Banner).
                </p>
              </div>
            </div>
          </section>

          {/* 5. Plugins und Tools */}
          <section className="p-8 rounded-2xl bg-surface dark:bg-zinc-900 border border-border dark:border-zinc-800">
            <h2 className="text-lg font-semibold mb-4">
              5. Plugins und Tools
            </h2>
            <div className="text-text-secondary dark:text-zinc-400 leading-relaxed space-y-4">
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Vercel (Hosting)
                </h3>
                <p>
                  Diese Website wird auf Servern von Vercel gehostet. Beim
                  Besuch der Website werden automatisch technische Daten
                  (IP-Adresse, Browserinformationen) an Vercel
                  &uuml;bermittelt.
                </p>
                <p className="mt-2">
                  Anbieter: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
                  91789, USA.
                </p>
                <p>
                  Datenschutzerkl&auml;rung:{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary dark:text-zinc-100 hover:underline transition-colors"
                  >
                    https://vercel.com/legal/privacy-policy
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-text-primary dark:text-zinc-100 font-medium mb-2">
                  Google Fonts
                </h3>
                <p>
                  Diese Seite nutzt Google Fonts, die &uuml;ber Next.js lokal
                  eingebunden werden. Es findet keine Verbindung zu
                  Google-Servern statt, da die Schriftarten lokal auf unserem
                  Server bereitgestellt werden.
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
            <Link
              href="/impressum"
              className="text-text-secondary dark:text-zinc-400 hover:text-text-primary dark:hover:text-zinc-100 transition-colors"
            >
              {t("footer.impressum")}
            </Link>
            <span className="text-text-muted dark:text-zinc-600">&bull;</span>
            <span className="text-text-primary dark:text-zinc-100 font-medium">{t("footer.datenschutz")}</span>
          </div>
          <p className="text-text-muted dark:text-zinc-600 text-xs mt-2">
            &copy; {new Date().getFullYear()} SixSides AI. {t("footer.allRightsReserved")}
          </p>
        </div>
      </footer>
    </div>
  );
}
