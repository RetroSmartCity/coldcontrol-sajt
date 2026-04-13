const items = [
  {
    title: "Apoteke",
    description:
      "Kontrola temperature vakcina i lekova uz evidenciju merenja i spremnost za internu kontrolu i inspekciju.",
    badge: "Najčešća primena",
  },
  {
    title: "Hladnjače",
    description:
      "Nadzor komora i skladišta uz alarm i istoriju temperature za svaki objekat i svaku rashladnu zonu.",
    badge: "24/7 nadzor",
  },
  {
    title: "Restorani",
    description:
      "Praćenje hladnih sistema uz evidenciju za HACCP, sigurnost hrane i lakšu svakodnevnu kontrolu.",
    badge: "Bezbednost hrane",
  },
  {
    title: "Supermarketi",
    description:
      "Praćenje više rashladnih tačaka, vitrinskih sistema i lokacija iz jedne centralne kontrolne table.",
    badge: "Više lokacija",
  },
  {
    title: "Transport",
    description:
      "Nadzor temperaturno osetljive robe tokom prevoza, sa jasnim evidencijama i pregledom merenja.",
    badge: "Praćenje robe",
  },
  {
    title: "Magacini",
    description:
      "Pouzdano praćenje temperature u skladištima i pomoćnim prostorima gde su stabilni uslovi kritični.",
    badge: "Stabilni uslovi",
  },
];

export default function Solutions() {
  return (
    <section
      id="resenja"
      className="relative overflow-hidden bg-[#FBFCFD] px-4 py-14 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-100px] top-10 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute bottom-10 left-[-80px] h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#123A5A]">
            Rešenja
          </span>

          <h2 className="mb-5 text-3xl font-bold text-[#0B1B2B] sm:text-4xl md:text-5xl">
            Napravljeno za industrije gde temperatura odlučuje
          </h2>

          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed">
            ColdControl Systems je prilagođen okruženjima u kojima su stabilni
            uslovi, brza reakcija i jasna evidencija od ključnog značaja.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.14)] sm:rounded-[28px] sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B2B] text-white shadow-lg sm:h-14 sm:w-14">
                  <span className="text-lg font-bold sm:text-xl">
                    {item.title.charAt(0)}
                  </span>
                </div>

                <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-[#9A6B00]">
                  {item.badge}
                </span>
              </div>

              <h3 className="mb-4 text-xl font-bold text-[#0B1B2B] sm:text-2xl">
                {item.title}
              </h3>

              <p className="mb-8 leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-[#123A5A] opacity-80">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span>Monitoring i alarmi u realnom vremenu</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-slate-200 bg-[#F5F8FB] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:mt-16 sm:rounded-[30px] sm:p-8 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Jedna platforma, više primena
              </p>

              <h3 className="mb-4 text-2xl font-bold text-[#0B1B2B] sm:text-3xl md:text-4xl">
                Od jedne lokacije do kompletnog sistema
              </h3>

              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Bilo da pratiš jedan frižider u apoteci ili više objekata sa
                više senzora, sistem ostaje pregledan, brz i jednostavan za
                upravljanje.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-2xl font-bold text-[#0B1B2B] sm:text-3xl">24/7</p>
                <p className="text-sm text-slate-600">stalni nadzor sistema</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-2xl font-bold text-[#0B1B2B] sm:text-3xl">Real-time</p>
                <p className="text-sm text-slate-600">pregled temperature</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-2xl font-bold text-[#0B1B2B] sm:text-3xl">Alarm</p>
                <p className="text-sm text-slate-600">brza reakcija na problem</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-2xl font-bold text-[#0B1B2B] sm:text-3xl">Cloud</p>
                <p className="text-sm text-slate-600">sve na jednom mestu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}