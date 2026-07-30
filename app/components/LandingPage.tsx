import { Navbar } from "./Navbar";
import { InteractivePlayground } from "./InteractivePlayground";
import { Footer } from "./Footer";
import type { LandingContent, Locale, StatusType } from "../lib/content";
import { TYPEFORM_URL } from "../lib/links";

type LandingPageProps = {
  content: LandingContent;
  locale: Locale;
};

const statusBadgeClass: Record<StatusType, string> = {
  done: "badge-success",
  progress: "badge-primary",
  todo: "badge-neutral",
  upcoming: "badge-neutral",
  pending: "badge-warning",
};

export const LandingPage = ({ content, locale }: LandingPageProps) => {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <Navbar content={content.nav} locale={locale} />

      <section className="relative overflow-hidden border-b border-base-300 bg-base-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex max-w-full items-center rounded-full border border-primary/40 px-4 py-2 text-sm font-medium leading-snug text-primary sm:text-base">
              {content.hero.badge}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-base-content/70">
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary rounded-full px-7" href="#cta">
                {content.hero.primaryCta}
              </a>
              <a className="btn btn-outline rounded-full px-7" href="#demo">
                {content.hero.secondaryCta}
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              {content.hero.highlights.map((item) => (
                <div
                  className="rounded-lg border border-base-300 bg-base-100 p-3 font-medium text-base-content/80"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-base-300 pb-4">
              <div>
                <p className="text-sm font-semibold">{content.hero.dashboardTitle}</p>
                <p className="text-xs text-base-content/60">
                  {content.hero.dashboardSubtitle}
                </p>
              </div>
              <span className="badge badge-success badge-outline whitespace-nowrap">
                {content.hero.dashboardStatus}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {content.hero.signals.map((signal) => (
                <div className="rounded-lg bg-base-200 p-4" key={signal.label}>
                  <p className="text-xs text-base-content/60">{signal.label}</p>
                  <p className="mt-2 text-lg font-bold">{signal.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-3">
              {content.hero.tasks.map((task) => (
                <div
                  className="flex flex-col gap-3 rounded-lg border border-base-300 p-4 sm:flex-row sm:items-center sm:justify-between"
                  key={task.task}
                >
                  <div>
                    <p className="font-medium">{task.task}</p>
                    <p className="text-sm text-base-content/60">{task.date}</p>
                  </div>
                  <span className={`badge whitespace-nowrap ${statusBadgeClass[task.statusType]}`}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InteractivePlayground content={content.playground} />

      <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-semibold text-primary">{content.solutions.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {content.solutions.title}
          </h2>
          <p className="mt-4 text-base-content/70">
            {content.solutions.description}
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.solutions.items.map((solution) => (
            <article
              className="flex flex-col justify-between rounded-xl border border-base-300 bg-base-100 p-6 shadow-sm transition hover:border-primary/40"
              key={solution.title}
            >
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-base-200 text-xl font-bold">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <p className="mt-3 text-sm leading-6 text-base-content/70">
                  {solution.benefit}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="demo" className="border-y border-base-300 bg-base-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-primary">{content.demo.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {content.demo.title}
            </h2>
            <p className="mt-4 leading-7 text-base-content/70">
              {content.demo.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {content.demo.tags.map((tag) => (
                <span className="badge badge-lg" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-base-300 bg-base-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-base-300 bg-base-300/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-red-500/80" />
                <span className="inline-block h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="inline-block h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-medium text-base-content/60">
                {content.demo.videoTitle}
              </span>
              <div className="w-12" />
            </div>
            <div className="relative aspect-video w-full bg-black">
              <video
                autoPlay
                controls
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                src="/product-demo.mp4"
              >
                <track kind="captions" />
                {content.demo.unsupported}
              </video>
            </div>
          </div>
        </div>
      </section>

      {/*
      <section id="proof" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="font-semibold text-primary">{content.proof.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {content.proof.title}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {content.proof.metrics.map((metric) => (
                <div className="rounded-lg bg-base-200 p-4" key={metric.label}>
                  <p className="text-xl font-bold">{metric.stat}</p>
                  <p className="mt-1 text-xs text-base-content/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {content.proof.testimonials.map((testimonial) => (
              <article
                className="flex flex-col justify-between rounded-lg border border-base-300 p-5"
                key={testimonial.name}
              >
                <p className="text-sm leading-6 text-base-content/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-base-300/50 pt-3">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-base-content/60">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      <section id="why-us" className="border-y border-base-300 bg-base-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-semibold text-primary">{content.why.eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            {content.why.title}
          </h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-sm">
            {content.why.comparisons.map((comparison, index) => (
              <div
                className="grid gap-4 border-b border-base-300 p-5 last:border-b-0 md:grid-cols-2"
                key={`${comparison.before}-${comparison.after}`}
              >
                <div>
                  <p className="text-sm font-semibold text-red-400/80">
                    {index === 0 ? content.why.firstBeforeLabel : content.why.beforeLabel}
                  </p>
                  <p className="mt-1 text-sm font-medium">{comparison.before}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {index === 0 ? content.why.firstAfterLabel : content.why.afterLabel}
                  </p>
                  <p className="mt-1 text-sm font-medium">{comparison.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-neutral p-6 text-neutral-content shadow-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="font-semibold text-neutral-content/80">
                {content.cta.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {content.cta.title}
              </h2>
              <p className="mt-4 leading-7 text-neutral-content/70">
                {content.cta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                className="btn btn-primary rounded-full"
                href={TYPEFORM_URL}
                rel="noreferrer"
                target="_blank"
              >
                {content.cta.button}
              </a>
              <p className="text-xs text-neutral-content/60">
                {content.cta.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-primary">{content.faq.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {content.faq.title}
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {content.faq.items.map((faq) => (
            <details
              className="collapse collapse-arrow rounded-lg border border-base-300 bg-base-100"
              key={faq.question}
            >
              <summary className="collapse-title text-lg font-semibold">
                {faq.question}
              </summary>
              <div className="collapse-content leading-7 text-base-content/70">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <Footer content={content.footer} locale={locale} />
    </main>
  );
};
