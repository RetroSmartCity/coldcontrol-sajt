import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function KontrolaTemperatureApotekePage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8FAFC] text-[#0B1B2B]">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#071521] via-[#0B1B2B] to-[#123A5A] px-4 py-16 text-white sm:px-6 md:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-80px] top-[-100px] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <span className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200">
                Ručno vs kontinuirano merenje
              </span>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Kontrola temperature u frižiderima u apotekama
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
                Ručno merenje temperature u 8h i 14h može pokazati da je sve u
                redu, ali ne prikazuje šta se dešavalo između ta dva očitavanja.
                Kontinuirano praćenje daje realnu sliku tokom celog dana.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/zakazi-demo"
                  className="rounded-2xl bg-yellow-400 px-6 py-3.5 text-center text-base font-bold text-black shadow-[0_12px_30px_rgba(250,204,21,0.25)] transition hover:scale-[1.02]"
                >
                  Zakaži demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#123A5A]">
                Problem u praksi
              </span>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Dva ručna merenja ne prikazuju celu temperaturnu sliku
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Rashladni uređaji rade u ciklusima. Temperatura može da poraste
                ili padne između dva ručna merenja, a da to ne ostane zabeleženo
                u evidenciji.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-6">
                <div className="mb-5">
                  <span className="mb-3 inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-[#9A6B00]">
                    Ručno merenje
                  </span>

                  <h3 className="text-2xl font-bold text-[#0B1B2B]">
                    Očitavanje samo u određenim terminima
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Ako se temperatura meri samo u 8h i 14h, evidencija prikazuje
                    samo ta dva trenutka, ne i promene između njih.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-[#F8FAFC]">
                  <Image
                    src="/images/graf-rucno-merenje-temperature.png"
                    alt="Graf ručnog merenja temperature u apoteci"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-6">
                <div className="mb-5">
                  <span className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold text-[#123A5A]">
                    Kontinuirano merenje
                  </span>

                  <h3 className="text-2xl font-bold text-[#0B1B2B]">
                    Stalan uvid u kretanje temperature
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Kontinuirano praćenje prikazuje promene tokom celog dana,
                    uključujući minimalne i maksimalne vrednosti.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-[#F8FAFC]">
                  <Image
                    src="/images/graf-kontinuirano-merenje-temperature.png"
                    alt="Graf kontinuiranog merenja temperature u apoteci"
                    width={1200}
                    height={800}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 rounded-[30px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-[#123A5A]/10 bg-[#123A5A]/5 px-4 py-2 text-sm font-semibold text-[#123A5A]">
                  EU standardi i GDP pristup
                </span>

                <h2 className="text-3xl font-bold leading-tight text-[#0B1B2B] sm:text-4xl">
                  EU GDP traži kontrolu, zapis i dokaz o uslovima čuvanja lekova
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Evropske smernice za dobru distributivnu praksu (EU GDP)
                  zasnivaju se na tome da uslovi skladištenja lekova moraju biti
                  kontrolisani, dokumentovani i proverljivi. Kod lekova koji se
                  čuvaju u frižideru, to znači da nije dovoljno imati samo
                  povremeno ručno očitavanje temperature.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  Suština GDP pristupa je dokaz: temperatura treba da bude
                  praćena, zapisana i dostupna za proveru. Ručna merenja u 8h i
                  14h prikazuju samo dva trenutka, dok kontinuirano praćenje
                  pokazuje šta se dešavalo između tih očitavanja.
                </p>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#123A5A]">
                  Ključni GDP principi
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
                      Citat iz GDP smernica
                    </p>
                    <p className="mt-2 italic leading-7 text-slate-700">
                      “Temperature and humidity of storage areas should be
                      monitored and recorded.”
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Prevod: temperatura i vlažnost prostora za skladištenje
                      treba da se prate i beleže.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Objašnjenje: evidencija mora pokazati uslove skladištenja,
                      a ne samo trenutno stanje u trenutku ručnog upisa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[26px] border border-[#123A5A]/10 bg-[#0B1B2B] p-6 text-white sm:p-8">
              <h3 className="text-2xl font-bold">
                Šta to znači za apoteku u praksi?
              </h3>

              <p className="mt-4 max-w-4xl leading-8 text-white/70">
                Ako apoteka meri temperaturu samo ručno, ona ima zapis za dva
                trenutka u toku dana. Ako se odstupanje desi između tih merenja,
                ono može ostati nevidljivo. Kontinuirano praćenje daje dokaz o
                minimalnim i maksimalnim vrednostima, istoriji kretanja
                temperature, alarmima i uslovima čuvanja tokom celog perioda.
              </p>

              <p className="mt-4 max-w-4xl leading-8 text-white/70">
                Zato ColdControl nije samo digitalni termometar, već sistem za
                dokumentovanje uslova čuvanja: prati temperaturu, čuva istoriju,
                prikazuje graf, beleži min/max vrednosti i omogućava izveštaje
                za internu kontrolu i inspekciju.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <span className="mb-4 inline-flex rounded-full border border-[#123A5A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#123A5A]">
                SOP za apoteke
              </span>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Standardna procedura za kontrolu temperature u frižiderima
                apoteka
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                SOP definiše kako se temperatura prati, kako se postupa kod
                alarma i kako se čuvaju zapisi. Cilj je da apoteka ima jasan,
                ponovljiv i proverljiv postupak, a ne samo aplikaciju za prikaz
                temperature.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[30px] border border-slate-200 bg-[#0B1B2B] p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Dokument za internu kontrolu
                </p>

                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                  SOP – kontinuirano praćenje temperature 2–8°C
                </h3>

                <p className="mt-5 leading-8 text-white/70">
                  Procedura se koristi za frižidere u kojima se čuvaju lekovi
                  koji zahtevaju kontrolisane temperaturne uslove. U SOP-u su
                  definisani opseg, odgovornosti, alarmi, evidencija i izveštaji.
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-yellow-300">
                    Glavna poenta SOP-a
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Temperatura se ne proverava samo povremeno, već se prati
                    kontinuirano i automatski beleži, kako bi postojala istorija
                    uslova čuvanja.
                  </p>
                </div>

                <Link
                  href="/zakazi-demo"
                  className="mt-7 block rounded-2xl bg-yellow-400 px-6 py-4 text-center font-bold text-black transition hover:scale-[1.02]"
                >
                  Zakaži demo SOP procesa
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#123A5A]">
                    1. Svrha
                  </p>
                  <p className="leading-7 text-slate-600">
                    Obezbeđivanje uslova čuvanja lekova u opsegu 2–8°C kroz
                    kontinuirano praćenje, automatsku evidenciju i pregled
                    istorije temperature.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#123A5A]">
                    2. Opseg primene
                  </p>
                  <p className="leading-7 text-slate-600">
                    Procedura se primenjuje na rashladne uređaje u apoteci u
                    kojima se čuvaju lekovi, preparati ili proizvodi koji
                    zahtevaju kontrolisanu temperaturu.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#123A5A]">
                    3. Odgovornosti
                  </p>
                  <p className="leading-7 text-slate-600">
                    Odgovorno lice prati stanje sistema, proverava alarme i
                    preduzima mere kada temperatura izađe iz dozvoljenog opsega.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#123A5A]">
                    4. Praćenje 24/7
                  </p>
                  <p className="leading-7 text-slate-600">
                    ColdControl meri temperaturu kontinuirano, prikazuje trenutnu
                    vrednost, istoriju kretanja, minimalne i maksimalne vrednosti.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#123A5A]">
                    5. Alarmi
                  </p>
                  <p className="leading-7 text-slate-600">
                    Alarm se aktivira kada temperatura izađe iz definisanog
                    opsega. Događaj ostaje zabeležen u sistemu sa vremenom
                    nastanka.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#123A5A]">
                    6. Izveštaji
                  </p>
                  <p className="leading-7 text-slate-600">
                    Sistem omogućava pregled istorije, min/max vrednosti, alarma
                    i izvoz podataka za internu proveru ili pripremu za kontrolu.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[26px] border border-slate-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold">
                  Automatska evidencija temperature
                </h3>
                <p className="leading-7 text-slate-600">
                  Svako merenje se beleži automatski, bez oslanjanja na naknadni
                  ručni upis. Time se smanjuje rizik od propuštenih ili pogrešno
                  unetih vrednosti.
                </p>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold">
                  Audit log i trag događaja
                </h3>
                <p className="leading-7 text-slate-600">
                  Sistem čuva trag merenja, alarma i događaja, što omogućava
                  jasniji uvid u to kada je podatak nastao i šta se dešavalo
                  tokom perioda čuvanja.
                </p>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold">
                  Postupanje kod odstupanja
                </h3>
                <p className="leading-7 text-slate-600">
                  SOP predviđa da se kod alarma proveri frižider, vrata,
                  napajanje i stanje robe, a zatim preduzeta mera evidentira u
                  internom postupku.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Ručna evidencija
                </p>

                <h3 className="mb-3 text-xl font-bold">
                  Vidi samo trenutak merenja
                </h3>

                <p className="leading-7 text-slate-600">
                  Temperatura može biti u redu u trenutku očitavanja, dok su
                  odstupanja između merenja nevidljiva.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Kontinuirano praćenje
                </p>

                <h3 className="mb-3 text-xl font-bold">
                  Prikazuje stvarno stanje
                </h3>

                <p className="leading-7 text-slate-600">
                  Sistem beleži promene temperature tokom dana i noći,
                  uključujući min/max vrednosti.
                </p>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-[#F8FAFC] p-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Audit log
                </p>

                <h3 className="mb-3 text-xl font-bold">
                  Trag podataka za kontrolu
                </h3>

                <p className="leading-7 text-slate-600">
                  Podaci ostaju zabeleženi i mogu se koristiti za interni
                  pregled, izveštaje i pripremu za inspekciju.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-[#123A5A]/10 bg-[#123A5A]/5 px-4 py-2 text-sm font-semibold text-[#123A5A]">
                  Audit log i verodostojnost podataka
                </span>

                <h2 className="text-3xl font-bold leading-tight text-[#0B1B2B] sm:text-4xl">
                  Nije dovoljno samo izmeriti temperaturu — važno je dokazati
                  kada je podatak nastao
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Kod ručne evidencije uvek postoji rizik da se podatak upiše
                  naknadno, pogrešno ili bez jasnog traga ko je i kada uneo
                  očitavanje. Kontinuirano praćenje pravi automatski zapis koji
                  ostaje sačuvan u sistemu.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  Audit log pomaže da se vidi istorija događaja: kada je merenje
                  zabeleženo, kada je temperatura izašla iz opsega, kada je alarm
                  aktiviran i kada je pregledan ili potvrđen.
                </p>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-[#0B1B2B] p-5 text-white sm:p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Šta audit log potvrđuje
                </p>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-bold text-white">
                      Vreme nastanka podatka
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Svako merenje ima vreme očitavanja i ne zavisi od naknadnog
                      ručnog upisa.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-bold text-white">Istorija alarma</p>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Beleži se kada je došlo do odstupanja i kada je sistem
                      reagovao.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-bold text-white">
                      Verodostojnost evidencije
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/65">
                      Podaci imaju trag u sistemu, što daje jaču osnovu za
                      interni pregled i kontrolu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#071521] px-4 py-14 text-white sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Zaključak
                </p>

                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Ručno merenje ne garantuje potpun uvid u temperaturu frižidera
                </h2>

                <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                  ColdControl omogućava stalno praćenje temperature, automatsko
                  beleženje podataka, alarme pri odstupanju, audit log i pregled
                  istorije merenja na jednom mestu.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#091521] p-5">
                <h3 className="mb-4 text-2xl font-bold text-yellow-400">
                  Šta sistem rešava?
                </h3>

                <ul className="space-y-3 text-white/75">
                  <li>• smanjuje oslanjanje na ručno upisivanje</li>
                  <li>• prikazuje min/max vrednosti</li>
                  <li>• šalje alarm pri odstupanju</li>
                  <li>• čuva istoriju merenja</li>
                  <li>• omogućava izveštaje za kontrolu</li>
                  <li>• čuva audit log i trag verodostojnosti podataka</li>
                </ul>

                <Link
                  href="/zakazi-demo"
                  className="mt-7 block rounded-2xl bg-yellow-400 px-6 py-4 text-center font-bold text-black transition hover:scale-[1.02]"
                >
                  Zakaži demo prezentaciju
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}