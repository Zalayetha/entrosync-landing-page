import type { Locale } from "./content";
import { CONTACT_EMAIL, TYPEFORM_URL } from "./links";

type ContactCard = {
  title: string;
  description: string;
  actionLabel: string;
  href: string;
  external?: boolean;
};

export type ContactPageContent = {
  title: string;
  description: string;
  responseTime: string;
  homeLabel: string;
  cards: ContactCard[];
};

const mailtoHref = `mailto:${CONTACT_EMAIL}`;

export const contactContent: Record<Locale, ContactPageContent> = {
  id: {
    title: "Kontak & Dukungan",
    description:
      "Punya pertanyaan tentang EntroSync, early access, atau data Anda? Hubungi kami lewat email.",
    responseTime: "Biasanya kami membalas dalam 1-2 hari kerja.",
    homeLabel: "Kembali ke beranda",
    cards: [
      {
        title: "Email dukungan",
        description:
          "Untuk pertanyaan umum, bantuan early access, atau komunikasi produk.",
        actionLabel: CONTACT_EMAIL,
        href: mailtoHref,
      },
      {
        title: "Early access",
        description:
          "Ingin mencoba EntroSync saat akses awal dibuka? Isi form Typeform.",
        actionLabel: "Daftar early access",
        href: TYPEFORM_URL,
        external: true,
      },
      {
        title: "Privasi & data",
        description:
          "Untuk permintaan akses, koreksi, atau penghapusan data waitlist Anda.",
        actionLabel: "Hubungi via email",
        href: mailtoHref,
      },
    ],
  },
  en: {
    title: "Contact & Support",
    description:
      "Questions about EntroSync, early access, or your data? Reach us by email.",
    responseTime: "We usually reply within 1-2 business days.",
    homeLabel: "Back to home",
    cards: [
      {
        title: "Support email",
        description:
          "For general questions, early access help, or product communication.",
        actionLabel: CONTACT_EMAIL,
        href: mailtoHref,
      },
      {
        title: "Early access",
        description:
          "Want to try EntroSync when early access opens? Submit the Typeform.",
        actionLabel: "Join early access",
        href: TYPEFORM_URL,
        external: true,
      },
      {
        title: "Privacy & data",
        description:
          "For requests to access, correct, or delete your waitlist data.",
        actionLabel: "Contact by email",
        href: mailtoHref,
      },
    ],
  },
};
