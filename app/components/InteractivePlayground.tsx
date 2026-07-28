"use client";

import { useState } from "react";

const samplePrompts = [
  {
    label: "E-Commerce Rebrand Chat",
    chatText: `Client: "Hey! We need a full rebrand for our online store. New logo, homepage redesign, product filter fix, and payment gateway integration. Target launch is Sept 1st. Budget around $4k."`,
    prd: {
      title: "E-Commerce Store Rebrand & Optimization",
      summary: "Comprehensive visual rebrand, UI/UX redesign of homepage, catalog filtering fix, and Stripe payment gateway setup.",
      milestones: [
        { name: "Brand Identity & Design System", tasks: 4, date: "10 Aug 2026", status: "Done" },
        { name: "Homepage UI & Product Filter Engine", tasks: 6, date: "22 Aug 2026", status: "In Progress" },
        { name: "Stripe Gateway & Final QA Launch", tasks: 3, date: "1 Sep 2026", status: "Not Started" },
      ],
    },
  },
  {
    label: "SaaS Mobile App Notes",
    chatText: `Client: "We need an iOS/Android MVP for our task tracker. Features: Google login, push notifications, offline mode, and subscription billing via RevenueCat. Need it in 6 weeks."`,
    prd: {
      title: "SaaS Task Tracker Mobile MVP",
      summary: "Cross-platform React Native MVP with OAuth authentication, offline storage sync, push alert system, and RevenueCat paywall.",
      milestones: [
        { name: "Auth & Core Offline Architecture", tasks: 5, date: "14 Aug 2026", status: "Done" },
        { name: "Push Notification System & UI", tasks: 4, date: "28 Aug 2026", status: "In Progress" },
        { name: "RevenueCat In-App Subscriptions", tasks: 3, date: "10 Sep 2026", status: "Not Started" },
      ],
    },
  },
];

export const InteractivePlayground = () => {
  const [activeTab, setActiveTab] = useState<"ai-brief" | "client-portal">("ai-brief");
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customText, setCustomText] = useState("");
  const [hasGeneratedCustom, setHasGeneratedCustom] = useState(false);

  const activePrompt = samplePrompts[selectedPromptIndex];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      if (customText.trim()) {
        setHasGeneratedCustom(true);
      }
    }, 600);
  };

  return (
    <section id="playground" className="border-b border-base-300 bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="badge badge-primary badge-outline mb-4 px-4 py-3">
            Interactive Playground
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Test the EntroSync workflow live.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
            See how AI transforms raw client chats into structured milestones, or preview what clients see when accessing their zero-login magic portal.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-base-300 bg-base-200 p-1.5 shadow-sm">
            <button
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                activeTab === "ai-brief"
                  ? "bg-primary text-primary-content shadow"
                  : "text-base-content/70 hover:text-base-content"
              }`}
              onClick={() => setActiveTab("ai-brief")}
              type="button"
            >
              <span>✨</span>
              <span>1. Smart AI Brief Generator</span>
            </button>
            <button
              className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                activeTab === "client-portal"
                  ? "bg-primary text-primary-content shadow"
                  : "text-base-content/70 hover:text-base-content"
              }`}
              onClick={() => setActiveTab("client-portal")}
              type="button"
            >
              <span>🔗</span>
              <span>2. Client Magic Portal (/client/:token)</span>
            </button>
          </div>
        </div>

        {/* Tab 1 Content: Smart AI Brief Simulator */}
        {activeTab === "ai-brief" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Input Side */}
            <div className="flex flex-col justify-between rounded-xl border border-base-300 bg-base-100 p-6 shadow-md">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
                    Raw Client Chat / Email Input
                  </span>
                  <div className="flex gap-2">
                    {samplePrompts.map((p, idx) => (
                      <button
                        key={p.label}
                        className={`btn btn-xs rounded-full ${
                          selectedPromptIndex === idx && !hasGeneratedCustom
                            ? "btn-primary"
                            : "btn-ghost"
                        }`}
                        onClick={() => {
                          setSelectedPromptIndex(idx);
                          setHasGeneratedCustom(false);
                          setCustomText("");
                        }}
                        type="button"
                      >
                        Sample {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  className="textarea textarea-bordered h-44 w-full bg-base-200 font-mono text-sm leading-relaxed text-base-content focus:outline-none"
                  value={customText || activePrompt.chatText}
                  onChange={(e) => {
                    setCustomText(e.target.value);
                    setHasGeneratedCustom(false);
                  }}
                  placeholder="Paste WhatsApp chat history, email notes, or call transcripts here..."
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-base-content/60">
                  {customText ? "Custom brief ready" : `Using sample: ${activePrompt.label}`}
                </span>
                <button
                  className="btn btn-primary rounded-full px-6"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  type="button"
                >
                  {isGenerating ? (
                    <span className="flex items-center gap-2">
                      <span className="loading loading-spinner loading-xs" />
                      Parsing with AI...
                    </span>
                  ) : (
                    "✨ Generate AI SOW & Milestones"
                  )}
                </button>
              </div>
            </div>

            {/* Output Side */}
            <div className="rounded-xl border border-base-300 bg-base-200 p-6 shadow-md">
              <div className="mb-4 flex items-center justify-between border-b border-base-300 pb-3">
                <div className="flex items-center gap-2">
                  <span className="badge badge-success badge-xs" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-base-content/70">
                    Generated PRD & Scope of Work
                  </span>
                </div>
                <span className="badge badge-outline text-xs">1-Click Adoption Ready</span>
              </div>

              {isGenerating ? (
                <div className="flex h-64 flex-col items-center justify-center space-y-3">
                  <span className="loading loading-dots loading-lg text-primary" />
                  <p className="text-sm text-base-content/60">Analyzing text structure & extracting milestones...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-primary">
                      {hasGeneratedCustom ? "Custom Client Project Scope" : activePrompt.prd.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-base-content/70">
                      {hasGeneratedCustom
                        ? "Extracted requirement specifications, deliverables, and estimated milestone timeline from provided text."
                        : activePrompt.prd.summary}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-xs font-semibold text-base-content/60">Extracted Milestones:</p>
                    {activePrompt.prd.milestones.map((m) => (
                      <div
                        key={m.name}
                        className="flex items-center justify-between rounded-lg border border-base-300 bg-base-100 p-3 text-sm"
                      >
                        <div>
                          <p className="font-medium text-base-content">{m.name}</p>
                          <p className="text-xs text-base-content/60">
                            {m.tasks} tasks &bull; Target: {m.date}
                          </p>
                        </div>
                        <span
                          className={`badge badge-sm ${
                            m.status === "Done"
                              ? "badge-success"
                              : m.status === "In Progress"
                                ? "badge-primary"
                                : "badge-neutral"
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      className="btn btn-outline btn-sm rounded-full"
                      onClick={() => setActiveTab("client-portal")}
                      type="button"
                    >
                      🔗 Preview Client Magic Portal &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2 Content: Client Magic Link Portal Simulator */}
        {activeTab === "client-portal" && (
          <div className="mt-10 rounded-xl border border-base-300 bg-base-200 p-6 shadow-xl">
            {/* Header bar simulating browser */}
            <div className="mb-6 flex flex-col gap-3 border-b border-base-300 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="badge badge-success gap-1.5 px-3 py-2 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  Read-Only Client Portal
                </span>
                <span className="font-mono text-xs text-base-content/60">
                  entrosync.com/client/47b5f060-6448-4ab4-b5c5-e102ccb56239
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-base-content/60">No account required &bull; Token scope active</span>
              </div>
            </div>

            {/* Simulated Client Dashboard View */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left Column: Progress & Project Info */}
              <div className="space-y-4 rounded-xl border border-base-300 bg-base-100 p-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                    Project Status
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-primary">Studio Ops Automation</h3>
                  <p className="mt-1 text-xs text-base-content/70">
                    Managed by Freelancer &bull; Real-time client visibility
                  </p>
                </div>

                <div className="rounded-lg bg-base-200 p-4 text-center">
                  <p className="text-xs text-base-content/60">Overall Completion</p>
                  <p className="mt-1 text-3xl font-extrabold text-primary">64%</p>
                  <progress className="progress progress-primary mt-3 w-full" value={64} max={100} />
                </div>

                <div className="space-y-2 text-xs text-base-content/70">
                  <div className="flex justify-between border-b border-base-300/60 py-1.5">
                    <span>Deadline:</span>
                    <span className="font-semibold">4 September 2026</span>
                  </div>
                  <div className="flex justify-between border-b border-base-300/60 py-1.5">
                    <span>Client Access:</span>
                    <span className="font-semibold text-success">Magic Link Verified</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Mutations:</span>
                    <span className="font-semibold text-base-content/60">Disabled (Read-Only)</span>
                  </div>
                </div>
              </div>

              {/* Middle Column: Active Milestones */}
              <div className="space-y-3 rounded-xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center justify-between border-b border-base-300 pb-2">
                  <h4 className="font-bold">Active Milestones</h4>
                  <span className="text-xs text-base-content/60">2 of 3 Completed</span>
                </div>

                <div className="space-y-2.5">
                  <div className="rounded-lg bg-base-200 p-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-base-content">1. Intake & Requirements</span>
                      <span className="badge badge-success badge-xs">Done</span>
                    </div>
                    <p className="mt-1 text-xs text-base-content/60">PRD validated & milestones generated</p>
                  </div>

                  <div className="rounded-lg bg-base-200 p-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-base-content">2. Client Portal & Invoicing</span>
                      <span className="badge badge-primary badge-xs">In Progress</span>
                    </div>
                    <p className="mt-1 text-xs text-base-content/60">Token security & PDF download test</p>
                  </div>

                  <div className="rounded-lg bg-base-200 p-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-base-content">3. Final Review & Hand-Off</span>
                      <span className="badge badge-neutral badge-xs">Upcoming</span>
                    </div>
                    <p className="mt-1 text-xs text-base-content/60">Final sign-off and deployment</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Billing & Invoices */}
              <div className="space-y-3 rounded-xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center justify-between border-b border-base-300 pb-2">
                  <h4 className="font-bold">Project Invoices</h4>
                  <span className="text-xs text-base-content/60">PDF Ready</span>
                </div>

                <div className="rounded-lg border border-base-300 bg-base-200 p-3 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span>INV-9C5E396A</span>
                    <span className="badge badge-warning badge-sm">PENDING</span>
                  </div>
                  <p className="mt-2 text-base font-bold text-primary">Rp 1.200.000</p>
                  <p className="mt-0.5 text-xs text-base-content/60">Due: 2 Aug 2026</p>
                  <div className="mt-3 flex items-center justify-between border-t border-base-300/60 pt-2">
                    <span className="text-xs text-base-content/70">Payment Link Active</span>
                    <button className="btn btn-outline btn-xs rounded-full" type="button">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
