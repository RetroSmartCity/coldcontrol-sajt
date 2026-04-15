import Link from "next/link";

const plans = [
  {
    name: "Apoteka",
    subtitle: "Najbolji ulazak u sistem za jednu lokaciju ili početno uvođenje",
    price: "99€",
    monthly: "12€ mesečno minimum",
    note: "Promo period važi za prvih 100 apoteka. U cenu ulazi uređaj sa 3 senzora, besplatna instalacija i osnovna obuka. Garancija na uređaje traje 12 meseci, dok održavanje sistema i cloud pristup kreću odmah po aktivaciji sistema.",
    highlight: false,
    badge: "Promo period",
    features: [
      "Uređaj sa 3 senzora uključen u cenu",
      "Minimum 3 senzora po uređaju",
      "Besplatna instalacija",
      "Besplatna osnovna obuka",
      "Garancija na uređaje 12 meseci",
      "Praćenje temperature 24/7",
      "Alarm pri odstupanju temperature",
      "Cloud pregled i istorija merenja",
    ],
    extra: [
      "Mesečno održavanje 4€ po senzoru",
      "Osnovni minimum je 12€ mesečno po uređaju",
      "Dodatni senzor 30€ jednokratno",
    ],
  },
  {
    name: "Više lokacija",
    subtitle: "Za korisnike koji žele ozbiljniji pregled više frižidera, prostorija ili objekata",
    price: "99€ + proširenje",
    monthly: "4€ po senzoru mesečno",
    note: "Osnovni uređaj dolazi sa 3 senzora. Svaki dodatni senzor se doplaćuje 30€ jednokratno. Održavanje sistema i cloud pristup naplaćuju se od početka korišćenja sistema.",
    highlight: true,
    badge: "Najtraženije",
    features: [
      "Početak od promo uređaja sa 3 senzora",
      "Dodatni senzor 30€ jednokratno",
      "Minimum 3 senzora po uređaju",
      "Mesečno održavanje 4€ po senzoru",
      "Pregled više mernih tačaka",
      "Centralni cloud dashboard",
      "Istorija, status i alarm logika",
      "Lako proširenje sistema po potrebi",
    ],
    extra: [
      "Pogodno za objekte sa više frižidera ili više zona",
      "Jasna računica bez skrivenih troškova",
      "Sistem raste kako raste potreba korisnika",
    ],
  },
  {
    name: "Lanci",
    subtitle: "Za veći broj apoteka i centralno upravljanje većim sistemom",
    price: "Po dogovoru",
    monthly: "Već od 3€ po senzoru",
    note: "Za lance i veće sisteme formira se posebna promo ponuda. Što je veći ukupan broj senzora i lokacija, to je povoljnija cena održavanja po senzoru. Održavanje i cloud usluga obračunavaju se od početka korišćenja sistema.",
    highlight: false,
    badge: "Za veće sisteme",
    features: [
      "Više lokacija i više uređaja",
      "Minimum 3 senzora po uređaju",
      "Centralni pregled svih objekata",
      "Već od 3€ po senzoru mesečno",
      "Lakša kontrola većeg sistema",
      "Prilagođavanje prema realnoj organizaciji firme",
      "Fazno uvođenje sistema po lokacijama",
      "Povoljniji model za veće količine",
    ],
    extra: [
      "Najbolja opcija za rast sistema bez rušenja organizacije",
      "Niža cena po senzoru za veće korisnike",
      "Komercijalni model prilagođen lancima",
    ],
  },
];

const offerHighlights = [
  {
    title: "99€",
    text: "promo uređaj sa 3 senzora",
  },
  {
    title: "30€",
    text: "po dodatnom senzoru",
  },
  {
    title: "4€",
    text: "mesečno po senzoru",
  },
  {
    title: "3€+",
    text: "po senzoru za lance",
  },
];

const starterIncludes = [
  "Uređaj sa 3 senzora u promo ceni od 99€",
  "Besplatna instalacija na lokaciji",
  "Besplatna osnovna obuka za korišćenje sistema",
  "Garancija na uređaje 12 meseci",
  "Cloud pregled, status i alarm logika",
];

const promoRules = [
  "Promo period važi za prvih 100 apoteka.",
  "Osnovna promo cena iznosi 99€ za uređaj sa 3 senzora.",
  "Minimum je 3 senzora po uređaju.",
  "Svaki dodatni senzor iznosi 30€ jednokratno.",
  "Održavanje sistema i cloud pristup naplaćuju se od početka korišćenja sistema.",
  "Održavanje iznosi 4€ po senzoru mesečno.",
  "Za lance i veće sisteme cena održavanja ide već od 3€ po senzoru mesečno.",
  "Garancija na uređaje traje 12 meseci i ne menja mesečni model održavanja.",
];

const examples = [
  {
    title: "1 uređaj / 3 senzora",
    text: "99€ početno + 12€ mesečno održavanje od starta korišćenja",
  },
  {
    title: "1 uređaj / 5 senzora",
    text: "99€ + 60€ za 2 dodatna senzora + 20€ mesečno održavanje",
  },
  {
    title: "10 uređaja / 30 senzora",
    text: "Posebna ponuda za veći sistem i niža cena održavanja po senzoru",
  },
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
            Promo cene
          </span>

          <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Jasna ponuda za ulazak u sistem
            <span className="block text-yellow-400">i ozbiljan prostor za rast</span>
          </h2>

          <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Ne ideš sa komplikovanom pričom. Ulaziš sa promo uređajem od 99€,
            dobijaš 3 senzora, instalaciju i obuku, a mesečno održavanje sistema
            i cloud pristup kreću odmah od početka korišćenja. Garancija na uređaje
            traje 12 meseci i predstavlja odvojenu stavku.
          </p>
        </div>

        <div className="mb-8 rounded-[24px] border border-cyan-400/15 bg-white/[0.05] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 md:p-7">
          <div className="grid gap-6 md:grid-cols-[1fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Promo period za prvih 100 apoteka
              </p>

              <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                Početak već od
                <span className="ml-2 text-yellow-400">99€</span>
              </h3>

              <p className="mb-3 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                U promo cenu ulazi uređaj sa 3 senzora, besplatna instalacija i
                osnovna obuka. Garancija na uređaje traje 12 meseci. Održavanje
                sistema i cloud pristup naplaćuju se odmah od početka korišćenja
                sistema i iznose 4€ po senzoru mesečno, dok za lance i veće sisteme
                cena ide već od 3€ po senzoru mesečno.
              </p>

              <p className="text-sm text-white/60">
                Minimum je 3 senzora po uređaju, što znači da osnovni mesečni
                model kreće od 12€ po uređaju.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/10 p-4 sm:p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-white/45">
                U promo cenu ulazi
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

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <p className="mb-1 text-2xl font-bold text-white">{item.title}</p>
              <p className="text-sm text-white/60">{item.text}</p>
            </div>
          ))}
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
                  <p className="text-sm text-white/50">Početna cena</p>

                  <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                    {plan.price}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-cyan-200">
                    {plan.monthly}
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
                    className={`rounded-2xl border px-5 py-3 text-center text-sm font-bold transition duration-300 hover:scale-[1.02] ${
                      isHighlight
                        ? "border-yellow-400 bg-yellow-400 text-black shadow-[0_14px_34px_rgba(250,204,21,0.25)] hover:shadow-[0_18px_40px_rgba(250,204,21,0.35)]"
                        : "border-cyan-400/30 bg-[#0B1B2B] text-white shadow-[0_10px_24px_rgba(0,0,0,0.28)] hover:bg-[#10263A]"
                    }`}
                  >
                    Zakaži demo
                  </Link>

                  <Link
                    href="/primer-ugovora"
                    className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white/90 transition duration-300 hover:bg-white/10"
                  >
                    Primer ugovora
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
                Pravila promo perioda
              </p>

              <h3 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                Komercijalni model
                <span className="block text-yellow-400">koji odmah ima smisla</span>
              </h3>

              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Kupac odmah mora da razume tri stvari: koliko plaća ulazak,
                koliko plaća mesečno održavanje i šta tačno pokriva garancija.
                Zato su početna cena, mesečni model i garancija jasno odvojeni.
              </p>
            </div>

            <div className="space-y-3">
              {promoRules.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                >
                  <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-yellow-400" />
                  <span className="text-sm leading-6 text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-cyan-400/15 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6 md:p-8">
          <div className="mb-5 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-cyan-200">
              Primer računice
            </p>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Kupac odmah vidi
              <span className="block text-yellow-400">kako se formira cena</span>
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {examples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/10 p-4"
              >
                <p className="mb-2 text-lg font-bold text-white">{item.title}</p>
                <p className="text-sm leading-6 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
            Prikazane cene važe u promo periodu. Konačna ponuda za veće sisteme
            zavisi od broja lokacija, ukupnog broja senzora, načina alarma i
            organizacije prikaza u dashboard-u.
          </p>
        </div>
      </div>
    </section>
  );
}