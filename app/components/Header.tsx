"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: "/", label: "Početna" },
      { href: "/#proizvod", label: "Proizvod" },
      { href: "/#resenja", label: "Rešenja" },
      { href: "/cene", label: "Cene" },
      { href: "/primer-ugovora", label: "Ugovor" },
      { href: "/#kontakt", label: "Kontakt" },
    ],
    []
  );

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/cene") return pathname === "/cene";
    if (href === "/primer-ugovora") return pathname === "/primer-ugovora";
    return pathname === href;
  };

  const navLink = (href: string, label: string) => {
    const isActive = isActiveLink(href);

    return (
      <Link
        href={href}
        className={`group relative text-sm font-medium transition ${
          isActive ? "text-white" : "text-white/70 hover:text-white"
        }`}
      >
        <span>{label}</span>
        <span
          className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-yellow-400 transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1B2B]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl" />
            <Image
              src="/images/logo-header-tight.webp"
              alt="ColdControl Systems"
              width={180}
              height={48}
              className="h-auto w-auto"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div key={item.href}>{navLink(item.href, item.label)}</div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://app.coldcontrol.app/login"
            className="hidden sm:inline-flex rounded-2xl border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/85 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
          >
            Otvori aplikaciju
          </Link>

          <Link
            href="/zakazi-demo"
            className="rounded-2xl bg-yellow-400 px-4 py-2 text-sm font-bold text-black shadow-[0_10px_30px_rgba(250,204,21,0.22)] transition hover:scale-[1.02] hover:shadow-[0_14px_34px_rgba(250,204,21,0.30)] sm:px-5 sm:py-2.5"
          >
            Zakaži demo
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Zatvori meni" : "Otvori meni"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-white transition ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-white transition ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0B1B2B]/95 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="https://app.coldcontrol.app/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white/85"
            >
              Otvori APP
            </Link>

            <Link
              href="/zakazi-demo"
              onClick={() => setMobileOpen(false)}
              className="rounded-2xl bg-yellow-400 px-4 py-3 text-center text-sm font-bold text-black"
            >
              Zakaži demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}