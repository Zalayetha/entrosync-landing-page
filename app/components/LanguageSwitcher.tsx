"use client";

import type { Locale, LandingContent } from "../lib/content";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: LandingContent["nav"]["language"];
};

export const LanguageSwitcher = ({ locale, labels }: LanguageSwitcherProps) => {
  const switchLocale = (targetLocale: Locale) => {
    const hash = window.location.hash;
    window.location.href = targetLocale === "id" ? `/${hash}` : `/en${hash}`;
  };

  return (
    <div
      aria-label={labels.aria}
      className="join overflow-hidden rounded-full border border-base-300 bg-base-200 p-0.5"
      role="group"
    >
      <button
        aria-pressed={locale === "id"}
        className={`btn join-item btn-xs rounded-full px-3 ${
          locale === "id" ? "btn-primary" : "btn-ghost"
        }`}
        onClick={() => switchLocale("id")}
        type="button"
      >
        {labels.id}
      </button>
      <button
        aria-pressed={locale === "en"}
        className={`btn join-item btn-xs rounded-full px-3 ${
          locale === "en" ? "btn-primary" : "btn-ghost"
        }`}
        onClick={() => switchLocale("en")}
        type="button"
      >
        {labels.en}
      </button>
    </div>
  );
};
