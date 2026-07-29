export type Locale = "id" | "en";

export type StatusType = "done" | "progress" | "todo" | "upcoming" | "pending";

type Milestone = {
  name: string;
  tasks?: number;
  date?: string;
  status: string;
  statusType: StatusType;
  description?: string;
};

type PlaygroundPrompt = {
  label: string;
  chatText: string;
  prd: {
    title: string;
    summary: string;
    milestones: Milestone[];
  };
};

export type LandingContent = {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    items: { label: string; href: string }[];
    ariaMenu: string;
    ariaHome: string;
    viewDemo: string;
    cta: string;
    language: {
      id: string;
      en: string;
      aria: string;
    };
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
    dashboardTitle: string;
    dashboardSubtitle: string;
    dashboardStatus: string;
    signals: { label: string; value: string }[];
    tasks: { task: string; status: string; date: string; statusType: StatusType }[];
  };
  playground: {
    badge: string;
    title: string;
    description: string;
    tabs: {
      aiBrief: string;
      clientPortal: string;
    };
    inputLabel: string;
    sampleLabel: string;
    textareaPlaceholder: string;
    customReady: string;
    usingSamplePrefix: string;
    generate: string;
    generating: string;
    outputLabel: string;
    adoptionReady: string;
    analyzing: string;
    customTitle: string;
    customSummary: string;
    milestonesLabel: string;
    taskUnit: string;
    targetLabel: string;
    previewPortal: string;
    portal: {
      badge: string;
      url: string;
      note: string;
      projectStatus: string;
      projectName: string;
      managedBy: string;
      completionLabel: string;
      deadline: string;
      clientAccess: string;
      clientAccessValue: string;
      mutations: string;
      mutationsValue: string;
      activeMilestones: string;
      completedCount: string;
      invoicesTitle: string;
      invoicesReady: string;
      invoiceId: string;
      invoiceStatus: string;
      invoiceAmount: string;
      invoiceDue: string;
      paymentLink: string;
      downloadPdf: string;
      milestones: Milestone[];
    };
    prompts: PlaygroundPrompt[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; icon: string; benefit: string }[];
  };
  demo: {
    eyebrow: string;
    title: string;
    description: string;
    tags: string[];
    videoTitle: string;
    unsupported: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    metrics: { stat: string; label: string }[];
    testimonials: { quote: string; name: string; role: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    beforeLabel: string;
    afterLabel: string;
    firstBeforeLabel: string;
    firstAfterLabel: string;
    comparisons: { before: string; after: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    placeholder: string;
    button: string;
    note: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  footer: {
    ariaHome: string;
    description: string;
    productTitle: string;
    productLinks: { label: string; href: string }[];
    navigationTitle: string;
    navigationLinks: { label: string; href: string }[];
    securityTitle: string;
    securityHeading: string;
    securityDescription: string;
    copyright: string;
    legalLinks: { label: string; href: string }[];
  };
};

export const content: Record<Locale, LandingContent> = {
  id: {
    metadata: {
      title: "EntroSync | Portal Klien untuk Freelancer dan Agensi",
      description:
        "EntroSync membantu freelancer dan agensi mengubah chat klien menjadi brief AI, milestone, portal klien tanpa login, dan invoice dalam satu workspace.",
    },
    nav: {
      items: [
        { label: "Solusi", href: "#solutions" },
        { label: "Playground", href: "#playground" },
        { label: "Demo", href: "#demo" },
        { label: "Bukti", href: "#proof" },
        { label: "FAQ", href: "#faq" },
      ],
      ariaMenu: "Buka menu navigasi",
      ariaHome: "Beranda EntroSync",
      viewDemo: "Lihat demo",
      cta: "Coba EntroSync",
      language: {
        id: "ID",
        en: "EN",
        aria: "Ganti bahasa",
      },
    },
    hero: {
      badge: "EntroSync - Portal Klien untuk Freelancer dan Agensi",
      title: "Portal klien all-in-one untuk freelancer dan agensi.",
      description:
        "Ubah chat klien yang berantakan menjadi proposal AI, bagikan magic link tanpa login, pantau milestone secara real time, dan buat invoice dalam satu workspace yang rapi.",
      primaryCta: "Coba EntroSync",
      secondaryCta: "Lihat demo",
      highlights: [
        "✨ Brief AI Otomatis",
        "🔗 Magic Link Tanpa Login",
        "⚡ Invoice Sekali Klik",
      ],
      dashboardTitle: "Studio Ops Automation",
      dashboardSubtitle: "Portal Klien: /client/47b5f060...",
      dashboardStatus: "Berjalan",
      signals: [
        { label: "Progress Proyek", value: "64%" },
        { label: "Milestone", value: "2 dari 3 Selesai" },
        { label: "Link Portal Klien", value: "Aktif" },
      ],
      tasks: [
        {
          task: "Discovery & Konfirmasi Scope",
          status: "Selesai",
          date: "1 Agustus 2026",
          statusType: "done",
        },
        {
          task: "Design System & Wireframe",
          status: "Berjalan",
          date: "15 Agustus 2026",
          statusType: "progress",
        },
        {
          task: "Integrasi Backend & Portal Klien",
          status: "Belum Mulai",
          date: "4 September 2026",
          statusType: "todo",
        },
      ],
    },
    playground: {
      badge: "Interactive Playground",
      title: "Coba alur kerja EntroSync secara langsung.",
      description:
        "Lihat bagaimana AI mengubah chat klien mentah menjadi milestone terstruktur, atau pratinjau portal yang dilihat klien lewat magic link tanpa login.",
      tabs: {
        aiBrief: "1. Smart AI Brief Generator",
        clientPortal: "2. Portal Magic Link Klien (/client/:token)",
      },
      inputLabel: "Input Chat / Email Klien Mentah",
      sampleLabel: "Contoh",
      textareaPlaceholder:
        "Tempel riwayat WhatsApp, catatan email, atau transkrip call di sini...",
      customReady: "Brief kustom siap",
      usingSamplePrefix: "Memakai contoh:",
      generate: "✨ Buat SOW & Milestone AI",
      generating: "Memproses dengan AI...",
      outputLabel: "PRD & Scope of Work Hasil AI",
      adoptionReady: "Siap Diadopsi Sekali Klik",
      analyzing: "Menganalisis struktur teks & mengekstrak milestone...",
      customTitle: "Scope Proyek Klien Kustom",
      customSummary:
        "Spesifikasi kebutuhan, deliverable, dan estimasi timeline milestone diekstrak dari teks yang diberikan.",
      milestonesLabel: "Milestone Terdeteksi:",
      taskUnit: "tugas",
      targetLabel: "Target:",
      previewPortal: "🔗 Pratinjau Portal Magic Link Klien",
      portal: {
        badge: "Portal Klien Read-Only",
        url: "entrosync.id/client/47b5f060-6448-4ab4-b5c5-e102ccb56239",
        note: "Tanpa akun diperlukan &bull; Token scope aktif",
        projectStatus: "Status Proyek",
        projectName: "Studio Ops Automation",
        managedBy: "Dikelola Freelancer &bull; Klien melihat progress real time",
        completionLabel: "Progress Keseluruhan",
        deadline: "Deadline:",
        clientAccess: "Akses Klien:",
        clientAccessValue: "Magic Link Terverifikasi",
        mutations: "Perubahan Data:",
        mutationsValue: "Nonaktif (Read-Only)",
        activeMilestones: "Milestone Aktif",
        completedCount: "2 dari 3 Selesai",
        invoicesTitle: "Invoice Proyek",
        invoicesReady: "PDF Siap",
        invoiceId: "INV-9C5E396A",
        invoiceStatus: "PENDING",
        invoiceAmount: "Rp 1.200.000",
        invoiceDue: "Jatuh tempo: 2 Agu 2026",
        paymentLink: "Payment Link Aktif",
        downloadPdf: "Unduh PDF",
        milestones: [
          {
            name: "1. Intake & Kebutuhan",
            description: "PRD divalidasi & milestone dibuat",
            status: "Selesai",
            statusType: "done",
          },
          {
            name: "2. Portal Klien & Invoice",
            description: "Uji keamanan token & unduhan PDF",
            status: "Berjalan",
            statusType: "progress",
          },
          {
            name: "3. Review Final & Handoff",
            description: "Final sign-off dan deployment",
            status: "Berikutnya",
            statusType: "upcoming",
          },
        ],
      },
      prompts: [
        {
          label: "Chat Rebrand E-Commerce",
          chatText:
            'Klien: "Halo! Kami butuh rebrand penuh untuk toko online. Logo baru, redesign homepage, perbaikan filter produk, dan integrasi payment gateway. Target launch 1 September. Budget sekitar Rp 60 juta."',
          prd: {
            title: "Rebrand & Optimasi Toko E-Commerce",
            summary:
              "Rebrand visual, redesign UI/UX homepage, perbaikan filter katalog, dan setup payment gateway.",
            milestones: [
              {
                name: "Brand Identity & Design System",
                tasks: 4,
                date: "10 Agu 2026",
                status: "Selesai",
                statusType: "done",
              },
              {
                name: "UI Homepage & Filter Produk",
                tasks: 6,
                date: "22 Agu 2026",
                status: "Berjalan",
                statusType: "progress",
              },
              {
                name: "Payment Gateway & QA Launch",
                tasks: 3,
                date: "1 Sep 2026",
                status: "Belum Mulai",
                statusType: "todo",
              },
            ],
          },
        },
        {
          label: "Catatan Aplikasi Mobile SaaS",
          chatText:
            'Klien: "Kami butuh MVP iOS/Android untuk task tracker. Fitur: Google login, push notification, offline mode, dan subscription billing via RevenueCat. Butuh selesai dalam 6 minggu."',
          prd: {
            title: "MVP Mobile SaaS Task Tracker",
            summary:
              "MVP React Native dengan OAuth, offline sync, push notification, dan paywall RevenueCat.",
            milestones: [
              {
                name: "Auth & Arsitektur Offline",
                tasks: 5,
                date: "14 Agu 2026",
                status: "Selesai",
                statusType: "done",
              },
              {
                name: "Push Notification & UI",
                tasks: 4,
                date: "28 Agu 2026",
                status: "Berjalan",
                statusType: "progress",
              },
              {
                name: "Subscription RevenueCat",
                tasks: 3,
                date: "10 Sep 2026",
                status: "Belum Mulai",
                statusType: "todo",
              },
            ],
          },
        },
      ],
    },
    solutions: {
      eyebrow: "Fitur Inti Platform",
      title: "Semua yang freelancer butuhkan untuk mengelola klien dengan jelas.",
      description:
        "Kurangi gesekan komunikasi, hemat jam kerja administratif, dan berikan klien visibilitas progress yang rapi.",
      items: [
        {
          title: "Smart AI Brief Generator",
          icon: "✨",
          benefit:
            "Tempel chat WhatsApp, email, atau catatan call. AI langsung membuat PRD, scope of work, dan milestone proyek sekali klik.",
        },
        {
          title: "Portal Klien Tanpa Login",
          icon: "🔗",
          benefit:
            "Bagikan magic link unik (/client/:token). Klien langsung melihat progress, dokumen, dan invoice tanpa harus membuat akun.",
        },
        {
          title: "Progress Tracker Transparan",
          icon: "📊",
          benefit:
            "Pecah proyek menjadi milestone jelas. Saat pekerjaan ditandai selesai, progress bar klien ikut terbarui otomatis.",
        },
        {
          title: "Invoice & PDF Sekali Klik",
          icon: "⚡",
          benefit:
            "Buat invoice profesional dari milestone selesai. Klien bisa melihat status pembayaran dan mengunduh PDF dari portal.",
        },
      ],
    },
    demo: {
      eyebrow: "Product Showcase",
      title: "Lihat kondisi proyek sebelum jadi meeting tambahan.",
      description:
        "Tonton bagaimana EntroSync menyatukan proyek klien, milestone, akses magic link, dan invoicing real time dalam satu workspace.",
      tags: ["Dashboard", "Portal Klien", "Milestone", "Invoice"],
      videoTitle: "EntroSync - Walkthrough Demo Produk",
      unsupported: "Browser Anda tidak mendukung video.",
    },
    proof: {
      eyebrow: "Dipercaya Freelancer",
      title: "Dibuat untuk hubungan klien yang lebih transparan.",
      metrics: [
        { stat: "100%", label: "Keamanan Read-Only" },
        { stat: "1 Klik", label: "Magic Invite" },
        { stat: "10x", label: "Proposal Lebih Cepat" },
      ],
      testimonials: [
        {
          quote:
            "EntroSync menghemat 5+ jam admin setiap minggu. Klien saya suka membuka satu magic link daripada bertanya update manual.",
          name: "Alex Rivera",
          role: "Full-Stack Freelancer",
        },
        {
          quote:
            "Fitur AI Brief terasa seperti magic. Saya tempel chat WhatsApp panjang, lalu EntroSync memberi PRD dan milestone dalam hitungan detik.",
          name: "Maya Chen",
          role: "Konsultan Design System",
        },
        {
          quote:
            "Invoice dulu selalu merepotkan. Sekarang klien bisa melihat dan mengunduh PDF invoice langsung dari portal proyek.",
          name: "Marcus Vance",
          role: "Founder Agensi",
        },
      ],
    },
    why: {
      eyebrow: "Kenapa EntroSync?",
      title: "Ganti chaos klien yang tersebar dengan workspace yang terstruktur.",
      beforeLabel: "Sebelum",
      afterLabel: "Sesudah",
      firstBeforeLabel: "Workflow Terpencar",
      firstAfterLabel: "Workspace EntroSync",
      comparisons: [
        {
          before: "Chat WhatsApp, link Drive, dan dokumen Notion terpencar",
          after: "Satu workspace terpadu untuk freelancer dan klien",
        },
        {
          before: "SOW dan proposal dibuat manual dari nol",
          after: "PRD, scope of work, dan milestone dibuat AI",
        },
        {
          before: "Klien terus bertanya 'sudah sampai mana?'",
          after: "Progress bar read-only dan milestone real time",
        },
        {
          before: "Invoice Excel dan lampiran PDF terpisah",
          after: "Invoice terintegrasi dengan status pembayaran dan export PDF",
        },
      ],
    },
    cta: {
      eyebrow: "Early Access",
      title: "Upgrade pengalaman portal klien Anda hari ini.",
      description:
        "Masuk waitlist EntroSync untuk merapikan brief klien, tracking milestone, dan invoicing dalam satu workspace.",
      emailLabel: "Alamat email",
      placeholder: "freelancer@agency.com",
      button: "Coba EntroSync",
      note: "Tanpa spam. Jadi yang pertama mencoba EntroSync.",
    },
    faq: {
      eyebrow: "Pertanyaan Umum",
      title: "Yang perlu Anda tahu tentang EntroSync.",
      items: [
        {
          question: "Bagaimana klien mengakses portal proyek?",
          answer:
            "Freelancer membuat magic link unik (contoh: /client/:token) untuk setiap proyek. Klien cukup membuka link di desktop atau mobile tanpa registrasi, login, atau password.",
        },
        {
          question: "Apakah portal klien aman dan read-only?",
          answer:
            "Ya. Portal klien dirancang read-only. Klien bisa melihat progress, milestone, task, dokumen, log, dan invoice, tetapi tidak bisa mengubah data proyek atau mengakses pengaturan freelancer.",
        },
        {
          question: "Bagaimana fitur Smart AI Brief bekerja?",
          answer:
            "Tempel riwayat chat, email, atau catatan call ke EntroSync. AI menganalisis teks lalu membuat PRD, scope of work, dan rekomendasi milestone yang bisa Anda pakai sekali klik.",
        },
        {
          question: "Apakah freelancer bisa membuat invoice dan export PDF?",
          answer:
            "Bisa. Anda dapat membuat invoice profesional berdasarkan milestone selesai atau item kustom, melacak status Pending/Paid, dan membiarkan klien mengunduh PDF dari portal.",
        },
        {
          question: "Bisakah saya mengelola banyak proyek klien?",
          answer:
            "Bisa. Freelancer memiliki dashboard terpusat untuk mengelola semua proyek, memantau payout tertunda, dan membuat magic link untuk setiap akun aktif.",
        },
      ],
    },
    footer: {
      ariaHome: "Beranda EntroSync",
      description:
        "Portal klien all-in-one untuk freelancer dan agensi. Ubah chat mentah menjadi brief AI, bagikan magic link, dan buat invoice sekali klik.",
      productTitle: "Fitur Produk",
      productLinks: [
        { label: "Smart AI Brief", href: "#solutions" },
        { label: "Portal Klien Magic Link", href: "#playground" },
        { label: "Demo Video Produk", href: "#demo" },
        { label: "Invoice & Export PDF", href: "#solutions" },
      ],
      navigationTitle: "Navigasi",
      navigationLinks: [
        { label: "Kenapa EntroSync?", href: "#why-us" },
        { label: "Bukti Freelancer & Review", href: "#proof" },
        { label: "Pertanyaan Umum", href: "#faq" },
        { label: "Waitlist Early Access", href: "#cta" },
      ],
      securityTitle: "Keamanan Portal Klien",
      securityHeading: "100% Isolasi Read-Only",
      securityDescription:
        "Akses klien berbasis token (`/client/:token`) membantu klien memantau progress proyek tanpa bisa mengubah data workspace.",
      copyright: "Hak cipta dilindungi.",
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Security Rules", href: "#" },
      ],
    },
  },
  en: {
    metadata: {
      title: "EntroSync | Client Portal for Freelancers and Agencies",
      description:
        "EntroSync helps freelancers and agencies turn client chats into AI briefs, milestones, zero-login client portals, and invoices in one workspace.",
    },
    nav: {
      items: [
        { label: "Solutions", href: "#solutions" },
        { label: "Playground", href: "#playground" },
        { label: "Demo", href: "#demo" },
        { label: "Proof", href: "#proof" },
        { label: "FAQ", href: "#faq" },
      ],
      ariaMenu: "Open navigation menu",
      ariaHome: "EntroSync home",
      viewDemo: "View demo",
      cta: "Get EntroSync",
      language: {
        id: "ID",
        en: "EN",
        aria: "Switch language",
      },
    },
    hero: {
      badge: "EntroSync - Freelancer & Agency Client Portal",
      title: "The all-in-one client portal for freelancers & agencies.",
      description:
        "Transform messy client chats into AI proposals, share zero-login magic links, track milestone progress in real time, and issue invoices in one calm workspace.",
      primaryCta: "Get EntroSync",
      secondaryCta: "View demo",
      highlights: [
        "✨ Smart AI Briefs",
        "🔗 0-Login Magic Links",
        "⚡ 1-Click Invoices",
      ],
      dashboardTitle: "Studio Ops Automation",
      dashboardSubtitle: "Client Portal: /client/47b5f060...",
      dashboardStatus: "In Progress",
      signals: [
        { label: "Project Progress", value: "64%" },
        { label: "Milestones", value: "2 of 3 Done" },
        { label: "Client Portal Link", value: "Active" },
      ],
      tasks: [
        {
          task: "Discovery & Scope Confirmation",
          status: "Done",
          date: "1 August 2026",
          statusType: "done",
        },
        {
          task: "Design Systems & Wireframes",
          status: "In Progress",
          date: "15 August 2026",
          statusType: "progress",
        },
        {
          task: "Backend & Client Portal Integration",
          status: "Not Started",
          date: "4 September 2026",
          statusType: "todo",
        },
      ],
    },
    playground: {
      badge: "Interactive Playground",
      title: "Test the EntroSync workflow live.",
      description:
        "See how AI transforms raw client chats into structured milestones, or preview what clients see when accessing their zero-login magic portal.",
      tabs: {
        aiBrief: "1. Smart AI Brief Generator",
        clientPortal: "2. Client Magic Portal (/client/:token)",
      },
      inputLabel: "Raw Client Chat / Email Input",
      sampleLabel: "Sample",
      textareaPlaceholder:
        "Paste WhatsApp chat history, email notes, or call transcripts here...",
      customReady: "Custom brief ready",
      usingSamplePrefix: "Using sample:",
      generate: "✨ Generate AI SOW & Milestones",
      generating: "Parsing with AI...",
      outputLabel: "Generated PRD & Scope of Work",
      adoptionReady: "1-Click Adoption Ready",
      analyzing: "Analyzing text structure & extracting milestones...",
      customTitle: "Custom Client Project Scope",
      customSummary:
        "Extracted requirement specifications, deliverables, and estimated milestone timeline from provided text.",
      milestonesLabel: "Extracted Milestones:",
      taskUnit: "tasks",
      targetLabel: "Target:",
      previewPortal: "🔗 Preview Client Magic Portal",
      portal: {
        badge: "Read-Only Client Portal",
        url: "entrosync.com/client/47b5f060-6448-4ab4-b5c5-e102ccb56239",
        note: "No account required &bull; Token scope active",
        projectStatus: "Project Status",
        projectName: "Studio Ops Automation",
        managedBy: "Managed by Freelancer &bull; Real-time client visibility",
        completionLabel: "Overall Completion",
        deadline: "Deadline:",
        clientAccess: "Client Access:",
        clientAccessValue: "Magic Link Verified",
        mutations: "Mutations:",
        mutationsValue: "Disabled (Read-Only)",
        activeMilestones: "Active Milestones",
        completedCount: "2 of 3 Completed",
        invoicesTitle: "Project Invoices",
        invoicesReady: "PDF Ready",
        invoiceId: "INV-9C5E396A",
        invoiceStatus: "PENDING",
        invoiceAmount: "Rp 1.200.000",
        invoiceDue: "Due: 2 Aug 2026",
        paymentLink: "Payment Link Active",
        downloadPdf: "Download PDF",
        milestones: [
          {
            name: "1. Intake & Requirements",
            description: "PRD validated & milestones generated",
            status: "Done",
            statusType: "done",
          },
          {
            name: "2. Client Portal & Invoicing",
            description: "Token security & PDF download test",
            status: "In Progress",
            statusType: "progress",
          },
          {
            name: "3. Final Review & Hand-Off",
            description: "Final sign-off and deployment",
            status: "Upcoming",
            statusType: "upcoming",
          },
        ],
      },
      prompts: [
        {
          label: "E-Commerce Rebrand Chat",
          chatText:
            'Client: "Hey! We need a full rebrand for our online store. New logo, homepage redesign, product filter fix, and payment gateway integration. Target launch is Sept 1st. Budget around $4k."',
          prd: {
            title: "E-Commerce Store Rebrand & Optimization",
            summary:
              "Comprehensive visual rebrand, UI/UX redesign of homepage, catalog filtering fix, and Stripe payment gateway setup.",
            milestones: [
              {
                name: "Brand Identity & Design System",
                tasks: 4,
                date: "10 Aug 2026",
                status: "Done",
                statusType: "done",
              },
              {
                name: "Homepage UI & Product Filter Engine",
                tasks: 6,
                date: "22 Aug 2026",
                status: "In Progress",
                statusType: "progress",
              },
              {
                name: "Stripe Gateway & Final QA Launch",
                tasks: 3,
                date: "1 Sep 2026",
                status: "Not Started",
                statusType: "todo",
              },
            ],
          },
        },
        {
          label: "SaaS Mobile App Notes",
          chatText:
            'Client: "We need an iOS/Android MVP for our task tracker. Features: Google login, push notifications, offline mode, and subscription billing via RevenueCat. Need it in 6 weeks."',
          prd: {
            title: "SaaS Task Tracker Mobile MVP",
            summary:
              "Cross-platform React Native MVP with OAuth authentication, offline storage sync, push alert system, and RevenueCat paywall.",
            milestones: [
              {
                name: "Auth & Core Offline Architecture",
                tasks: 5,
                date: "14 Aug 2026",
                status: "Done",
                statusType: "done",
              },
              {
                name: "Push Notification System & UI",
                tasks: 4,
                date: "28 Aug 2026",
                status: "In Progress",
                statusType: "progress",
              },
              {
                name: "RevenueCat In-App Subscriptions",
                tasks: 3,
                date: "10 Sep 2026",
                status: "Not Started",
                statusType: "todo",
              },
            ],
          },
        },
      ],
    },
    solutions: {
      eyebrow: "Core Platform Features",
      title: "Everything freelancers need to manage client work with total clarity.",
      description:
        "Eliminate communication friction, save hours on project administration, and give clients a transparent view of progress.",
      items: [
        {
          title: "Smart AI Brief Generator",
          icon: "✨",
          benefit:
            "Paste raw WhatsApp chats, email threads, or call notes. AI instantly generates a structured PRD, scope of work, and 1-click project milestones.",
        },
        {
          title: "Zero-Login Client Portal",
          icon: "🔗",
          benefit:
            "Share a unique magic link (/client/:token). Clients gain instant read-only visibility into progress, documents, and invoices with zero account friction.",
        },
        {
          title: "Transparent Progress Tracker",
          icon: "📊",
          benefit:
            "Break projects into clear milestones. As you mark work done, the client progress bar updates live, eliminating repetitive 'Where are we?' messages.",
        },
        {
          title: "1-Click Invoices & PDF Export",
          icon: "⚡",
          benefit:
            "Issue professional invoices directly from completed milestones. Clients can check payment status and download PDF invoices straight from their portal.",
        },
      ],
    },
    demo: {
      eyebrow: "Product Showcase",
      title: "See work health before it becomes a meeting.",
      description:
        "Watch how EntroSync unifies client projects, milestones, client magic link access, and real-time invoicing in one seamless workspace.",
      tags: ["Dashboard", "Client Portal", "Milestones", "Invoices"],
      videoTitle: "EntroSync - Product Demo Walkthrough",
      unsupported: "Your browser does not support the video tag.",
    },
    proof: {
      eyebrow: "Freelancer Approved",
      title: "Built for high-trust client relationships.",
      metrics: [
        { stat: "100%", label: "Read-Only Security" },
        { stat: "1-Click", label: "Magic Invites" },
        { stat: "10x", label: "Faster Proposals" },
      ],
      testimonials: [
        {
          quote:
            "EntroSync saved me 5+ hours every week on admin. My clients love opening one magic link instead of asking me for manual updates.",
          name: "Alex Rivera",
          role: "Full-Stack Freelancer",
        },
        {
          quote:
            "The AI Brief feature is magic. I paste a 100-line client WhatsApp thread, and EntroSync gives me a full PRD and milestones in seconds.",
          name: "Maya Chen",
          role: "Design Systems Consultant",
        },
        {
          quote:
            "Invoicing used to be a hassle. Now my clients view and download PDF invoices directly inside their token-scoped portal when milestones wrap up.",
          name: "Marcus Vance",
          role: "Agency Founder",
        },
      ],
    },
    why: {
      eyebrow: "Why EntroSync?",
      title: "Replace scattered client chaos with structured workspace clarity.",
      beforeLabel: "Before",
      afterLabel: "After",
      firstBeforeLabel: "Scattered Workflow",
      firstAfterLabel: "EntroSync Workspace",
      comparisons: [
        {
          before: "Scattered WhatsApp chats, Drive links & Notion docs",
          after: "Single unified workspace for freelancer & client",
        },
        {
          before: "Manual SOW & proposal creation from scratch",
          after: "AI-generated PRDs, scope of work & 1-click milestones",
        },
        {
          before: "Constant 'Where are we?' client status check-ins",
          after: "Real-time read-only progress bars & milestone tracking",
        },
        {
          before: "Separate Excel invoicing & PDF attachments",
          after: "Integrated 1-click invoicing with live payment status & PDF export",
        },
      ],
    },
    cta: {
      eyebrow: "Early Access",
      title: "Upgrade your client portal experience today.",
      description:
        "Join the EntroSync waitlist to streamline client briefs, milestone tracking, and invoicing in one workspace.",
      emailLabel: "Email address",
      placeholder: "freelancer@agency.com",
      button: "Get EntroSync",
      note: "Zero spam. Be first to access EntroSync.",
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "Everything you need to know about EntroSync.",
      items: [
        {
          question: "How do clients access their project portal?",
          answer:
            "Freelancers generate a unique magic link (e.g. /client/:token) for each project. Clients open the link directly on desktop or mobile without needing to register, log in, or remember a password.",
        },
        {
          question: "Is the client portal secure and read-only?",
          answer:
            "Yes! The client portal is strictly read-only by design. Clients can view project progress, milestones, tasks, documents, logs, and invoices, but cannot alter project data or access freelancer settings.",
        },
        {
          question: "How does the Smart AI Brief feature work?",
          answer:
            "Simply paste raw client chat history, emails, or call notes into EntroSync. The AI analyzes the text to generate a structured PRD, scope of work, and recommended milestones that you can adopt with one click.",
        },
        {
          question: "Can freelancers issue invoices and export PDFs?",
          answer:
            "Yes. You can generate professional invoices based on completed milestones or custom items, track status (Pending / Paid), and let clients view or download PDF invoices directly inside their portal.",
        },
        {
          question: "Can I manage multiple client projects at once?",
          answer:
            "Absolutely. Freelancers have a centralized dashboard to manage all projects, track pending payouts across clients, and issue magic links for each active account.",
        },
      ],
    },
    footer: {
      ariaHome: "EntroSync Home",
      description:
        "The all-in-one client portal for freelancers & agencies. Convert raw chats to AI briefs, share magic links, and issue 1-click invoices.",
      productTitle: "Product Features",
      productLinks: [
        { label: "Smart AI Briefs", href: "#solutions" },
        { label: "Magic Link Client Portal", href: "#playground" },
        { label: "Product Video Demo", href: "#demo" },
        { label: "1-Click Invoicing & PDF Export", href: "#solutions" },
      ],
      navigationTitle: "Navigation",
      navigationLinks: [
        { label: "Why EntroSync?", href: "#why-us" },
        { label: "Freelancer Proof & Reviews", href: "#proof" },
        { label: "Frequently Asked Questions", href: "#faq" },
        { label: "Early Access Waitlist", href: "#cta" },
      ],
      securityTitle: "Client Portal Security",
      securityHeading: "100% Read-Only Isolation",
      securityDescription:
        "Token-scoped client access (`/client/:token`) ensures clients can monitor project progress safely without altering workspace data.",
      copyright: "All rights reserved.",
      legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Security Rules", href: "#" },
      ],
    },
  },
};

export const getContent = (locale: Locale) => content[locale];
