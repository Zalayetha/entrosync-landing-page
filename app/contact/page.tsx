import type { Metadata } from "next";
import { ContactPage } from "../components/ContactPage";
import { contactContent } from "../lib/contactContent";
import { getContent } from "../lib/content";

const pageContent = contactContent.id;
const landingContent = getContent("id");

export const metadata: Metadata = {
  title: `${pageContent.title} | EntroSync`,
  description: pageContent.description,
  alternates: {
    canonical: "/contact",
    languages: {
      "id-ID": "/contact",
      en: "/en/contact",
    },
  },
};

export default function ContactRoute() {
  return (
    <ContactPage
      content={pageContent}
      footer={landingContent.footer}
      locale="id"
    />
  );
}
