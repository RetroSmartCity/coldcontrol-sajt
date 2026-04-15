import Link from "next/link";

const plans = [
  {
    name: "Početni paket",
    subtitle: "Za jednu lokaciju i brz, jednostavan ulazak u sistem",
    price: "99€",
    oldPrice: "199€",
    monthly: "4€ mesečno po senzoru",
    badge: "Promo ponuda",
    highlight: false,
    accent: "cyan",
    description:
      "Odličan izbor za korisnike koji žele da uvedu digitalno praćenje temperature bez komplikovanog početka i bez velikog početnog ulaganja.",
    note:
      "U promo ponudi uređaj je dostupan po ceni od 99€, umesto redovne cene od 199€.",
    features: [
      "Uređaj sa 3 senzora uključen u cenu",
      "Besplatna instalacija na lokaciji",
      "Osnovna obuka za korišćenje sistema",
      "Cloud pregled temperature i statusa",
      "Automatski alarm pri odstupanju",
      "Istorija merenja na jednom mestu",
      "Garancija na uređaje 12 meseci",
    ],
    extra: [
      "Jednostavan mesečni model za cloud i održavanje",
      "Sistem je odmah spreman za realan rad",
      "Kasnije proširenje je lako i pregledno",
    ],
  },
  {
    name: "Prošireni paket",
    subtitle: "Za više frižidera, više zona i ozbiljniji svakodnevni rad",
    price: "Početak od 99€",
    oldPrice: "",
    monthly: "4€ mesečno po senzoru",
    badge: "Najčešći izbor",
    highlight: true,
    accent: "yellow",
    description:
      "Praktično rešenje za korisnike kojima je potreban veći broj mernih tačaka i bolji pregled sistema kroz više senzora, uređaja ili lokacija.",
    note:
      "Osnovni uređaj dolazi sa 3 senzora, a dodatni senzori se uključuju po potrebi, u skladu sa objektom i organizacijom rada.",
    features: [
      "Početni uređaj sa 3 senzora",
      "Dodavanje dodatnih senzora po potrebi",
      "Bolji pregled više tačaka merenja",
      "Centralni cloud dashboard",
      "Istorija, status i alarm logika",
      "Lakše praćenje više frižidera ili zona",
      "Prilagođavanje rastu sistema",
    ],
    extra: [
      "Dodatni senzor 30€ jednokratno",
      "Pregledniji rad bez ručnog vođenja evidencije",
      "Pogodno za korisnike koji žele ozbiljniju kontrolu",
    ],
  },
  {
    name: "Lanci i veći sistemi",
    subtitle: "Za više objekata, više lokacija i centralizovan pregled",
    price: "Po dogovoru",
    oldPrice: "",
    monthly: "već od 3,2€ po senzoru mesecno",
    badge: "Za veće sisteme",
    highlight: false,
    accent: "cyan",
    description:
      "Model namenjen većim sistemima kojima je potreban organizovan pregled više objekata, više uređaja i većeg ukupnog broja senzora.",
    note:
      "Za veće sisteme formira se posebna ponuda u skladu sa brojem lokacija, ukupnim brojem senzora i načinom organizacije sistema.",
    features: [
      "Više lokacija i više uređaja",
      "Centralni pregled svih objekata",
      "Organizacija po lokacijama i zonama",
      "Jednostavnije upravljanje većim sistemom",
      "Fleksibilno širenje po potrebi",
      "Prilagođavanje strukturi firme",
      "Povoljniji model za veći obim sistema",
    ],
    extra: [
      "Niža cena po senzoru za veće sisteme",
      "Pogodno za postepeno uvođenje po lokacijama",
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
    title: "199€",
    text: "redovna cena uređaja",
  },
  {
    title: "3 senzora",
    text: "uključena u početni paket",
  },
  {
    title: "30€",
    text: "dodatni senzor",
  },
];

const starterIncludes = [
  "Uređaj sa 3 senzora",
  "Besplatna instalacija",
  "Osnovna obuka",
  "Garancija na uređaje 12 meseci",
  "Cloud pregled, istorija i alarm logika",
];

const whyItMatters = [
  {
    title: "Bez ručnog upisivanja",
    text:
      "Nema više ručnog zapisivanja temperature u sveske, formulare ili tabele. Sistem automatski beleži podatke i čuva ih na jednom mestu.",
  },
  {
    title: "Brži pregled stanja",
    text:
      "U svakom trenutku možeš da vidiš šta se dešava na lokaciji, bez proveravanja više papira, tabela i zasebnih evidencija.",
  },
  {
    title: "Manje prostora za grešku",
    text:
      "Automatsko očitavanje i alarmi smanjuju mogućnost da se problem primeti prekasno ili da se podatak zaboravi da bude upisan.",
  },
];

const pricingNotes = [
  "Promo cena uređaja iznosi 99€, umesto redovne cene od 199€.",
  "Početni paket uključuje uređaj sa 3 senzora, instalaciju i osnovnu obuku.",
  "Garancija na uređaje traje 12 meseci.",
  "Dodatni senzori se doplaćuju 30€ jednokratno po senzoru.",
  "Cloud pristup i održavanje sistema uključeni su kroz jednostavan mesečni model.",
  "Za veće sisteme i lance cena po senzoru može biti povoljnija.",
];

const examples = [
  {
    title: "Jedna lokacija",
    text:
      "Odličan model za korisnike koji žele da krenu sa jednom lokacijom i odmah pređu na automatsko praćenje bez ručnog upisivanja temperature.",
  },
  {
    title: "Više frižidera ili zona",
    text:
      "Kada objekat ima više mesta koja treba nadzirati, sistem se lako širi dodavanjem dodatnih senzora bez menjanja cele logike rada.",
  },
  {
    title: "Više objekata",
    text:
      "Za veći broj lokacija dobijaš organizovan centralni pregled, jasniju kontrolu i bolju cenu po senzoru kroz posebno formiranu ponudu.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Dogovor i procena",
    text:
      "Na osnovu objekta, broja tačaka merenja i načina rada, određuje se najpraktičniji početni model sistema.",
  },
  {
    step: "02",
    title: "Instalacija i podešavanje",
    text:
      "Uređaj i senzori se postavljaju, sistem se povezuje i priprema za svakodnevno korišćenje.",
  },
  {
    step: "03",
    title: "Pregled i automatsko praćenje",
    text:
      "Temperatura se prati automatski, bez ručnog upisivanja, uz pregled istorije i alarm pri odstupanju.",
  },
];

const faqs = [
  {
    question: "Da li početni paket već dolazi spreman za rad?",
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
    "Umesto da temperaturu proveravaš i upisuješ ručno, sistem je meri i beleži automatski. Svi podaci su na jednom mestu, bez dodatnog posla i bez rizika da nešto ostane neupisano.",
},
{
  question: "Zašto je kontinuirano merenje bitno?",
  answer:
    "Kod klasičnog merenja vidiš samo temperaturu u trenutku kada je proveriš. Sve između tih merenja ostaje nepoznato. Kontinuirano merenje prati temperaturu stalno, tokom celog dana i noći, pa se svako odstupanje odmah vidi i ne može da prođe neprimećeno.",
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
            Cene i paketi
          </span>

          <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Jednostavan početak
            <span className="block text-yellow-400">i sistem koji lako raste dalje</span>
          </h2>

          <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Sistem je zamišljen tako da možeš da kreneš brzo i bez komplikovanja,
            a da kasnije lako proširiš broj senzora, uređaja ili lokacija prema
            stvarnoj potrebi. Najvažnije je da više nema ručnog upisivanja
            temperature i vođenja evidencije na više mesta.
          </p>
        </div>

        <div className="mb-8 rounded-[24px] border border-cyan-400/15 bg-white/[0.05] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-6 md:p-7">
          <div className="grid gap-6 md:grid-cols-[1fr_0.95fr] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Promo ponuda
              </p>

              <h3 className="mb-3 text-2xl font-bold sm:text-3xl">
                Uređaj redovno
                <span className="ml-2 line-through text-white/45">199€</span>
                <span className="ml-3 text-yellow-400">promo 99€</span>
              </h3>

              <p className="mb-3 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                Početni paket je osmišljen da omogući lak ulazak u sistem bez
                nepotrebnog opterećenja na startu. U promo cenu ulazi uređaj sa
                3 senzora, besplatna instalacija i osnovna obuka, tako da sve bude
                spremno za normalan rad odmah nakon postavljanja.
              </p>

              <p className="mb-3 text-base leading-7 text-white/68">
                Umesto ručnog zapisivanja temperature, podaci se automatski mere,
                beleže i čuvaju u sistemu, uz pregled istorije i alarm kada dođe
                do odstupanja.
              </p>

              <p className="text-sm text-white/58">
                Cloud pristup i redovno održavanje uključeni su kroz jednostavan
                mesečni model, dok garancija na uređaje traje 12 meseci.
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
                <span className="block text-yellow-400">bez komplikovanog objašnjavanja</span>
              </h3>

              <p className="text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                Ideja je da korisnik odmah razume šta dobija u početnom paketu,
                kako sistem funkcioniše i na koji način kasnije može da ga proširi.
                Umesto ručnog upisivanja temperature i razbacane evidencije, dobija
                pregledan sistem koji olakšava svakodnevni rad.
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
              Sistem može da prati
              <span className="block text-yellow-400">način na koji posao stvarno funkcioniše</span>
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
              Od dogovora do
              <span className="block text-yellow-400">automatskog praćenja</span>
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
              Ono što korisnike
              <span className="block text-yellow-400">najčešće zanima</span>
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
            Prikazane cene i paketi služe kao jasan orijentir. Konačna ponuda za
            veće sisteme zavisi od broja lokacija, ukupnog broja senzora i načina
            organizacije sistema, ali logika ostaje ista: preglednije, jednostavnije
            i bez ručnog upisivanja temperature.
          </p>
        </div>
      </div>
    </section>
  );
}