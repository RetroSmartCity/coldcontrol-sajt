export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Postavi senzor",
      description:
        "WiFi senzor se brzo postavlja u frižider, rashladnu vitrinu ili hladnjaču bez komplikovane instalacije.",
    },
    {
      number: "02",
      title: "Podaci idu u cloud",
      description:
        "Temperatura se automatski šalje na server i prikazuje u kontrolnoj tabli u realnom vremenu.",
    },
    {
      number: "03",
      title: "Alarm reaguje odmah",
      description:
        "Ako temperatura izađe iz dozvoljenog opsega, sistem odmah šalje upozorenje odgovornoj osobi.",
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
            Jednostavno od merenja do alarma
          </h2>

          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed">
            Sistem je napravljen da bude lak za postavljanje, pregledan za korišćenje
            i brz kada treba da reaguje na problem.
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

                <div className="h-px w-16 bg-gradient-to-r from-yellow-400 to-transparent" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                {step.title}
              </h3>

              <p className="leading-7 text-slate-600">{step.description}</p>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#123A5A] opacity-80">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span>Brzo i pregledno</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-slate-200 bg-white/85 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:mt-14 sm:rounded-[30px] sm:p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                24/7 nadzor
              </p>
              <h4 className="mb-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                Stalna kontrola
              </h4>
              <p className="leading-7 text-slate-600">
                Nema ručnog proveravanja temperature više puta dnevno.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Cloud pristup
              </p>
              <h4 className="mb-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                Sve na jednom mestu
              </h4>
              <p className="leading-7 text-slate-600">
                Više lokacija, više senzora i kompletna istorija u jednoj tabli.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Brza reakcija
              </p>
              <h4 className="mb-2 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                Manji rizik
              </h4>
              <p className="leading-7 text-slate-600">
                Problem se vidi odmah, pre nego što dođe do kvara robe ili inspekcijskog problema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}