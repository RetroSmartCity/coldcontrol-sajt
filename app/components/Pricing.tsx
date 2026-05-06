import Link from "next/link";

const plans = [
  {
    name: "Compliance početak",
    subtitle: "Za jednu lokaciju i osnovnu automatsku evidenciju temperature",
    price: "Cena na upit",
    monthly: "Mesečni model po senzoru",
    badge: "Početni paket",
    highlight: false,
    description:
      "Početni paket za objekte koji žele da pređu sa ručnog zapisivanja temperature na automatsku evidenciju, alarmiranje i pregled istorije merenja.",
    note:
      "Ponuda se formira prema broju senzora, tipu objekta i načinu korišćenja. Cena se sastoji od jednokratne cene uređaja i mesečnog održavanja po senzoru.",
    features: [
      "Uređaj sa senzorima prema potrebi objekta",
      "Instalacija na lokaciji",
      "Osnovna obuka za odgovorno lice",
      "Cloud pregled temperature i statusa",
      "Automatski alarm pri odstupanju",
      "Istorija merenja i min/max vrednosti",
      "Garancija na uređaje",
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
    price: "Cena na upit",
    monthly: "Mesečni model po senzoru",
    badge: "Najčešći izbor",
    highlight: true,
    description:
      "Paket za objekte kojima je potrebno više mernih tačaka, jasnija sledljivost podataka i pregled stanja po frižiderima, zonama ili odgovornim lokacijama.",
    note:
      "Sistem se prilagođava realnom rasporedu frižidera, zona i načinu rada. Dodatni senzori se uključuju prema potrebi objekta.",
    features: [
      "Uređaj sa više mernih tačaka",
      "Dodavanje dodatnih senzora po potrebi",
      "Pregled više frižidera ili zona",
      "Centralni cloud dashboard",
      "Istorija, min/max i alarm logika",
      "Lakše praćenje više temperaturnih tačaka",
      "Prilagođavanje rastu sistema",
    ],
    extra: [
      "Cena zavisi od broja senzora",
      "Manje ručne evidencije i manje grešaka",
      "Pogodno za ozbiljniju internu kontrolu",
    ],
  },
  {
    name: "Lanci i veći sistemi",
    subtitle: "Za više objekata, više lokacija i centralizovan compliance pregled",
    price: "Individualna ponuda",
    monthly: "Mesečni model po senzoru",
    badge: "Za veće sisteme",
    highlight: false,
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
      "Cena se formira prema obimu sistema",
      "Pogodno za fazno uvođenje po lokacijama",
      "Stabilan model za dugoročan rast sistema",
    ],
  },
];

const offerHighlights = [
  {
    title: "Cena uređaja",
    text: "jednokratno, prema konfiguraciji",
  },
  {
    title: "Mesečno",
    text: "po aktivnom senzoru",
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
  "Uređaj sa senzorima prema potrebi objekta",
  "Instalacija na lokaciji",
  "Osnovna obuka za odgovorno lice",
  "Garancija na uređaje",
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
  "Ponuda se sastoji od jednokratne cene uređaja i mesečnog modela po senzoru.",
  "Cena uređaja zavisi od konfiguracije i broja potrebnih mernih tačaka.",
  "Mesečni model obuhvata cloud pristup, istoriju podataka, alarm logiku i održavanje sistema.",
  "Dodatni senzori se dodaju prema realnoj potrebi objekta.",
  "Za veće sisteme i lance formira se posebna ponuda prema broju lokacija i ukupnom broju senzora.",
  "Cilj je da sistem bude prilagođen stvarnom radu objekta, a ne generičkom paketu.",
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
      "Za lance i veće sisteme dobija se centralizovan pregled svih objekata, jasnija odgovornost i model prilagođen obimu sistema.",
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
    question: "Zašto cena nije prikazana odmah?",
    answer:
      "Zato što cena zavisi od broja senzora, broja frižidera, broja lokacija i načina korišćenja sistema. Ponuda se pravi prema stvarnoj potrebi objekta.",
  },
  {
    question: "Od čega se sastoji cena?",
    answer:
      "Cena se sastoji od jednokratne cene uređaja i mesečnog modela po senzoru. Tako korisnik plaća konfiguraciju koja mu stvarno treba.",
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
            Ponuda se formira prema
            <span className="block text-yellow-400">
              realnom broju senzora
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
                Model ponude
              </p>

              <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                Cena uređaja + mesečno po senzoru
              </h3>

              <p className="mb-3 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Sistem se ne naplaćuje kao generički paket, već prema realnoj
                potrebi objekta. Prvo se određuje broj mernih tačaka, zatim se
                formira cena uređaja i mesečni model po aktivnom senzoru.
              </p>

              <p className="mb-3 text-base leading-7 text-white/68">
                Na taj način korisnik dobija tačno ono što mu treba: uređaj,
                senzore, cloud evidenciju, alarmiranje, istoriju merenja i jasniji
                trag za internu kontrolu.
              </p>

              <p className="text-sm text-white/58">
                Konačna ponuda zavisi od broja senzora, broja lokacija i nivoa
                organizacije sistema.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-black/10 p-4 sm:p-5">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-white/45">
                U ponudu ulazi
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
                  <p className="text-sm text-white/50">Ponuda</p>

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
                    Zatraži ponudu
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
                  uređaj + mesečno po senzoru
                </span>
              </h3>

              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Korisnik odmah razume da se sistem sastoji od opreme koja se
                postavlja na lokaciji i mesečnog modela koji prati broj aktivnih
                senzora. Tako se ponuda prilagođava stvarnom objektu, umesto da
                svi plaćaju isti paket.
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
            Konačna ponuda zavisi od broja lokacija, ukupnog broja senzora,
            rasporeda frižidera i potrebnog nivoa izveštavanja. Model je
            postavljen tako da jasno razdvaja cenu uređaja i mesečni trošak po
            senzoru, uz cilj da sistem bude realno prilagođen objektu.
          </p>
        </div>
      </div>
    </section>
  );
}