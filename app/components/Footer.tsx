import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-base-100 py-12 text-base-content/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-3 lg:col-span-1">
            <a className="flex items-center gap-2" href="#" aria-label="EntroSync Home">
              <Image
                alt="EntroSync logo"
                height={28}
                src="/favicon.svg"
                width={28}
              />
              <span className="text-xl font-bold text-base-content">EntroSync</span>
            </a>
            <p className="text-xs leading-relaxed text-base-content/60">
              The all-in-one client portal for freelancers & agencies. Convert raw chats to AI briefs, share magic links, and issue 1-click invoices.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content">
              Product Features
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a href="#solutions" className="hover:text-primary transition">
                  Smart AI Briefs
                </a>
              </li>
              <li>
                <a href="#playground" className="hover:text-primary transition">
                  Magic Link Client Portal
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-primary transition">
                  Product Video Demo
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary transition">
                  1-Click Invoicing & PDF Export
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation & Help */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content">
              Navigation
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <a href="#why-us" className="hover:text-primary transition">
                  Why EntroSync?
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-primary transition">
                  Freelancer Proof & Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-primary transition">
                  Early Access Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Workspace Security Note */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content">
              Client Portal Security
            </p>
            <div className="mt-3 rounded-lg border border-base-300 bg-base-200 p-3 text-xs text-base-content/70">
              <p className="font-semibold text-primary">100% Read-Only Isolation</p>
              <p className="mt-1 text-[11px] leading-relaxed">
                Token-scoped client access (`/client/:token`) ensures clients can monitor project progress safely without altering workspace data.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-base-300/60 pt-6 text-xs text-base-content/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} EntroSync. All rights reserved.</p>
          <div className="mt-3 flex gap-4 sm:mt-0">
            <a href="#" className="hover:text-base-content transition">Privacy Policy</a>
            <a href="#" className="hover:text-base-content transition">Terms of Service</a>
            <a href="#" className="hover:text-base-content transition">Security Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
