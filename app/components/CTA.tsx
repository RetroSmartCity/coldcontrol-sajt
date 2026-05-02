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
                Sistem koji obezbeđuje dokaz o uslovima čuvanja
                <span className="block text-yellow-400">
                  u skladu sa EU GDP smernicama
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                ColdControl omogućava kontinuirano praćenje temperature,
                automatski zapis i jasan pregled podataka koji se može koristiti
                za internu kontrolu i pripremu za inspekciju.
              </p>

              {/* 🔥 GDP FEATURE LIST */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ 24/7 kontinuirano praćenje temperature
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Automatski zapis bez ručnog unosa
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Min / max vrednosti tokom celog dana
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Audit log i istorija događaja
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Alarm pri odstupanju temperature
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm">
                  ✔ Izveštaji spremni za kontrolu
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
                  Zakaži demo i pogledaj sistem u radu
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                  Pregled dashboard-a, alarma, istorije merenja i načina kako se
                  sistem koristi u realnim uslovima.
                </p>

                <div className="mt-8">
                  <Link
                    href="/zakazi-demo"
                    className="block rounded-2xl bg-yellow-400 px-6 py-4 text-center text-base font-bold text-black shadow-[0_12px_30px_rgba(250,204,21,0.25)] transition hover:scale-[1.02]"
                  >
                    Zakaži demo
                  </Link>

                  <p className="mt-4 text-center text-xs text-white/50">
                    Prikaz sistema, alarma i izveštaja za tvoju vrstu objekta
                  </p>
                </div>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span>Real-time monitoring</span>
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
          <span>Kalibracija senzora</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span>Audit log</span>
        </div>
      </div>
    </section>
  );
}