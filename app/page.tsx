import { Navbar } from "./components/Navbar";

const solutions = [
  {
    title: "One shared operating layer",
    benefit:
      "Teams stop hunting across chat, docs, CRM notes, and task lists before every decision.",
  },
  {
    title: "Context that stays current",
    benefit:
      "Customer updates, owner changes, and follow-ups stay visible without another manual status ritual.",
  },
  {
    title: "Calm execution signals",
    benefit:
      "Leads see where work is healthy, stuck, or waiting, so the next move is clear.",
  },
];

const demoTasks = [
  ["Enterprise renewal plan", "Synced", "Today"],
  ["Support escalation summary", "Needs owner", "2h ago"],
  ["Product feedback digest", "Ready", "Yesterday"],
];

const signals = [
  ["Customer context", "92%"],
  ["Decision trail", "18 updates"],
  ["Follow-up risk", "Low"],
];

const testimonials = [
  {
    quote:
      "Sample copy: Entrosync gave our weekly pipeline review one source of truth instead of five tabs.",
    name: "Ops Lead",
  },
  {
    quote:
      "Sample copy: The team can see what changed, who owns it, and what still needs attention.",
    name: "Customer Success Manager",
  },
  {
    quote:
      "Sample copy: It feels like a calm command center for messy cross-functional work.",
    name: "Founder",
  },
];

const comparisons = [
  ["Scattered tools", "Entrosync"],
  ["Manual updates after every meeting", "Living context that reflects current work"],
  ["Status hidden inside threads", "Clear signals for ownership, risk, and next steps"],
  ["Long handoff notes", "Shared customer and decision memory"],
];

const faqs = [
  {
    question: "Is Entrosync live yet?",
    answer:
      "This page uses placeholder copy for an early landing page. The CTA can become a real waitlist when backend handling is added.",
  },
  {
    question: "Who is this for?",
    answer:
      "Entrosync is positioned for SaaS teams that manage customer work, internal decisions, and follow-ups across too many tools.",
  },
  {
    question: "Does the demo connect to real data?",
    answer:
      "Not in this first version. The showcase is a static product preview that communicates the intended workflow.",
  },
  {
    question: "What makes Entrosync different?",
    answer:
      "The page focuses on outcome clarity: less context switching, better handoffs, and fewer missed follow-ups.",
  },
  {
    question: "Can this page support pricing later?",
    answer:
      "Yes. A pricing section can be added between social proof and the final CTA when packages are ready.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <section className="relative overflow-hidden border-b border-base-300 bg-base-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="badge badge-outline mb-6 gap-2 border-primary/40 px-4 py-3 text-primary">
              Entrosync for SaaS teams
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Sync work, decisions, and customer context in one calm operating
              layer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-base-content/70">
              Entrosync helps teams see what changed, who owns the next step,
              and where customer work needs attention before it slips.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary rounded-full px-7" href="#cta">
                Get Entrosync
              </a>
              <a className="btn btn-outline rounded-full px-7" href="#demo">
                View demo
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm">
              {["No backend yet", "Placeholder copy", "One-page focus"].map(
                (item) => (
                  <div
                    className="rounded-lg border border-base-300 bg-base-100 p-3 text-base-content/70"
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-base-300 pb-4">
              <div>
                <p className="text-sm font-semibold">Entrosync workspace</p>
                <p className="text-xs text-base-content/60">
                  Live context overview
                </p>
              </div>
              <span className="badge badge-secondary badge-outline">
                In sync
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {signals.map(([label, value]) => (
                <div className="rounded-lg bg-base-200 p-4" key={label}>
                  <p className="text-xs text-base-content/60">{label}</p>
                  <p className="mt-2 text-xl font-bold">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-3">
              {demoTasks.map(([task, status, time]) => (
                <div
                  className="flex flex-col gap-3 rounded-lg border border-base-300 p-4 sm:flex-row sm:items-center sm:justify-between"
                  key={task}
                >
                  <div>
                    <p className="font-medium">{task}</p>
                    <p className="text-sm text-base-content/60">{time}</p>
                  </div>
                  <span className="badge badge-neutral whitespace-nowrap">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-semibold text-primary">Solutions</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Less tool switching. More useful context.
          </h2>
          <p className="mt-4 text-base-content/70">
            Each benefit answers the practical question every busy team asks:
            so what?
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {solutions.map((solution) => (
            <article
              className="rounded-lg border border-base-300 bg-base-100 p-6 shadow-sm"
              key={solution.title}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-lg font-bold text-primary-content">
                {solution.title.slice(0, 1)}
              </div>
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="mt-3 leading-7 text-base-content/70">
                {solution.benefit}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="demo" className="border-y border-base-300 bg-base-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-primary">Product demo showcase</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              See work health before it becomes a meeting.
            </h2>
            <p className="mt-4 leading-7 text-base-content/70">
              This static preview shows the intended Entrosync workflow:
              prioritized accounts, current decisions, owner clarity, and
              follow-up risk in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Tasks", "Signals", "Decision trail", "Activity"].map((tag) => (
                <span className="badge badge-lg" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-xl">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-lg bg-base-200 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">Priority work</h3>
                  <span className="badge badge-primary">3 active</span>
                </div>
                <div className="space-y-3">
                  {demoTasks.map(([task, status]) => (
                    <div className="rounded-lg bg-base-100 p-4" key={task}>
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-medium">{task}</p>
                        <span className="text-xs text-base-content/60">
                          {status}
                        </span>
                      </div>
                      <progress
                        className="progress progress-primary mt-3 w-full"
                        value={status === "Needs owner" ? 46 : 78}
                        max="100"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-neutral p-4 text-neutral-content">
                <h3 className="font-semibold">Activity feed</h3>
                <div className="mt-4 space-y-4 text-sm">
                  <p>Decision added: renewal path approved.</p>
                  <p>Owner needed: escalation summary.</p>
                  <p>Signal changed: follow-up risk now low.</p>
                  <p>Context synced: 18 updates this week.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="font-semibold text-primary">Social proof</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built for believable early trust.
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["12 teams", "4.8/5", "34% less follow-up drift"].map((metric) => (
                <div className="rounded-lg bg-base-200 p-4" key={metric}>
                  <p className="text-lg font-bold">{metric}</p>
                  <p className="mt-1 text-xs text-base-content/60">
                    Placeholder metric
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                className="rounded-lg border border-base-300 p-5"
                key={testimonial.name}
              >
                <p className="leading-7 text-base-content/70">
                  {testimonial.quote}
                </p>
                <p className="mt-5 font-semibold">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="border-y border-base-300 bg-base-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-semibold text-primary">Why us?</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Entrosync turns scattered updates into shared momentum.
          </h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-base-300 bg-base-100">
            {comparisons.map(([before, after], index) => (
              <div
                className="grid gap-4 border-b border-base-300 p-5 last:border-b-0 md:grid-cols-2"
                key={`${before}-${after}`}
              >
                <div>
                  <p className="text-sm font-semibold text-base-content/50">
                    {index === 0 ? "Without Entrosync" : "Before"}
                  </p>
                  <p className="mt-1 font-medium">{before}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {index === 0 ? "With Entrosync" : "After"}
                  </p>
                  <p className="mt-1 font-medium">{after}</p>
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
                Ready when you are
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Join the Entrosync early access list.
              </h2>
              <p className="mt-4 leading-7 text-neutral-content/70">
                Leave a placeholder email now. Add real submission handling when
                product intake is ready.
              </p>
            </div>
            <form className="flex flex-col gap-3" action="#">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                className="input input-bordered w-full bg-base-100 text-base-content"
                id="email"
                name="email"
                placeholder="you@company.com"
                type="email"
              />
              <button className="btn btn-primary rounded-full" type="submit">
                Get Entrosync
              </button>
              <p className="text-xs text-neutral-content/60">
                Placeholder form. No data is submitted.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Answers for early visitors.
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
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
    </main>
  );
}
