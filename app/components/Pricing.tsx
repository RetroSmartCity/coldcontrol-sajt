import Link from "next/link";

const plans = [
  {
    name: "Starter",
    subtitle: "Za jednu lokaciju i manji broj senzora",
    price: "Već od 299€",
    note: "Uređaj sa do 5 senzora i prvom godinom cloud pristupa uključenom u paket.",
    highlight: false,
    badge: "Za početak",
    accent: "cyan",
    features: [
      "Praćenje temperature u realnom vremenu",
      "Uređaj sa do 5 senzora",
      "Prikaz jedne lokacije",
      "Alarm pri izlasku iz opsega",
      "Osnovni cloud dashboard pregled",
      "Istorija merenja",
      "Prva godina cloud pristupa gratis",
    ],
    extra: [
      "Odlično za apoteke, manje hladne komore i manje objekte",
      "Brz početak bez komplikovane infrastrukture",
      "Jasna osnova za kasnije proširenje sistema",
    ],
  },
  {
    name: "Business",
    subtitle: "Za više lokacija i ozbiljniji svakodnevni rad",
    price: "Po dogovoru",
    note: "Formira se prema broju lokacija, broju senzora, alarm logici i potrebnim izveštajima.",
    highlight: true,
    badge: "Najtraženije",
    accent: "yellow",
    features: [
      "Više lokacija i više senzora",
      "Centralni cloud dashboard",
      "Alarmi i brža reakcija",
      "Pregled istorije i izveštaja",
      "Praktična logika za realan rad",
      "Bolja organizacija sistema za firme sa više objekata",
      "Fleksibilno proširenje sistema",
    ],
    extra: [
      "Najbolje za firme koje žele centralni pregled više objekata",
      "Lakše praćenje rada i brža reakcija na odstupanja",
      "Prilagođavanje prema realnoj organizaciji korisnika",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Za veće sisteme i naprednu organizaciju",
    price: "Po dogovoru",
    note: "Prilagođeno rešenje za veći broj objekata, posebne zahteve i širu organizaciju sistema.",
    highlight: false,
    badge: "Napredno",
    accent: "cyan",
    features: [
      "Veći broj objekata i senzora",
      "Naprednija organizacija sistema",
      "Prilagođavanje potrebama korisnika",
      "Skaliranje sistema po rastu firme",
      "Dogovor oko posebnih zahteva",
      "Napredniji pregled i organizacija podataka",
      "Model koji prati širenje poslovanja",
    ],
    extra: [
      "Za ozbiljnije sisteme sa više organizacionih jedinica",
      "Veća sloboda u prilagođavanju logike i strukture",
      "Fokus na dugoročnu stabilnost i rast sistema",
    ],
  },
];

const offerHighlights = [
  {
    title: "1+",
    text: "lokacija ili više",
  },
  {
    title: "WiFi",
    text: "senzori i cloud pregled",
  },
  {
    title: "Alarm",
    text: "upozorenje na odstupanje",
  },
  {
    title: "Skaliranje",
    text: "rast sistema po potrebi",
  },
];

const starterIncludes = [
  "Uređaj za početno postavljanje sistema",
  "Povezivanje do 5 senzora u okviru Starter paketa",
  "Cloud pristup uključen prvu godinu",
  "Osnovni pregled merenja i statusa",
  "Jasna polazna osnova za dalje proširenje",
];

export default function Pricing() {
  return (
    <section
      id="cene"
      className="relative overflow-hidden bg-[#071521] px-4 py-14 text-white sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-60px] h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_38%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Cene
          </span>

          <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Fleksibilan model prema
            <span className="block text-yellow-400">broju lokacija i senzora</span>
          </h2>

          <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Sistem se prilagođava prema stvarnoj potrebi: broj objekata, broj senzora,
            način alarma i nivo pregleda koji ti je potreban u svakodnevnom radu.
          </p>
        </div>

        <div className="mb-8 rounded-[24px] border border-cyan-400/15 bg-white/[0.05] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 md:p-7">
          <div className="grid gap-6 md:grid-cols-[1fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Starter ponuda
              </p>

              <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                Cena već od
                <span className="ml-2 text-yellow-400">299€</span>
              </h3>

              <p className="mb-3 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Starter paket je namenjen korisnicima koji žele da brzo krenu sa
                monitoringom temperature na jednoj lokaciji, bez komplikovanja sistema
                na početku. U cenu od 299€ ulazi uređaj, povezivanje 5 senzora i
                prva godina cloud pristupa.
              </p>

              <p className="text-sm text-white/60">
                Idealno za 1 lokaciju i početni sistem do 5 senzora.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/10 p-4 sm:p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-white/45">
                U cenu ulazi
              </p>

              <div className="space-y-3">
                {starterIncludes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />
                    <span className="text-sm leading-6 text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => {
            const isHighlight = plan.highlight;

            return (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col overflow-hidden rounded-[24px] border p-5 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:rounded-[28px] sm:p-6 ${
                  isHighlight
                    ? "border-yellow-400/30 bg-white/[0.08] shadow-[0_24px_80px_rgba(250,204,21,0.10)]"
                    : "border-white/10 bg-white/[0.05]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className={`absolute inset-x-0 top-0 h-24 ${
                      isHighlight
                        ? "bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_70%)]"
                        : "bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_70%)]"
                    }`}
                  />
                </div>

                <div className="relative mb-5 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {plan.subtitle}
                    </p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      isHighlight
                        ? "border border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
                        : "border border-cyan-400/20 bg-cyan-400/10 text-cyan-200"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div
                  className={`relative mb-6 rounded-2xl border px-4 py-4 ${
                    isHighlight
                      ? "border-yellow-400/20 bg-yellow-400/10"
                      : "border-white/10 bg-black/10"
                  }`}
                >
                  <p className="text-sm text-white/50">Cena</p>

                  <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                    {plan.price}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {plan.note}
                  </p>
                </div>

                <div className="mb-5 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                    >
                      <span
                        className={`mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full ${
                          isHighlight ? "bg-yellow-400" : "bg-cyan-400"
                        }`}
                      />
                      <span className="text-sm leading-6 text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="mb-3 text-xs uppercase tracking-[0.16em] text-white/45">
                    Dodatno
                  </p>

                  <div className="space-y-3">
                    {plan.extra.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span
                          className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                            isHighlight ? "bg-yellow-300" : "bg-cyan-300"
                          }`}
                        />
                        <span className="text-sm leading-6 text-white/72">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href="/zakazi-demo"
                    className={`rounded-2xl px-5 py-3 text-center text-sm font-bold transition duration-300 hover:scale-[1.02] ${
                      isHighlight
                        ? "bg-yellow-400 text-black shadow-[0_14px_34px_rgba(250,204,21,0.25)] hover:shadow-[0_18px_40px_rgba(250,204,21,0.35)]"
                        : "bg-white/90 text-[#071521] shadow-[0_10px_24px_rgba(255,255,255,0.10)] hover:bg-white"
                    }`}
                  >
                    Zakaži demo
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:mt-14 sm:rounded-[30px] sm:p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-8">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/45">
                Kako formiramo ponudu
              </p>

              <h3 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                Nije generička cena nego
                <span className="block text-yellow-400">realna ponuda za tvoj sistem</span>
              </h3>

              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                U obzir ulazi broj lokacija, broj senzora, način alarma, potreba za
                izveštajima i nivo organizacije koji želiš u dashboard-u. Starter
                paket ima jasnu početnu cenu, dok se veći paketi formiraju prema
                realnom obimu sistema.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {offerHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/10 p-4"
                >
                  <p className="mb-1 text-2xl font-bold text-white">{item.title}</p>
                  <p className="text-sm text-white/60">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
            Prikazane cene i paketi služe kao jasan orijentir. Konačna ponuda za veće
            sisteme zavisi od stvarnog broja lokacija, broja senzora, logike alarma i
            zahtevanog nivoa organizacije u cloud dashboard-u.
          </p>
        </div>
      </div>
    </section>
  );
}