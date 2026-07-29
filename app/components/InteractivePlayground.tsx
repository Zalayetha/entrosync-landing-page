"use client";

import { useState } from "react";
import type { LandingContent, StatusType } from "../lib/content";

type InteractivePlaygroundProps = {
  content: LandingContent["playground"];
};

const statusBadgeClass: Record<StatusType, string> = {
  done: "badge-success",
  progress: "badge-primary",
  todo: "badge-neutral",
  upcoming: "badge-neutral",
  pending: "badge-warning",
};

export const InteractivePlayground = ({ content }: InteractivePlaygroundProps) => {
  const [activeTab, setActiveTab] = useState<"ai-brief" | "client-portal">("ai-brief");
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customText, setCustomText] = useState("");
  const [hasGeneratedCustom, setHasGeneratedCustom] = useState(false);

  const activePrompt = content.prompts[selectedPromptIndex];

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
            {content.badge}
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
            {content.description}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex max-w-full flex-col gap-1.5 rounded-3xl border border-base-300 bg-base-200 p-1.5 shadow-sm sm:flex-row sm:rounded-full">
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
              <span>{content.tabs.aiBrief}</span>
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
              <span>{content.tabs.clientPortal}</span>
            </button>
          </div>
        </div>

        {activeTab === "ai-brief" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-xl border border-base-300 bg-base-100 p-6 shadow-md">
              <div>
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-base-content/60">
                    {content.inputLabel}
                  </span>
                  <div className="flex gap-2">
                    {content.prompts.map((prompt, index) => (
                      <button
                        key={prompt.label}
                        className={`btn btn-xs rounded-full ${
                          selectedPromptIndex === index && !hasGeneratedCustom
                            ? "btn-primary"
                            : "btn-ghost"
                        }`}
                        onClick={() => {
                          setSelectedPromptIndex(index);
                          setHasGeneratedCustom(false);
                          setCustomText("");
                        }}
                        type="button"
                      >
                        {content.sampleLabel} {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  className="textarea textarea-bordered h-44 w-full bg-base-200 font-mono text-sm leading-relaxed text-base-content focus:outline-none"
                  value={customText || activePrompt.chatText}
                  onChange={(event) => {
                    setCustomText(event.target.value);
                    setHasGeneratedCustom(false);
                  }}
                  placeholder={content.textareaPlaceholder}
                />
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs text-base-content/60">
                  {customText
                    ? content.customReady
                    : `${content.usingSamplePrefix} ${activePrompt.label}`}
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
                      {content.generating}
                    </span>
                  ) : (
                    content.generate
                  )}
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-base-300 bg-base-200 p-6 shadow-md">
              <div className="mb-4 flex flex-col gap-2 border-b border-base-300 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span className="badge badge-success badge-xs" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-base-content/70">
                    {content.outputLabel}
                  </span>
                </div>
                <span className="badge badge-outline text-xs">{content.adoptionReady}</span>
              </div>

              {isGenerating ? (
                <div className="flex h-64 flex-col items-center justify-center space-y-3">
                  <span className="loading loading-dots loading-lg text-primary" />
                  <p className="text-sm text-base-content/60">{content.analyzing}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-primary">
                      {hasGeneratedCustom ? content.customTitle : activePrompt.prd.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-base-content/70">
                      {hasGeneratedCustom
                        ? content.customSummary
                        : activePrompt.prd.summary}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-xs font-semibold text-base-content/60">
                      {content.milestonesLabel}
                    </p>
                    {activePrompt.prd.milestones.map((milestone) => (
                      <div
                        key={milestone.name}
                        className="flex flex-col gap-2 rounded-lg border border-base-300 bg-base-100 p-3 text-sm sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <p className="font-medium text-base-content">{milestone.name}</p>
                          <p className="text-xs text-base-content/60">
                            {milestone.tasks} {content.taskUnit} &bull; {content.targetLabel} {milestone.date}
                          </p>
                        </div>
                        <span className={`badge badge-sm ${statusBadgeClass[milestone.statusType]}`}>
                          {milestone.status}
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
                      {content.previewPortal}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "client-portal" && (
          <div className="mt-10 rounded-xl border border-base-300 bg-base-200 p-6 shadow-xl">
            <div className="mb-6 flex flex-col gap-3 border-b border-base-300 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="badge badge-success gap-1.5 px-3 py-2 text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  {content.portal.badge}
                </span>
                <span className="break-all font-mono text-xs text-base-content/60">
                  {content.portal.url}
                </span>
              </div>
              <span
                className="text-xs text-base-content/60"
                dangerouslySetInnerHTML={{ __html: content.portal.note }}
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-4 rounded-xl border border-base-300 bg-base-100 p-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                    {content.portal.projectStatus}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-primary">
                    {content.portal.projectName}
                  </h3>
                  <p
                    className="mt-1 text-xs text-base-content/70"
                    dangerouslySetInnerHTML={{ __html: content.portal.managedBy }}
                  />
                </div>

                <div className="rounded-lg bg-base-200 p-4 text-center">
                  <p className="text-xs text-base-content/60">
                    {content.portal.completionLabel}
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-primary">64%</p>
                  <progress className="progress progress-primary mt-3 w-full" value={64} max={100} />
                </div>

                <div className="space-y-2 text-xs text-base-content/70">
                  <div className="flex justify-between gap-3 border-b border-base-300/60 py-1.5">
                    <span>{content.portal.deadline}</span>
                    <span className="text-right font-semibold">4 September 2026</span>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-base-300/60 py-1.5">
                    <span>{content.portal.clientAccess}</span>
                    <span className="text-right font-semibold text-success">
                      {content.portal.clientAccessValue}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3 py-1.5">
                    <span>{content.portal.mutations}</span>
                    <span className="text-right font-semibold text-base-content/60">
                      {content.portal.mutationsValue}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 rounded-xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center justify-between gap-3 border-b border-base-300 pb-2">
                  <h4 className="font-bold">{content.portal.activeMilestones}</h4>
                  <span className="text-xs text-base-content/60">{content.portal.completedCount}</span>
                </div>

                <div className="space-y-2.5">
                  {content.portal.milestones.map((milestone) => (
                    <div className="rounded-lg bg-base-200 p-3" key={milestone.name}>
                      <div className="flex items-center justify-between gap-3 text-xs">
                        <span className="font-semibold text-base-content">{milestone.name}</span>
                        <span className={`badge badge-xs ${statusBadgeClass[milestone.statusType]}`}>
                          {milestone.status}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-base-content/60">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 rounded-xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center justify-between border-b border-base-300 pb-2">
                  <h4 className="font-bold">{content.portal.invoicesTitle}</h4>
                  <span className="text-xs text-base-content/60">{content.portal.invoicesReady}</span>
                </div>

                <div className="rounded-lg border border-base-300 bg-base-200 p-3 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span>{content.portal.invoiceId}</span>
                    <span className="badge badge-warning badge-sm">
                      {content.portal.invoiceStatus}
                    </span>
                  </div>
                  <p className="mt-2 text-base font-bold text-primary">
                    {content.portal.invoiceAmount}
                  </p>
                  <p className="mt-0.5 text-xs text-base-content/60">
                    {content.portal.invoiceDue}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3 border-t border-base-300/60 pt-2">
                    <span className="text-xs text-base-content/70">
                      {content.portal.paymentLink}
                    </span>
                    <button className="btn btn-outline btn-xs rounded-full" type="button">
                      {content.portal.downloadPdf}
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
