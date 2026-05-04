export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Postavljanje mernih tačaka u objektu",
      description:
        "ColdControl uređaj se postavlja u objektu i povezuje na postojeću WiFi mrežu. Senzori se raspoređuju na definisane merne tačke u frižiderima, komorama ili zonama gde je potrebna kontrola uslova čuvanja.",
      note: "Definisane merne tačke i stabilna konekcija",
    },
    {
      number: "02",
      title: "Kontinuirano merenje temperature 24/7",
      description:
        "Senzori automatski prate temperaturu tokom celog dana i noći, bez oslanjanja na ručno očitavanje u pojedinačnim terminima. Na taj način se vidi stvarno kretanje temperature, uključujući min/max vrednosti i svako odstupanje.",
      note: "Kontinuirano merenje u opsegu 2–8°C",
    },
    {
      number: "03",
      title: "Automatska evidencija, alarmi i audit trag",
      description:
        "Sva merenja, alarmi i događaji se automatski čuvaju u sistemu. Podaci ostaju dostupni za internu proveru, odgovorno lice i inspekcijski uvid, bez ručnog sastavljanja evidencije.",
      note: "Audit log, istorija i izveštaji za kontrolu",
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
            Od merenja temperature do dokaza za kontrolu
          </h2>

          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed">
            ColdControl nije samo prikaz trenutne temperature. Sistem automatski
            meri, beleži i čuva podatke, tako da objekat ima jasan dokaz o
            uslovima čuvanja, odstupanjima i reakciji na alarm.
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
                Stvarno stanje, ne samo trenutak merenja
              </h4>
              <p className="leading-7 text-slate-600">
                Ručno očitavanje pokazuje samo temperaturu u trenutku provere.
                ColdControl prati ceo tok temperature i beleži šta se dešavalo
                između dva ručna merenja.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Evidencija i sledljivost
              </p>
              <h4 className="mb-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                Min/max, istorija i audit log
              </h4>
              <p className="leading-7 text-slate-600">
                Sistem automatski čuva istoriju merenja, minimalne i maksimalne
                vrednosti, alarme i događaje, tako da postoji jasan trag za
                internu proveru i inspekcijski uvid.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Reakcija na odstupanje
              </p>
              <h4 className="mb-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                Alarm pre nego što problem ostane neprimećen
              </h4>
              <p className="leading-7 text-slate-600">
                Kada temperatura izađe iz zadatog opsega, sistem automatski
                generiše alarm. Time se smanjuje rizik da odstupanje prođe
                neprimećeno ili da se naknadno nema dokaz o događaju.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}