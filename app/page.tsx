import { Navbar } from "./components/Navbar";

const solutions = [
  {
    title: "Smart AI Brief Generator",
    icon: "✨",
    benefit:
      "Paste raw WhatsApp chats, email threads, or call notes. AI instantly generates a structured PRD, scope of work, and 1-click project milestones.",
  },
  {
    title: "Zero-Login Client Portal",
    icon: "🔗",
    benefit:
      "Share a unique magic link (/client/:token). Clients gain instant read-only visibility into progress, documents, and invoices with zero account friction.",
  },
  {
    title: "Transparent Progress Tracker",
    icon: "📊",
    benefit:
      "Break projects into clear milestones. As you mark work done, the client progress bar updates live, eliminating repetitive 'Where are we?' messages.",
  },
  {
    title: "1-Click Invoices & PDF Export",
    icon: "⚡",
    benefit:
      "Issue professional invoices directly from completed milestones. Clients can check payment status and download PDF invoices straight from their portal.",
  },
];

const demoTasks = [
  ["Discovery & Scope Confirmation", "Done", "1 August 2026"],
  ["Design Systems & Wireframes", "In Progress", "15 August 2026"],
  ["Backend & Client Portal Integration", "Not Started", "4 September 2026"],
];

const signals = [
  ["Project Progress", "64%"],
  ["Milestones", "2 of 3 Done"],
  ["Client Portal Link", "Active"],
];

const testimonials = [
  {
    quote:
      "EntroSync saved me 5+ hours every week on admin. My clients love opening one magic link instead of asking me for manual updates.",
    name: "Alex Rivera",
    role: "Full-Stack Freelancer",
  },
  {
    quote:
      "The AI Brief feature is magic. I paste a 100-line client WhatsApp thread, and EntroSync gives me a full PRD and milestones in seconds.",
    name: "Maya Chen",
    role: "Design Systems Consultant",
  },
  {
    quote:
      "Invoicing used to be a hassle. Now my clients view and download PDF invoices directly inside their token-scoped portal when milestones wrap up.",
    name: "Marcus Vance",
    role: "Agency Founder",
  },
];

const comparisons = [
  ["Scattered WhatsApp chats, Drive links & Notion docs", "Single unified workspace for freelancer & client"],
  ["Manual SOW & proposal creation from scratch", "AI-generated PRDs, scope of work & 1-click milestones"],
  ["Constant 'Where are we?' client status check-ins", "Real-time read-only progress bars & milestone tracking"],
  ["Separate Excel invoicing & PDF attachments", "Integrated 1-click invoicing with live payment status & PDF export"],
];

const faqs = [
  {
    question: "How do clients access their project portal?",
    answer:
      "Freelancers generate a unique magic link (e.g. /client/:token) for each project. Clients open the link directly on desktop or mobile without needing to register, log in, or remember a password.",
  },
  {
    question: "Is the client portal secure and read-only?",
    answer:
      "Yes! The client portal is strictly read-only by design. Clients can view project progress, milestones, tasks, documents, logs, and invoices, but cannot alter project data or access freelancer settings.",
  },
  {
    question: "How does the Smart AI Brief feature work?",
    answer:
      "Simply paste raw client chat history, emails, or call notes into EntroSync. The AI analyzes the text to generate a structured PRD, scope of work, and recommended milestones that you can adopt with one click.",
  },
  {
    question: "Can freelancers issue invoices and export PDFs?",
    answer:
      "Yes. You can generate professional invoices based on completed milestones or custom items, track status (Pending / Paid), and let clients view or download PDF invoices directly inside their portal.",
  },
  {
    question: "Can I manage multiple client projects at once?",
    answer:
      "Absolutely. Freelancers have a centralized dashboard to manage all projects, track pending payouts across clients, and issue magic links for each active account.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-base-300 bg-base-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="badge badge-outline mb-6 gap-2 border-primary/40 px-4 py-3 text-primary">
              EntroSync — Freelancer & Agency Client Portal
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              The all-in-one client portal for freelancers & agencies.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-base-content/70">
              Transform messy client chats into AI proposals, share zero-login magic links, track milestone progress in real time, and issue invoices in one calm workspace.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="btn btn-primary rounded-full px-7" href="#cta">
                Get EntroSync
              </a>
              <a className="btn btn-outline rounded-full px-7" href="#demo">
                View demo
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm">
              {[
                "✨ Smart AI Briefs",
                "🔗 0-Login Magic Links",
                "⚡ 1-Click Invoices",
              ].map((item) => (
                <div
                  className="rounded-lg border border-base-300 bg-base-100 p-3 font-medium text-base-content/80"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Dashboard Preview Card */}
          <div className="rounded-xl border border-base-300 bg-base-100 p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-base-300 pb-4">
              <div>
                <p className="text-sm font-semibold">Studio Ops Automation</p>
                <p className="text-xs text-base-content/60">
                  Client Portal: /client/47b5f060...
                </p>
              </div>
              <span className="badge badge-success badge-outline">
                In Progress
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {signals.map(([label, value]) => (
                <div className="rounded-lg bg-base-200 p-4" key={label}>
                  <p className="text-xs text-base-content/60">{label}</p>
                  <p className="mt-2 text-lg font-bold">{value}</p>
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
                  <span
                    className={`badge whitespace-nowrap ${
                      status === "Done"
                        ? "badge-success"
                        : status === "In Progress"
                          ? "badge-primary"
                          : "badge-neutral"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-semibold text-primary">Core Platform Features</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything freelancers need to manage client work with total clarity.
          </h2>
          <p className="mt-4 text-base-content/70">
            Eliminate communication friction, save hours on project administration, and give clients a transparent view of progress.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
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

      {/* Product Demo Section */}
      <section id="demo" className="border-y border-base-300 bg-base-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="font-semibold text-primary">Product Showcase</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              See work health before it becomes a meeting.
            </h2>
            <p className="mt-4 leading-7 text-base-content/70">
              Watch how EntroSync unifies client projects, milestones, client magic link access, and real-time invoicing in one seamless workspace.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Dashboard", "Client Portal", "Milestones", "Invoices"].map((tag) => (
                <span className="badge badge-lg" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-base-300 bg-base-200 shadow-2xl">
            <div className="flex items-center justify-between border-b border-base-300 bg-base-300/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-xs font-medium text-base-content/60">
                EntroSync — Product Demo Walkthrough
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
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="proof" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="font-semibold text-primary">Freelancer Approved</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built for high-trust client relationships.
            </h2>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["100%", "Read-Only Security"],
                ["1-Click", "Magic Invites"],
                ["10x", "Faster Proposals"],
              ].map(([stat, label]) => (
                <div className="rounded-lg bg-base-200 p-4" key={label}>
                  <p className="text-xl font-bold">{stat}</p>
                  <p className="mt-1 text-xs text-base-content/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                className="flex flex-col justify-between rounded-lg border border-base-300 p-5"
                key={testimonial.name}
              >
                <p className="text-sm leading-6 text-base-content/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-base-300/50 pt-3">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-base-content/60">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section id="why-us" className="border-y border-base-300 bg-base-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-semibold text-primary">Why EntroSync?</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Replace scattered client chaos with structured workspace clarity.
          </h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-sm">
            {comparisons.map(([before, after], index) => (
              <div
                className="grid gap-4 border-b border-base-300 p-5 last:border-b-0 md:grid-cols-2"
                key={`${before}-${after}`}
              >
                <div>
                  <p className="text-sm font-semibold text-red-400/80">
                    {index === 0 ? "Scattered Workflow" : "Before"}
                  </p>
                  <p className="mt-1 text-sm font-medium">{before}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {index === 0 ? "EntroSync Workspace" : "After"}
                  </p>
                  <p className="mt-1 text-sm font-medium">{after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-neutral p-6 text-neutral-content shadow-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="font-semibold text-neutral-content/80">
                Early Access
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Upgrade your client portal experience today.
              </h2>
              <p className="mt-4 leading-7 text-neutral-content/70">
                Join the EntroSync waitlist to streamline client briefs, milestone tracking, and invoicing in one workspace.
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
                placeholder="freelancer@agency.com"
                type="email"
              />
              <button className="btn btn-primary rounded-full" type="submit">
                Get EntroSync
              </button>
              <p className="text-xs text-neutral-content/60">
                Zero spam. Be first to access EntroSync.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-primary">Frequently Asked Questions</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything you need to know about EntroSync.
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
