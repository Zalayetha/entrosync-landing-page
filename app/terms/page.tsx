import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";
import { getContent } from "../lib/content";
import { legalContent } from "../lib/legalContent";

const pageContent = legalContent.id.terms;
const landingContent = getContent("id");

export const metadata: Metadata = {
  title: `${pageContent.title} | EntroSync`,
  description: pageContent.description,
  alternates: {
    canonical: "/terms",
    languages: {
      "id-ID": "/terms",
      en: "/en/terms",
    },
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      content={pageContent}
      footer={landingContent.footer}
      locale="id"
    />
  );
}
