import Link from "next/link";

const navItems = [
  { href: "/#proizvod", label: "Proizvod" },
  { href: "/#resenja", label: "Rešenja" },
  { href: "/cene", label: "Cene sistema" },
  { href: "/zakazi-demo", label: "Zakaži demo" },
  { href: "/primer-ugovora", label: "Ugovor" },
];

const contactItems = [
  { label: "Email", value: "info@coldcontrol.rs", href: "mailto:info@coldcontrol.rs" },
  { label: "Telefon", value: "+381 60 5000 63", href: "tel:+38160500063" },
  { label: "Lokacija", value: "Srbija" },
];

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="relative overflow-hidden border-t border-white/10 bg-[#06111C] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[-80px] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[10%] h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:gap-10">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-sm">
              ColdControl Systems
            </div>

            <h3 className="text-2xl font-bold leading-tight md:text-4xl">
              Pouzdan monitoring temperature za objekte gde je svaka promena važna
            </h3>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              Sistem za praćenje temperature u realnom vremenu sa alarmima,
              cloud pregledom, istorijom merenja i jednostavnim nadzorom više
              lokacija i više senzora iz jedne kontrolne table.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/zakazi-demo"
                className="rounded-2xl bg-yellow-400 px-5 py-3 text-center text-sm font-bold text-black transition hover:scale-[1.02] hover:shadow-[0_14px_34px_rgba(250,204,21,0.28)]"
              >
                Zakaži demo
              </Link>

              <Link
                href="/primer-ugovora"
                className="rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white/90 transition hover:scale-[1.02] hover:bg-white/10 hover:text-white"
              >
                Primer ugovora
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Navigacija
            </p>

            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 text-white/70 transition hover:text-white"
                >
                  <span className="h-2 w-2 rounded-full bg-yellow-400/80 transition group-hover:scale-125" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Kontakt
            </p>

            <div className="space-y-4">
              {contactItems.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:bg-white/8"
                  >
                    <p className="mb-1 text-xs uppercase tracking-[0.16em] text-white/40">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-white/85">{item.value}</p>
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p className="mb-1 text-xs uppercase tracking-[0.16em] text-white/40">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-white/85">{item.value}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:mt-14 sm:rounded-[28px] sm:p-5 md:grid-cols-3 md:p-6">
          <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
              24/7 nadzor
            </p>
            <p className="text-sm leading-6 text-white/70">
              Stalni pregled temperature i stanja sistema bez ručne kontrole.
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
              Alarm odmah
            </p>
            <p className="text-sm leading-6 text-white/70">
              Brza reakcija kada temperatura izađe iz dozvoljenog opsega.
            </p>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
              Više lokacija
            </p>
            <p className="text-sm leading-6 text-white/70">
              Jedna platforma za više objekata, senzora i istoriju merenja.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:mt-10 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ColdControl Systems. Sva prava zadržana.</p>

<div className="flex flex-wrap items-center gap-4 sm:gap-5">
  <Link href="/" className="transition hover:text-white">
    Početna
  </Link>
  <Link href="/cene" className="transition hover:text-white">
    Cene sistema
  </Link>
  <Link href="/zakazi-demo" className="transition hover:text-white">
    Zakaži demo
  </Link>
  <Link href="/primer-ugovora" className="transition hover:text-white">
    Ugovor
  </Link>
  <Link href="/#kontakt" className="transition hover:text-white">
    Kontakt
  </Link>
  <a href="mailto:info@coldcontrol.rs" className="transition hover:text-white">
    info@coldcontrol.rs
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}