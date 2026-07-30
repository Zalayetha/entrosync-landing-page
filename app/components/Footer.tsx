import Image from "next/image";
import type { LandingContent, Locale } from "../lib/content";

type FooterProps = {
  content: LandingContent["footer"];
  locale: Locale;
};

export const Footer = ({ content, locale }: FooterProps) => {
  const homeHref = locale === "id" ? "/" : "/en";

  return (
    <footer className="border-t border-base-300 bg-base-100 py-12 text-base-content/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 lg:col-span-1">
            <a className="flex items-center gap-2" href={homeHref} aria-label={content.ariaHome}>
              <Image
                alt="EntroSync logo"
                height={28}
                src="/favicon.svg"
                width={28}
              />
              <span className="text-xl font-bold text-base-content">EntroSync</span>
            </a>
            <p className="text-xs leading-relaxed text-base-content/60">
              {content.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content">
              {content.productTitle}
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              {content.productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content">
              {content.navigationTitle}
            </p>
            <ul className="mt-3 space-y-2 text-xs">
              {content.navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-base-content">
              {content.securityTitle}
            </p>
            <div className="mt-3 rounded-lg border border-base-300 bg-base-200 p-3 text-xs text-base-content/70">
              <p className="font-semibold text-primary">{content.securityHeading}</p>
              <p className="mt-1 text-[11px] leading-relaxed">
                {content.securityDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-base-300/60 pt-6 text-xs text-base-content/50 sm:flex-row">
          <div className="text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} EntroSync. {content.copyright}</p>
            <p className="mt-1">made with ☕️ by zaghy</p>
          </div>
          <div className="mt-3 flex gap-4 sm:mt-0">
            {content.legalLinks.map((link) => (
              <a href={link.href} className="hover:text-base-content transition" key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
