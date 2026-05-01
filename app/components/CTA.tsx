import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1B2B] via-[#0E2235] to-[#071521] px-4 py-14 text-white sm:px-6 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[-80px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[10%] h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.05] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[34px]">
          <div className="grid items-center gap-8 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-14 lg:py-16">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-200 sm:text-sm">
                Spremno za demo i uvođenje sistema
              </div>

              <h2 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
                Smanji rizik i imaj potpunu kontrolu nad
                <span className="block text-yellow-400">
                  temperaturom u svim objektima
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Imate realan pregled temperature u svim objektima, automatske
                alarme pri odstupanju, jasnu evidenciju merenja i bolji pregled
                sistema za svakodnevni rad.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/kontrola-temperature-u-apotekama"
                  className="inline-flex items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 px-5 py-3 text-sm font-bold text-yellow-300 transition hover:bg-yellow-400 hover:text-black"
                >
                  Zašto ručno merenje nije dovoljno
                </Link>

                <Link
                  href="/cene"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  Pogledaj cene sistema
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
                  <p className="mb-1 text-sm font-semibold text-white">
                    Brzo postavljanje
                  </p>
                  <p className="text-sm leading-6 text-white/60">
                    Bez komplikovanog uvođenja sistema
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
                  <p className="mb-1 text-sm font-semibold text-white">
                    Instant alarmi
                  </p>
                  <p className="text-sm leading-6 text-white/60">
                    Reakcija odmah kada nešto nije u redu
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
                  <p className="mb-1 text-sm font-semibold text-white">
                    Više lokacija
                  </p>
                  <p className="text-sm leading-6 text-white/60">
                    Sve pregledno iz jedne kontrolne table
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[24px] bg-cyan-400/10 blur-3xl sm:rounded-[30px]" />

              <div className="relative rounded-[24px] border border-white/10 bg-[#091521]/80 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:rounded-[30px] sm:p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/40">
                  Sledeći korak
                </p>

                <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  Zakaži demo i pogledaj kako sistem izgleda u praksi
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                  Prikaz dashboard-a, pregleda alarma, više senzora, više lokacija
                  i načina kako se sistem uklapa u svakodnevni rad tvog objekta.
                </p>

                <div className="mt-8">
                  <Link
                    href="/zakazi-demo"
                    className="block rounded-2xl bg-yellow-400 px-6 py-4 text-center text-base font-bold text-black shadow-[0_12px_30px_rgba(250,204,21,0.25)] transition hover:scale-[1.02] hover:shadow-[0_16px_36px_rgba(250,204,21,0.30)]"
                  >
                    Zakaži demo
                  </Link>

                  <Link
                    href="/kontrola-temperature-u-apotekama"
                    className="mt-3 block rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    Pogledaj primer: ručno vs kontinuirano
                  </Link>

                  <p className="mt-4 text-center text-xs text-white/50">
                    Prikaz sistema, alarma i izveštaja za tvoju vrstu objekta
                  </p>
                </div>

                <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span>Praćenje temperature u realnom vremenu</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span>Alarm kada temperatura izađe iz opsega</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <span>Istorija merenja i pregled više lokacija</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-sm text-white/45 sm:gap-6">
          <span>24/7 monitoring</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span>Cloud dashboard</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span>Alarmi i istorija merenja</span>
        </div>
      </div>
    </section>
  );
}