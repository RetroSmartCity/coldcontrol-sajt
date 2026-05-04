"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/#proizvod", label: "Platforma" },
  { href: "/#resenja", label: "Rešenja" },
  {
    href: "/kontrola-temperature-u-apotekama",
    label: "Apoteke",
  },
  { href: "/cene", label: "Compliance paketi" },
  { href: "/zakazi-demo", label: "Zakaži demo" },
  { href: "/primer-ugovora", label: "Dokumentacija" },
];

const contactItems = [
  {
    label: "Email",
    value: "info@coldcontrol.rs",
    href: "mailto:info@coldcontrol.rs",
  },
  {
    label: "Telefon",
    value: "+381 60 5000 63",
    href: "tel:+38160500063",
  },
];

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/kontrola-temperature-u-apotekama")
      return pathname === "/kontrola-temperature-u-apotekama";
    if (href === "/cene") return pathname === "/cene";
    if (href === "/zakazi-demo") return pathname === "/zakazi-demo";
    if (href === "/primer-ugovora") return pathname === "/primer-ugovora";
    return false;
  };

  return (
    <footer
      id="kontakt"
      className="relative overflow-hidden border-t border-white/10 bg-[#06111C] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[-80px] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[10%] h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr_0.8fr]">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
              ColdControl Systems
            </div>

            <h3 className="text-2xl font-bold leading-tight md:text-4xl">
              Automatska evidencija temperature za objekte gde je dokaz važan
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              Kontinuirano merenje temperature, alarmi, min/max vrednosti,
              audit log i izveštaji spremni za internu kontrolu i inspekcijski
              uvid.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {pathname === "/zakazi-demo" ? (
                <span className="rounded-2xl bg-yellow-400 px-5 py-3 text-center text-sm font-bold text-black">
                  Zakaži demo
                </span>
              ) : (
                <Link
                  href="/zakazi-demo"
                  className="rounded-2xl bg-yellow-400 px-5 py-3 text-center text-sm font-bold text-black transition hover:scale-[1.02]"
                >
                  Zakaži demo
                </Link>
              )}
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Navigacija
            </p>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) =>
                isActive(item.href) ? (
                  <span
                    key={item.href}
                    className="flex items-center gap-3 font-semibold text-yellow-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span>{item.label}</span>
                  </span>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 text-white/70 transition hover:text-white"
                  >
                    <span className="h-2 w-2 rounded-full bg-yellow-400/80 transition group-hover:scale-125" />
                    <span>{item.label}</span>
                  </Link>
                )
              )}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Kontakt
            </p>

            <div className="space-y-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/10"
                >
                  <p className="mb-1 text-xs uppercase tracking-[0.16em] text-white/40">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-white/85">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 sm:mt-10 md:grid-cols-3 md:p-6">
          <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
              24/7 evidencija
            </p>
            <p className="text-sm leading-6 text-white/70">
              Temperatura se meri i čuva kontinuirano, bez oslanjanja samo na
              ručni upis u određenim terminima.
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
              Alarm i odstupanja
            </p>
            <p className="text-sm leading-6 text-white/70">
              Svako odstupanje od definisanog opsega može biti zabeleženo uz
              istoriju događaja i bržu reakciju.
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
              Audit log i izveštaji
            </p>
            <p className="text-sm leading-6 text-white/70">
              Istorija merenja, min/max vrednosti i izveštaji ostaju dostupni
              za odgovorno lice, internu proveru i inspekcijski uvid.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/50">
          Za instalaciju i tehničku podršku na terenu:{" "}
          <a
            href="https://majstordex.rs"
            className="underline hover:text-white transition"
          >
            hitne elektro intervencije u Beogradu
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} ColdControl Systems. Sva prava
            zadržana.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {pathname === "/" ? (
              <span className="text-yellow-300">Početna</span>
            ) : (
              <Link href="/" className="transition hover:text-white">
                Početna
              </Link>
            )}

            {pathname === "/kontrola-temperature-u-apotekama" ? (
              <span className="text-yellow-300">Apoteke</span>
            ) : (
              <Link
                href="/kontrola-temperature-u-apotekama"
                className="transition hover:text-white"
              >
                Apoteke
              </Link>
            )}

            {pathname === "/cene" ? (
              <span className="text-yellow-300">Cene</span>
            ) : (
              <Link href="/cene" className="transition hover:text-white">
                Cene
              </Link>
            )}

            {pathname === "/zakazi-demo" ? (
              <span className="text-yellow-300">Demo</span>
            ) : (
              <Link href="/zakazi-demo" className="transition hover:text-white">
                Demo
              </Link>
            )}

            <a
              href="mailto:info@coldcontrol.rs"
              className="transition hover:text-white"
            >
              info@coldcontrol.rs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}