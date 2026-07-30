import Image from "next/image";
import type { LandingContent, Locale } from "../lib/content";
import { TYPEFORM_URL } from "../lib/links";
import { LanguageSwitcher } from "./LanguageSwitcher";

type NavbarProps = {
  content: LandingContent["nav"];
  locale: Locale;
};

export const Navbar = ({ content, locale }: NavbarProps) => {
  const homeHref = locale === "id" ? "/" : "/en";

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <a className="flex items-center gap-2" href={homeHref} aria-label={content.ariaHome}>
            <Image
              alt="EntroSync logo"
              height={32}
              priority
              src="/favicon.svg"
              width={32}
            />
            <span className="text-xl font-bold">EntroSync</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            {content.items.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher locale={locale} labels={content.language} />
          </div>
          <a className="btn btn-ghost hidden rounded-full lg:inline-flex" href="#demo">
            {content.viewDemo}
          </a>
          <a
            className="btn btn-primary hidden rounded-full lg:inline-flex"
            href={TYPEFORM_URL}
            rel="noreferrer"
            target="_blank"
          >
            {content.cta}
          </a>
          <div className="dropdown dropdown-end lg:hidden">
            <button
              aria-label={content.ariaMenu}
              className="btn btn-ghost btn-square"
              tabIndex={0}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div
              className="dropdown-content fixed left-0 right-0 top-16 z-50 rounded-none border-y border-base-300 bg-base-100 p-4 shadow-xl"
              tabIndex={0}
            >
              <ul className="menu menu-sm p-0">
                {content.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                <li>
                  <a href="#demo">{content.viewDemo}</a>
                </li>
              </ul>
              <div className="mt-3 border-t border-base-300 pt-3">
                <LanguageSwitcher locale={locale} labels={content.language} />
              </div>
              <a
                className="btn btn-primary mt-3 w-full rounded-full"
                href={TYPEFORM_URL}
                rel="noreferrer"
                target="_blank"
              >
                {content.cta}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
