import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { getContent } from "../lib/content";
import { legalContent } from "../lib/legalContent";

const pageContent = legalContent.id.privacy;
const landingContent = getContent("id");

export const metadata: Metadata = {
  title: `${pageContent.title} | EntroSync`,
  description: pageContent.description,
  alternates: {
    canonical: "/privacy",
    languages: {
      "id-ID": "/privacy",
      en: "/en/privacy",
    },
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      content={pageContent}
      footer={landingContent.footer}
      locale="id"
    />
  );
}
