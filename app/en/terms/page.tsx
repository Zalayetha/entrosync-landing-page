import type { Metadata } from "next";
import { LegalPage } from "../../components/LegalPage";
import { getContent } from "../../lib/content";
import { legalContent } from "../../lib/legalContent";

const pageContent = legalContent.en.terms;
const landingContent = getContent("en");

export const metadata: Metadata = {
  title: `${pageContent.title} | EntroSync`,
  description: pageContent.description,
  alternates: {
    canonical: "/en/terms",
    languages: {
      "id-ID": "/terms",
      en: "/en/terms",
    },
  },
};

export default function EnglishTermsPage() {
  return (
    <LegalPage
      content={pageContent}
      footer={landingContent.footer}
      locale="en"
    />
  );
}
