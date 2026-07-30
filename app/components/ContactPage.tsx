import { Footer } from "./Footer";
import type { LandingContent, Locale } from "../lib/content";
import type { ContactPageContent } from "../lib/contactContent";

type ContactPageProps = {
  content: ContactPageContent;
  footer: LandingContent["footer"];
  locale: Locale;
};

export const ContactPage = ({ content, footer, locale }: ContactPageProps) => {
  const homeHref = locale === "id" ? "/" : "/en";

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <a
          className="inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-base-content"
          href={homeHref}
        >
          <span aria-hidden="true">&larr;</span>
          <span>{content.homeLabel}</span>
        </a>
        <div className="mt-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-normal sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-base-content/70">
            {content.description}
          </p>
          <p className="mt-4 text-sm font-medium text-base-content/60">
            {content.responseTime}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {content.cards.map((card) => (
            <article
              className="flex min-h-56 flex-col justify-between rounded-xl border border-base-300 bg-base-200 p-6"
              key={card.title}
            >
              <div>
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-base-content/70">
                  {card.description}
                </p>
              </div>
              <a
                className="btn btn-primary mt-6 rounded-full"
                href={card.href}
                rel={card.external ? "noreferrer" : undefined}
                target={card.external ? "_blank" : undefined}
              >
                {card.actionLabel}
              </a>
            </article>
          ))}
        </div>
      </section>
      <Footer content={footer} locale={locale} />
    </main>
  );
};
