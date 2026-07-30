import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";
import { getContent } from "../../lib/content";
import { legalContent } from "../../lib/legalContent";

const pageContent = legalContent.en.privacy;
const landingContent = getContent("en");

export const metadata: Metadata = {
  title: `${pageContent.title} | EntroSync`,
  description: pageContent.description,
  alternates: {
    canonical: "/en/privacy",
    languages: {
      "id-ID": "/privacy",
      en: "/en/privacy",
    },
  },
};

export default function EnglishPrivacyPage() {
  return (
    <LegalPage
      content={pageContent}
      footer={landingContent.footer}
      locale="en"
    />
  );
}
