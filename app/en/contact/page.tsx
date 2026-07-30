import type { Metadata } from "next";
import { ContactPage } from "../../components/ContactPage";
import { contactContent } from "../../lib/contactContent";
import { getContent } from "../../lib/content";

const pageContent = contactContent.en;
const landingContent = getContent("en");

export const metadata: Metadata = {
  title: `${pageContent.title} | EntroSync`,
  description: pageContent.description,
  alternates: {
    canonical: "/en/contact",
    languages: {
      "id-ID": "/contact",
      en: "/en/contact",
    },
  },
};

export default function EnglishContactRoute() {
  return (
    <ContactPage
      content={pageContent}
      footer={landingContent.footer}
      locale="en"
    />
  );
}
