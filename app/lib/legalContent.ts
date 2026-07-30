import type { Locale } from "./content";
import { CONTACT_EMAIL } from "./links";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  lastUpdated: string;
  homeLabel: string;
  disclaimer: string;
  sections: LegalSection[];
};

export type LegalContent = {
  privacy: LegalPageContent;
  terms: LegalPageContent;
};

const lastUpdated = "July 30, 2026";

export const legalContent: Record<Locale, LegalContent> = {
  id: {
    privacy: {
      title: "Kebijakan Privasi",
      description:
        "Cara EntroSync mengumpulkan, menggunakan, dan melindungi data waitlist early access.",
      lastUpdated,
      homeLabel: "Kembali ke beranda",
      disclaimer:
        "Dokumen ini adalah kebijakan awal untuk produk pre-launch dan harus ditinjau ulang sebelum peluncuran berbayar.",
      sections: [
        {
          title: "Data yang kami kumpulkan",
          paragraphs: [
            "Saat Anda mengisi form early access EntroSync melalui Typeform, kami dapat mengumpulkan nama, alamat email, nama perusahaan atau proyek, use case, dan jawaban bebas yang Anda berikan.",
            "Kami belum menyediakan akun berbayar, pembayaran, atau dashboard produksi. Kebijakan ini hanya mencakup website dan waitlist early access.",
          ],
        },
        {
          title: "Cara kami menggunakan data",
          paragraphs: [
            "Kami menggunakan data untuk mengelola early access, memahami kebutuhan calon pengguna, menghubungi Anda tentang onboarding, dan mengirim pembaruan produk yang relevan.",
            "Kami tidak menjual data pribadi Anda.",
          ],
        },
        {
          title: "Layanan pihak ketiga",
          paragraphs: [
            "EntroSync menggunakan Typeform sebagai penyedia form pihak ketiga. Data yang Anda kirim melalui Typeform diproses oleh Typeform sesuai kebijakan dan dokumentasi mereka.",
            "Jika kami menambahkan hosting, email, analitik, atau alat operasional lain, alat tersebut hanya akan digunakan untuk menjalankan website, mengelola waitlist, dan mendukung komunikasi produk.",
          ],
        },
        {
          title: "Keamanan dan penyimpanan",
          paragraphs: [
            "Kami menggunakan langkah pengamanan yang wajar untuk membatasi akses dan melindungi data waitlist. Tidak ada sistem internet yang sepenuhnya bebas risiko.",
            "Karena Typeform dan penyedia infrastruktur dapat memproses data di luar negara Anda, data dapat ditransfer dan disimpan secara internasional.",
          ],
        },
        {
          title: "Permintaan data",
          paragraphs: [
            `Untuk meminta akses, koreksi, atau penghapusan data waitlist Anda, hubungi ${CONTACT_EMAIL}.`,
          ],
        },
      ],
    },
    terms: {
      title: "Ketentuan Layanan",
      description:
        "Ketentuan ringan untuk penggunaan website dan waitlist early access EntroSync.",
      lastUpdated,
      homeLabel: "Kembali ke beranda",
      disclaimer:
        "Dokumen ini adalah ketentuan awal untuk produk pre-launch dan bukan pengganti tinjauan hukum profesional.",
      sections: [
        {
          title: "Status produk",
          paragraphs: [
            "EntroSync saat ini berada pada tahap pre-launch dan early access. Informasi, demo, dan fitur yang ditampilkan di website dapat berubah.",
            "Mengisi form early access tidak menjamin Anda akan mendapat akses, timeline tertentu, atau fitur tertentu.",
          ],
        },
        {
          title: "Penggunaan website",
          paragraphs: [
            "Anda setuju untuk menggunakan website dan form EntroSync secara wajar, tidak mengirim spam, konten berbahaya, atau data yang Anda tidak berhak bagikan.",
            "Anda bertanggung jawab atas informasi yang Anda kirim melalui form early access.",
          ],
        },
        {
          title: "Tidak ada layanan berbayar",
          paragraphs: [
            "EntroSync belum menawarkan layanan berbayar melalui website ini. Ketentuan terkait akun, pembayaran, refund, SLA, dan dukungan produksi akan ditambahkan sebelum peluncuran berbayar.",
          ],
        },
        {
          title: "Tanpa jaminan",
          paragraphs: [
            "Website, demo, dan materi early access disediakan apa adanya. Kami tidak menjamin website selalu tersedia, bebas error, atau cocok untuk kebutuhan tertentu.",
          ],
        },
        {
          title: "Perubahan dan kontak",
          paragraphs: [
            `Kami dapat memperbarui ketentuan ini dari waktu ke waktu. Untuk pertanyaan, hubungi ${CONTACT_EMAIL}.`,
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy Policy",
      description:
        "How EntroSync collects, uses, and protects early access waitlist data.",
      lastUpdated,
      homeLabel: "Back to home",
      disclaimer:
        "This is a pre-launch policy and should be reviewed before any paid product launch.",
      sections: [
        {
          title: "Data we collect",
          paragraphs: [
            "When you submit EntroSync early access details through Typeform, we may collect your name, email address, company or project details, use case, and free-text answers you choose to provide.",
            "We do not currently provide paid accounts, payments, or a production dashboard. This policy only covers the website and early access waitlist.",
          ],
        },
        {
          title: "How we use data",
          paragraphs: [
            "We use data to manage early access, understand potential user needs, contact you about onboarding, and send relevant product updates.",
            "We do not sell your personal data.",
          ],
        },
        {
          title: "Third-party services",
          paragraphs: [
            "EntroSync uses Typeform as a third-party form provider. Data submitted through Typeform is processed by Typeform under its own policies and documentation.",
            "If we add hosting, email, analytics, or operational tools later, those tools will only be used to run the website, manage the waitlist, and support product communication.",
          ],
        },
        {
          title: "Security and storage",
          paragraphs: [
            "We use reasonable safeguards to limit access and protect waitlist data. No internet system is completely risk-free.",
            "Because Typeform and infrastructure providers may process data outside your country, data may be transferred and stored internationally.",
          ],
        },
        {
          title: "Data requests",
          paragraphs: [
            `To request access, correction, or deletion of your waitlist data, contact ${CONTACT_EMAIL}.`,
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      description:
        "Lightweight terms for using the EntroSync website and early access waitlist.",
      lastUpdated,
      homeLabel: "Back to home",
      disclaimer:
        "These are pre-launch terms and are not a substitute for professional legal review.",
      sections: [
        {
          title: "Product status",
          paragraphs: [
            "EntroSync is currently pre-launch and in early access. Website information, demos, and displayed features may change.",
            "Submitting the early access form does not guarantee access, a specific timeline, or any specific feature.",
          ],
        },
        {
          title: "Website use",
          paragraphs: [
            "You agree to use the EntroSync website and form reasonably, without submitting spam, harmful content, or data you do not have permission to share.",
            "You are responsible for information you submit through the early access form.",
          ],
        },
        {
          title: "No paid service yet",
          paragraphs: [
            "EntroSync does not currently offer paid services through this website. Account, payment, refund, SLA, and production support terms will be added before any paid launch.",
          ],
        },
        {
          title: "No warranty",
          paragraphs: [
            "The website, demos, and early access materials are provided as-is. We do not guarantee that the website will always be available, error-free, or fit for a particular purpose.",
          ],
        },
        {
          title: "Changes and contact",
          paragraphs: [
            `We may update these terms from time to time. For questions, contact ${CONTACT_EMAIL}.`,
          ],
        },
      ],
    },
  },
};
