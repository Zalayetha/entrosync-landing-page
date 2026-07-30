import { Footer } from "./Footer";
import type { LandingContent, Locale } from "../lib/content";
import type { LegalPageContent } from "../lib/legalContent";

type LegalPageProps = {
  content: LegalPageContent;
  footer: LandingContent["footer"];
  locale: Locale;
};

export const LegalPage = ({ content, footer, locale }: LegalPageProps) => {
  const homeHref = locale === "id" ? "/" : "/en";

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <a
          className="inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-base-content"
          href={homeHref}
        >
          <span aria-hidden="true">&larr;</span>
          <span>{content.homeLabel}</span>
        </a>
        <div className="mt-10">
          <p className="text-sm font-semibold text-primary">
            Last updated: {content.lastUpdated}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-base-content/70">
            {content.description}
          </p>
          <p className="mt-5 rounded-lg border border-base-300 bg-base-200 p-4 text-sm leading-6 text-base-content/70">
            {content.disclaimer}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p
                    className="leading-7 text-base-content/70"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <Footer content={footer} locale={locale} />
    </main>
  );
};
