import type { Metadata } from "next";
import { LandingPage } from "../components/LandingPage";
import { getContent } from "../lib/content";

const pageContent = getContent("en");

export const metadata: Metadata = {
  title: pageContent.metadata.title,
  description: pageContent.metadata.description,
  alternates: {
    canonical: "/en",
    languages: {
      "id-ID": "/",
      en: "/en",
    },
  },
};

export default function EnglishHome() {
  return <LandingPage content={pageContent} locale="en" />;
}
