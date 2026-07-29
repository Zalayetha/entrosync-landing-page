import type { Metadata } from "next";
import { LandingPage } from "./components/LandingPage";
import { getContent } from "./lib/content";

const pageContent = getContent("id");

export const metadata: Metadata = {
  title: pageContent.metadata.title,
  description: pageContent.metadata.description,
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      en: "/en",
    },
  },
};

export default function Home() {
  return <LandingPage content={pageContent} locale="id" />;
}
