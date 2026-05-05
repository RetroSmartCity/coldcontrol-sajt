"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: "/", label: "Početna" },
      { href: "/#proizvod", label: "Platforma" },
      { href: "/#resenja", label: "Compliance" },
      { href: "/kontrola-temperature-u-apotekama", label: "Apoteke" },
      { href: "/cene", label: "Cene" },
      { href: "/#kontakt", label: "Kontakt" },
    ],
    []
  );

  const docItems = [
    { href: "/primer-ugovora", label: "Primer ugovora" },
    { href: "/primer-izvestaja", label: "Primer izveštaja" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  const docsActive =
    pathname === "/primer-ugovora" || pathname === "/primer-izvestaja";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071625]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
          aria-label="ColdControl Systems početna"
        >
          <Image
            src="/images/logo-header-tight.webp"
            alt="ColdControl Systems"
            width={180}
            height={48}
            className="h-auto w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Glavna navigacija">
          {navItems.map((item) => {
            const active = isActiveLink(item.href);

            return active ? (
              <span key={item.href} className="relative text-sm font-semibold text-white">
                {item.label}
                <span className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-yellow-400" />
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-white/72 transition hover:text-white"
              >
                {item.label}
                <span className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}

          <div
            className="relative"
            onMouseEnter={() => setDocsOpen(true)}
            onMouseLeave={() => setDocsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDocsOpen((prev) => !prev)}
              className={`group relative text-sm font-medium transition ${
                docsActive ? "text-white" : "text-white/72 hover:text-white"
              }`}
            >
              Dokumentacija
              <span
                className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-yellow-400 transition-all duration-300 ${
                  docsActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {docsOpen && (
              <div className="absolute left-1/2 top-8 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0b1b2b] p-2 shadow-2xl">
                {docItems.map((doc) => (
                  <Link
                    key={doc.href}
                    href={doc.href}
                    className={`block rounded-xl px-4 py-3 text-sm transition ${
                      pathname === doc.href
                        ? "bg-yellow-400 text-black font-bold"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {doc.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://app.coldcontrol.app/login"
            className="hidden sm:inline-flex rounded-2xl border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
          >
            Otvori aplikaciju
          </Link>

          {pathname === "/zakazi-demo" ? (
            <span className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-bold text-black sm:px-5 sm:py-2.5">
              Zakaži demo
            </span>
          ) : (
            <Link
              href="/zakazi-demo"
              className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-bold text-black shadow-[0_10px_30px_rgba(250,204,21,0.22)] transition hover:scale-[1.02] hover:bg-yellow-300 sm:px-5 sm:py-2.5"
            >
              Zakaži demo
            </Link>
          )}

          <button
            type="button"
            aria-label={mobileOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-white transition ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-white transition ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-white transition ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#071625]/98 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobilna navigacija">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);

              return active ? (
                <span
                  key={item.href}
                  className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-2">
              <p className="px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Dokumentacija
              </p>

              {docItems.map((doc) => (
                <Link
                  key={doc.href}
                  href={doc.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-sm transition ${
                    pathname === doc.href
                      ? "bg-yellow-400 text-black font-bold"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {doc.label}
                </Link>
              ))}
            </div>

            <Link
              href="https://app.coldcontrol.app/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/85"
            >
              Otvori aplikaciju
            </Link>

            {pathname !== "/zakazi-demo" && (
              <Link
                href="/zakazi-demo"
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl bg-yellow-400 px-4 py-3 text-center text-sm font-bold text-black"
              >
                Zakaži demo
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}