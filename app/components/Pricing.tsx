import Link from "next/link";

const plans = [
  {
    name: "Compliance početak",
    subtitle: "Za jednu lokaciju i osnovnu automatsku evidenciju temperature",
    price: "99€",
    oldPrice: "199€",
    monthly: "4€ mesečno po senzoru",
    badge: "Promo paket",
    highlight: false,
    accent: "cyan",
    description:
      "Početni paket za objekte koji žele da pređu sa ručnog zapisivanja temperature na automatsku evidenciju, alarmiranje i pregled istorije merenja.",
    note:
      "Promo cena uređaja je 99€, umesto redovne cene od 199€. Paket je namenjen brzom ulasku u sistem bez velikog početnog ulaganja.",
    features: [
      "Uređaj sa 3 senzora uključen u cenu",
      "Besplatna instalacija na lokaciji",
      "Osnovna obuka za odgovorno lice",
      "Cloud pregled temperature i statusa",
      "Automatski alarm pri odstupanju",
      "Istorija merenja i min/max vrednosti",
      "Garancija na uređaje 12 meseci",
    ],
    extra: [
      "Automatska evidencija bez ručnog upisa",
      "Podaci dostupni za internu proveru",
      "Mogućnost kasnijeg proširenja sistema",
    ],
  },
  {
    name: "Compliance prošireni",
    subtitle: "Za više frižidera, više zona i ozbiljniji nadzor uslova čuvanja",
    price: "Početak od 99€",
    oldPrice: "",
    monthly: "4€ mesečno po senzoru",
    badge: "Najčešći izbor",
    highlight: true,
    accent: "yellow",
    description:
      "Paket za objekte kojima je potrebno više mernih tačaka, jasnija sledljivost podataka i pregled stanja po frižiderima, zonama ili odgovornim lokacijama.",
    note:
      "Osnovni uređaj dolazi sa 3 senzora, a dodatni senzori se uključuju prema rasporedu frižidera, zona i realnoj organizaciji rada.",
    features: [
      "Početni uređaj sa 3 senzora",
      "Dodavanje dodatnih senzora po potrebi",
      "Pregled više mernih tačaka",
      "Centralni cloud dashboard",
      "Istorija, min/max i alarm logika",
      "Lakše praćenje više frižidera ili zona",
      "Prilagođavanje rastu sistema",
    ],
    extra: [
      "Dodatni senzor 30€ jednokratno",
      "Manje ručne evidencije i manje grešaka",
      "Pogodno za ozbiljniju internu kontrolu",
    ],
  },
  {
    name: "Lanci i veći sistemi",
    subtitle: "Za više objekata, više lokacija i centralizovan compliance pregled",
    price: "Po dogovoru",
    oldPrice: "",
    monthly: "već od 3,2€ po senzoru mesečno",
    badge: "Za veće sisteme",
    highlight: false,
    accent: "cyan",
    description:
      "Model za apotekarske lance, veće sisteme i organizacije koje žele centralizovan pregled više objekata, uređaja, senzora i temperaturnih zona.",
    note:
      "Za veće sisteme formira se posebna ponuda prema broju lokacija, ukupnom broju senzora, organizaciji korisnika i potrebnom nivou izveštavanja.",
    features: [
      "Više lokacija i više uređaja",
      "Centralni pregled svih objekata",
      "Organizacija po lokacijama i zonama",
      "Jasan status svake merne tačke",
      "Fleksibilno širenje po potrebi",
      "Prilagođavanje strukturi firme",
      "Povoljniji model za veći obim sistema",
    ],
    extra: [
      "Niža cena po senzoru za veće sisteme",
      "Pogodno za fazno uvođenje po lokacijama",
      "Stabilan model za dugoročan rast sistema",
    ],
  },
];

const offerHighlights = [
  {
    title: "99€",
    text: "promo cena uređaja",
  },
  {
    title: "3 senzora",
    text: "uključena u početni paket",
  },
  {
    title: "24/7",
    text: "kontinuirana evidencija",
  },
  {
    title: "Audit",
    text: "trag merenja i događaja",
  },
];

const starterIncludes = [
  "Uređaj sa 3 senzora",
  "Besplatna instalacija",
  "Osnovna obuka za odgovorno lice",
  "Garancija na uređaje 12 meseci",
  "Cloud pregled, istorija, min/max i alarm logika",
];

const whyItMatters = [
  {
    title: "Bez ručnog upisivanja",
    text:
      "Temperatura se više ne vodi ručno u sveskama, formularima ili tabelama. Sistem automatski beleži podatke i čuva ih na jednom mestu.",
  },
  {
    title: "Dokaz o uslovima čuvanja",
    text:
      "Umesto pojedinačnog očitavanja u jednom trenutku, dobija se istorija kretanja temperature, min/max vrednosti i trag alarma.",
  },
  {
    title: "Manje prostora za propust",
    text:
      "Automatsko očitavanje i alarmi smanjuju rizik da se odstupanje primeti prekasno ili da evidencija ostane nepotpuna.",
  },
];

const pricingNotes = [
  "Promo cena uređaja iznosi 99€, umesto redovne cene od 199€.",
  "Početni paket uključuje uređaj sa 3 senzora, instalaciju i osnovnu obuku.",
  "Garancija na uređaje traje 12 meseci.",
  "Dodatni senzori se doplaćuju 30€ jednokratno po senzoru.",
  "Cloud pristup, istorija i alarm logika uključeni su kroz mesečni model.",
  "Za veće sisteme i lance cena po senzoru može biti povoljnija.",
];

const examples = [
  {
    title: "Jedna apoteka",
    text:
      "Dobar početak za objekat koji želi da zameni ručni zapis automatskom evidencijom temperature i alarmiranjem pri odstupanju.",
  },
  {
    title: "Više frižidera ili zona",
    text:
      "Kada postoji više mesta za nadzor, sistem se proširuje dodatnim senzorima, bez menjanja osnovne logike rada.",
  },
  {
    title: "Više lokacija",
    text:
      "Za lance i veće sisteme dobija se centralizovan pregled svih objekata, jasnija odgovornost i bolja cena po senzoru.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Procena mernih tačaka",
    text:
      "Na osnovu objekta, broja frižidera, zona i načina rada određuje se gde je najvažnije postaviti senzore.",
  },
  {
    step: "02",
    title: "Instalacija i obuka",
    text:
      "Uređaj i senzori se postavljaju, sistem se povezuje, a odgovorno lice dobija osnovnu obuku za svakodnevno korišćenje.",
  },
  {
    step: "03",
    title: "Automatska evidencija",
    text:
      "Temperatura se prati 24/7, podaci se čuvaju, a alarmi i istorija ostaju dostupni za internu kontrolu i inspekcijski uvid.",
  },
];

const faqs = [
  {
    question: "Da li početni paket dolazi spreman za rad?",
    answer:
      "Da. Početni paket uključuje uređaj sa 3 senzora, instalaciju i osnovnu obuku, tako da sistem može brzo da se uvede u svakodnevni rad.",
  },
  {
    question: "Da li kasnije mogu da dodam još senzora?",
    answer:
      "Da. Sistem je napravljen tako da može da se širi po potrebi, bez komplikovanog prelaska na potpuno novo rešenje.",
  },
  {
    question: "Šta se menja u odnosu na ručno vođenje evidencije?",
    answer:
      "Umesto ručnog očitavanja i upisivanja, sistem meri i beleži temperaturu automatski. Podaci su na jednom mestu, sa istorijom, min/max vrednostima i alarmima.",
  },
  {
    question: "Zašto je kontinuirano merenje bitno?",
    answer:
      "Ručno merenje pokazuje samo temperaturu u trenutku provere. Kontinuirano merenje pokazuje šta se dešavalo tokom celog dana i noći, uključujući odstupanja između dve provere.",
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
            Cene i compliance paketi
          </span>

          <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Automatska evidencija temperature
            <span className="block text-yellow-400">
              bez komplikovanog početka
            </span>
          </h2>

          <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            ColdControl omogućava brz prelazak sa ručnog upisivanja temperature
            na automatsko merenje, alarmiranje, istoriju podataka i izveštaje
            spremne za internu proveru ili inspekcijski uvid.
          </p>
        </div>

        <div className="mb-8 rounded-[24px] border border-cyan-400/15 bg-white/[0.05] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 md:p-7">
          <div className="grid gap-6 md:grid-cols-[1fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Promo početak
              </p>

              <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                Uređaj redovno
                <span className="ml-2 line-through text-white/45">199€</span>
                <span className="ml-3 text-yellow-400">promo 99€</span>
              </h3>

              <p className="mb-3 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Početni paket je namenjen objektima koji žele da uvedu
                automatsku evidenciju temperature bez velikog ulaganja na startu.
                U cenu ulazi uređaj sa 3 senzora, instalacija i osnovna obuka.
              </p>

              <p className="mb-3 text-base leading-7 text-white/68">
                Sistem automatski meri, beleži i čuva podatke, prikazuje istoriju
                merenja, min/max vrednosti i šalje alarm kada temperatura izađe
                iz definisanog opsega.
              </p>

              <p className="text-sm text-white/58">
                Cloud pristup i održavanje uključeni su kroz mesečni model, dok
                garancija na uređaje traje 12 meseci.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/10 p-4 sm:p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-white/45">
                U početni paket ulazi
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

        <div className="mb-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
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
                  className={`relative mb-5 rounded-2xl border px-4 py-4 ${
                    isHighlight
                      ? "border-yellow-400/20 bg-yellow-400/10"
                      : "border-white/10 bg-black/10"
                  }`}
                >
                  <p className="text-sm text-white/50">Cena</p>

                  {plan.oldPrice ? (
                    <p className="mt-2 text-sm text-white/45 line-through">
                      {plan.oldPrice}
                    </p>
                  ) : null}

                  <p className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
                    {plan.price}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-cyan-200">
                    {plan.monthly}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {plan.description}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/58">
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

        <div className="mb-10 rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:rounded-[30px] sm:p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {whyItMatters.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/10 p-4"
              >
                <p className="mb-2 text-lg font-bold text-white">{item.title}</p>
                <p className="text-sm leading-6 text-white/68">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:rounded-[30px] sm:p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-8">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/45">
                Kako je ponuda postavljena
              </p>

              <h3 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                Jasna struktura
                <span className="block text-yellow-400">
                  od jedne merne tačke do više lokacija
                </span>
              </h3>

              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Korisnik odmah vidi šta dobija u početnom paketu, kako se sistem
                uvodi i kako kasnije raste. Umesto razbacane evidencije, dobija
                centralizovan pregled temperature, alarma, istorije i statusa
                svake merne tačke.
              </p>
            </div>

            <div className="space-y-3">
              {pricingNotes.map((item) => (
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

        <div className="mb-10 rounded-[24px] border border-cyan-400/15 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:p-6 md:p-8">
          <div className="mb-5 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-cyan-200">
              Primer primene
            </p>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Sistem prati realan rad objekta
              <span className="block text-yellow-400">
                a ne samo pojedinačna ručna očitavanja
              </span>
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

        <div className="mb-10 rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:rounded-[28px] sm:p-6 md:p-8">
          <div className="mb-6 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/45">
              Kako izgleda uvođenje
            </p>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Od procene merne tačke do
              <span className="block text-yellow-400">
                automatske evidencije temperature
              </span>
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-black/10 p-5"
              >
                <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-cyan-200">
                  {item.step}
                </p>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="text-sm leading-6 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-[24px] border border-white/10 bg-white/[0.05] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:rounded-[28px] sm:p-6 md:p-8">
          <div className="mb-6 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/45">
              Česta pitanja
            </p>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Ono što odgovorno lice
              <span className="block text-yellow-400">najčešće želi da zna</span>
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-black/10 p-4"
              >
                <p className="mb-2 text-base font-bold text-white">{item.question}</p>
                <p className="text-sm leading-6 text-white/68">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="mx-auto max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
            Prikazane cene i paketi služe kao orijentir za uvođenje sistema.
            Konačna ponuda za veće sisteme zavisi od broja lokacija, ukupnog
            broja senzora i načina organizacije, ali cilj ostaje isti: automatska
            evidencija, brža reakcija na odstupanje i jasniji dokaz o uslovima
            čuvanja.
          </p>
        </div>
      </div>
    </section>
  );
}