import Link from "next/link";

const checks = [
  "Kontinuirano merenje temperature 24/7",
  "Automatska evidencija bez ručnog unosa",
  "Min / max vrednosti i istorija merenja",
  "Alarm pri izlasku iz definisanog opsega",
  "Audit log merenja, alarma i događaja",
  "Izveštaji za odgovorno lice i proveru",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#071521] px-4 py-14 text-white sm:px-6 md:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_82%_80%,rgba(250,204,21,0.10),transparent_30%),linear-gradient(180deg,#0B1B2B_0%,#071521_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.045] shadow-[0_36px_120px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:rounded-[38px]">
          <div className="grid items-center gap-8 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-xs font-bold text-cyan-100 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Evidencija, alarmi i dokaz u jednom sistemu
              </div>

              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
                Kada temperatura odstupi,
                <span className="block text-yellow-400">sistem mora da reaguje odmah.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Ručni zapis pokazuje samo trenutak očitavanja. ColdControl čuva ceo tok događaja:
                merenja, odstupanja, trajanje alarma i istoriju koja ostaje dostupna za proveru.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {checks.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/14 px-4 py-3 text-sm text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <span className="mr-2 text-emerald-300">●</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[34px] bg-cyan-400/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#08131F]/86 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.42)] sm:p-6">
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/36">Demo prikaz sistema</p>
                <h3 className="text-2xl font-black leading-tight text-white md:text-3xl">
                  Prikažite sistem kao dokaz, ne samo kao grafikon.
                </h3>

                <div className="mt-7 space-y-4">
                  {[
                    ["01", "Dashboard", "trenutna temperatura, status i alarmi"],
                    ["02", "Istorija", "min/max vrednosti i trajanje odstupanja"],
                    ["03", "Izveštaj", "podaci spremni za internu proveru"],
                  ].map(([num, title, text]) => (
                    <div key={num} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-sm font-black text-black">
                        {num}
                      </div>
                      <div>
                        <p className="font-bold text-white">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-white/58">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/zakazi-demo"
                    className="block rounded-2xl bg-yellow-400 px-6 py-4 text-center text-base font-black text-black shadow-[0_16px_42px_rgba(250,204,21,0.24)] transition hover:scale-[1.02] hover:bg-yellow-300"
                  >
                    Zakaži demo
                  </Link>
                  <p className="mt-4 text-center text-xs leading-5 text-white/46">
                    Demo prema vašem objektu, broju frižidera i mernih tačaka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-sm text-white/42 sm:gap-6">
          <span>Automatska evidencija</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span>Kontinuirano merenje</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span>Audit log</span>
        </div>
      </div>
    </section>
  );
}
