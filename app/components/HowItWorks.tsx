export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Uređaj se povezuje na lokalnu WiFi mrežu",
      description:
        "Centralni uređaj se postavlja u objektu i povezuje na postojeću WiFi mrežu bez dodatne infrastrukture. On obezbeđuje slanje podataka ka ColdControl platformi.",
      note: "Lokalna WiFi konekcija bez dodatne infrastrukture",
    },
    {
      number: "02",
      title: "Senzor meri temperaturu u frižideru",
      description:
        "Temperaturni senzor se postavlja u farmaceutski frižider i kontinuirano prati uslove čuvanja vakcina, lekova i drugih termolabilnih proizvoda u opsegu 2–8°C.",
      note: "Merenje direktno u frižideru u opsegu 2–8°C",
    },
    {
      number: "03",
      title: "Podaci, alarmi i evidencija",
      description:
        "Podaci se automatski šalju u cloud sistem, gde su dostupni istorija merenja, min/max vrednosti, alarmi pri odstupanju i evidencija za internu kontrolu.",
      note: "Automatski zapis, alarm i audit log",
    },
  ];

  return (
    <section
      id="proizvod"
      className="relative overflow-hidden bg-[#F5F8FB] px-4 py-14 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-80px] top-16 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-60px] h-80 w-80 rounded-full bg-yellow-200/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#123A5A]">
            Kako radi sistem
          </span>

          <h2 className="mb-5 text-3xl font-bold text-[#0B1B2B] sm:text-4xl md:text-5xl">
            Kontrola temperature – od merenja do dokaza
          </h2>

          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed">
            ColdControl razdvaja merni deo i komunikacioni deo sistema: senzor
            meri temperaturu u frižideru, uređaj šalje podatke u cloud, a
            odgovorno lice dobija pregled, alarme i evidenciju na jednom mestu.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.14)] sm:rounded-[28px] sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B2B] text-base font-bold text-white shadow-lg sm:h-14 sm:w-14 sm:text-lg">
                  {step.number}
                </div>

                <div className="h-px w-16 bg-gradient-to-r from-[#123A5A]/30 to-transparent" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-600">{step.description}</p>

              <div className="mt-8 border-t border-slate-200 pt-4 text-sm font-medium text-slate-500">
                {step.note}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-slate-200 bg-white/85 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:mt-14 sm:rounded-[30px] sm:p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Kontinuirani nadzor
              </p>
              <h4 className="mb-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                Temperatura 24/7
              </h4>
              <p className="leading-7 text-slate-600">
                Sistem prati temperaturu tokom celog dana i noći, umesto da se
                oslanja samo na ručno očitavanje u određenim terminima.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Evidencija
              </p>
              <h4 className="mb-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                Min/max i istorija
              </h4>
              <p className="leading-7 text-slate-600">
                Podaci ostaju zabeleženi kroz istoriju merenja, minimalne i
                maksimalne vrednosti, alarmne događaje i pregled stanja sistema.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Reakcija
              </p>
              <h4 className="mb-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                Alarm pri odstupanju
              </h4>
              <p className="leading-7 text-slate-600">
                Kada temperatura izađe iz definisanog opsega, sistem šalje
                upozorenje i čuva trag događaja za kasniji pregled i kontrolu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}