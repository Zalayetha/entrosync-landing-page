import Image from "next/image";
import type { LandingContent, Locale } from "../lib/content";
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
          <div className="dropdown">
            <button
              aria-label={content.ariaMenu}
              className="btn btn-ghost btn-square lg:hidden"
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
            <ul
              className="menu dropdown-content menu-sm z-50 mt-3 w-52 rounded-lg border border-base-300 bg-base-100 p-2 shadow"
              tabIndex={0}
            >
              {content.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
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
          <LanguageSwitcher locale={locale} labels={content.language} />
          <a className="btn btn-ghost hidden rounded-full sm:inline-flex" href="#demo">
            {content.viewDemo}
          </a>
          <a className="btn btn-primary rounded-full" href="#cta">
            {content.cta}
          </a>
        </div>
      </nav>
    </header>
  );
};
