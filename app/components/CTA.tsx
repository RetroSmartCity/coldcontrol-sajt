import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1B2B] via-[#0E2235] to-[#071521] px-4 py-14 text-white sm:px-6 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-80px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[10%] h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[34px]">

          <div className="grid items-center gap-8 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-16">

            {/* LEVA STRANA */}
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-200 sm:text-sm">
                EU GDP usklađeno rešenje
              </div>

              <h2 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
                Imate dokaz o temperaturi
                <span className="block text-yellow-400">
                  ili samo zapis u svesci?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                EU GDP zahteva kontinuirano praćenje temperature i dokaz o
                uslovima čuvanja. Ručna merenja u 8h i 14h ne pokazuju šta se
                dešavalo između.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                ColdControl obezbeđuje automatsko beleženje, istoriju merenja i
                izveštaje spremne za inspekciju — bez ručnog vođenja evidencije.
              </p>

              {/* 🔥 GDP FEATURE LIST */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Kontinuirano merenje temperature 24/7
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Automatski zapis bez ručnog unosa
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Min / max vrednosti tokom celog dana
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Alarm pri svakom odstupanju
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Audit log i istorija događaja
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Izveštaji spremni za inspekciju
                </div>

              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/cene"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  Pogledaj cene sistema
                </Link>
              </div>
            </div>

            {/* DESNA STRANA */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[24px] bg-cyan-400/10 blur-3xl sm:rounded-[30px]" />

              <div className="relative rounded-[24px] border border-white/10 bg-[#091521]/80 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:rounded-[30px] sm:p-6">
                
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
                  Sledeći korak
                </p>

                <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  Pogledajte kako sistem radi u realnom okruženju
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                  Prikaz dashboard-a, alarma, istorije merenja i načina kako
                  izgleda evidencija koja se koristi za kontrolu i inspekciju.
                </p>

                <div className="mt-8">
                  <Link
                    href="/zakazi-demo"
                    className="block rounded-2xl bg-yellow-400 px-6 py-4 text-center text-base font-bold text-black shadow-[0_12px_30px_rgba(250,204,21,0.25)] transition hover:scale-[1.02]"
                  >
                    Zakaži demo
                  </Link>

                  <p className="mt-4 text-center text-xs text-white/50">
                    Bez obaveze • Demo prilagođen vašem objektu
                  </p>
                </div>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span>Kontinuirano praćenje</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span>Automatski alarmi</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <span>Istorija i audit log</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-sm text-white/45 sm:gap-6">
          <span>EU GDP compliant</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span>Kontinuirano merenje</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span>Audit log</span>
        </div>
      </div>
    </section>
  );
}