const pharmaItems = [
  {
    title: "Apoteke",
    description:
      "Kontinuirano praćenje temperature frižidera za vakcine, biološke proizvode, lekove i druge termolabilne farmaceutske supstance, uz evidenciju, alarme i izveštaje za internu kontrolu.",
    badge: "Primarni sektor",
  },
  {
    title: "Lanci apoteka",
    description:
      "Centralizovan pregled više lokacija, više frižidera i više senzora iz jedne kontrolne table, sa jasnim statusom svakog objekta i istorijom temperaturnih uslova.",
    badge: "Više lokacija",
  },
  {
    title: "Zdravstvene ustanove",
    description:
      "Nadzor rashladnih uređaja u ordinacijama, klinikama i zdravstvenim objektima gde je važno očuvanje uslova čuvanja farmaceutskih proizvoda.",
    badge: "2–8°C nadzor",
  },
];

const otherItems = [
  {
    title: "Logistika i skladištenje",
    description:
      "Praćenje temperaturnih uslova u skladištenju i distribuciji robe koja zahteva stabilan temperaturni režim.",
    badge: "Hladni lanac",
  },
  {
    title: "Hladnjače",
    description:
      "Nadzor komora, skladišta i rashladnih zona uz alarm i istoriju temperature za svaki objekat.",
    badge: "24/7 nadzor",
  },
  {
    title: "Prehrambeni objekti",
    description:
      "Praćenje hladnih sistema za restorane, supermarkete i objekte gde je evidencija temperature važna za svakodnevnu kontrolu.",
    badge: "HACCP podrška",
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
            Farmaceutski monitoring temperature
            <span className="block text-[#123A5A]">sa evidencijom za kontrolu</span>
          </h2>

          <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-relaxed">
            ColdControl je namenjen objektima gde temperaturni uslovi nisu samo
            tehničko pitanje, već deo odgovornosti, evidencije i pripreme za
            internu ili regulatornu proveru.
          </p>
        </div>

        <div className="mb-12 rounded-[30px] border border-[#123A5A]/10 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 md:p-10">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#123A5A]">
              Farmaceutski sektor
            </p>

            <h3 className="mb-4 text-2xl font-bold text-[#0B1B2B] sm:text-3xl md:text-4xl">
              Za apoteke, lance apoteka i zdravstvene objekte
            </h3>

            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Fokus je na kontroli frižidera i rashladnih uređaja u kojima se
              čuvaju proizvodi osetljivi na temperaturu: vakcine, biološki
              proizvodi, lekovi i druge farmaceutske supstance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 xl:gap-8">
            {pharmaItems.map((item) => (
              <div
                key={item.title}
                className="group rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:rounded-[28px] sm:p-8"
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

                <div className="flex items-center gap-2 text-sm font-medium text-[#123A5A] opacity-90">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span>2–8°C, alarmi, izveštaji i audit log</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 rounded-[30px] border border-slate-200 bg-[#F5F8FB] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-8 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                Šira primena sistema
              </p>

              <h3 className="mb-4 text-2xl font-bold text-[#0B1B2B] sm:text-3xl md:text-4xl">
                Isti sistem se može koristiti i van farmacije
              </h3>

              <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                ColdControl može pratiti i druge temperaturno osetljive sisteme,
                ali farmaceutski sektor ostaje najvažnija primena kada su dokaz,
                evidencija i odgovornost ključni deo rada.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-2xl font-bold text-[#0B1B2B] sm:text-3xl">24/7</p>
                <p className="text-sm text-slate-600">kontinuirani nadzor</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-2xl font-bold text-[#0B1B2B] sm:text-3xl">Audit</p>
                <p className="text-sm text-slate-600">trag događaja</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-2xl font-bold text-[#0B1B2B] sm:text-3xl">Alarm</p>
                <p className="text-sm text-slate-600">reakcija na odstupanje</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="mb-1 text-2xl font-bold text-[#0B1B2B] sm:text-3xl">Cloud</p>
                <p className="text-sm text-slate-600">jedna kontrolna tabla</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3 xl:gap-8">
            {otherItems.map((item) => (
              <div
                key={item.title}
                className="group rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:rounded-[28px] sm:p-8"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1B2B] text-white shadow-lg sm:h-14 sm:w-14">
                    <span className="text-lg font-bold sm:text-xl">
                      {item.title.charAt(0)}
                    </span>
                  </div>

                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-[#123A5A]">
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
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span>Monitoring i alarmi u realnom vremenu</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[#123A5A]/10 bg-[#0B1B2B] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-8 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Jedna platforma, više nivoa kontrole
              </p>

              <h3 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                Od jednog farmaceutskog frižidera do kompletnog lanca lokacija
              </h3>

              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Bilo da pratiš jedan frižider u apoteci ili više lokacija sa
                više senzora, sistem ostaje pregledan: trenutna temperatura,
                istorija, alarmi, min/max vrednosti i izveštaji su dostupni na
                jednom mestu.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                ColdControl obezbeđuje
              </p>

              <ul className="space-y-3 text-white/75">
                <li>• kontinuirano praćenje 24/7</li>
                <li>• automatski zapis temperature</li>
                <li>• min/max vrednosti</li>
                <li>• alarm pri odstupanju</li>
                <li>• audit log i istoriju događaja</li>
                <li>• izveštaje za internu kontrolu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}