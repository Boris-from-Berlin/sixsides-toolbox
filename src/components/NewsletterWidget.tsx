"use client";

import { useState } from "react";
import { Mail, ArrowRight, Loader2, Check } from "lucide-react";

export default function NewsletterWidget() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("https://pulse.sixsides-ai.org/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, language: "de", frequency: "weekly" }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.error || "Fehler bei der Anmeldung.");
      }
    } catch {
      setError("Verbindungsfehler. Bitte versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-bg-alt dark:bg-zinc-900 rounded-2xl border border-border dark:border-zinc-800 p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-surface dark:bg-zinc-800 flex items-center justify-center">
          <Mail className="w-5 h-5 text-text-muted" />
        </div>
        <div>
          <h3 className="font-bold text-sm text-text-primary dark:text-white leading-snug">
            KI-Newsletter by SixSides-ai.org
          </h3>
          <p className="text-[11px] text-text-muted">
            Wöchentlich die wichtigsten KI-News
          </p>
        </div>
      </div>

      <p className="text-sm text-text-secondary dark:text-zinc-400 mb-4 leading-relaxed">
        Jeden Montag die Top-Themen aus LLMs, Automation, Marketing und Forschung — kompakt zusammengefasst.
      </p>

      {success ? (
        <div className="flex items-center gap-2 py-2">
          <Check className="w-4 h-4 text-emerald-500" />
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
            Erfolgreich angemeldet!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="deine@email.de"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-surface dark:bg-zinc-800 border border-border dark:border-zinc-700 text-sm text-text-primary dark:text-zinc-100 placeholder-text-muted outline-none focus:border-border-strong dark:focus:border-zinc-500 transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading || !email}
            className="w-10 h-10 rounded-full bg-accent dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0 hover:bg-accent-hover dark:hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </form>
      )}

      {error && (
        <p className="text-xs text-red-500 mt-2">{error}</p>
      )}

      <p className="text-[11px] text-text-muted mt-3">
        Kein Spam. Jederzeit abbestellbar.
      </p>
    </div>
  );
}
