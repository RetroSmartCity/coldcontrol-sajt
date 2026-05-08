import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HACCPPage() {
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
                HACCP · Kritične tačke · Dokaz temperature
              </span>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                HACCP kontrola temperature za frižidere, hladnjače i rashladne vitrine
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
                ColdControl pomaže objektima koji rade sa hranom da imaju
                kontinuiran zapis temperature, alarme pri odstupanju i dokaz o
                uslovima čuvanja robe.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/zakazi-demo"
                  className="rounded-2xl bg-yellow-400 px-6 py-3.5 text-center text-base font-bold text-black shadow-[0_12px_30px_rgba(250,204,21,0.25)] transition hover:scale-[1.02]"
                >
                  Zakaži demo
                </Link>

                <Link
                  href="/primer-izvestaja"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-center text-base font-bold text-white transition hover:bg-white/10"
                >
                  Pogledaj primer izveštaja
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#123A5A]">
                Zašto je bitno
              </span>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Kod HACCP-a nije dovoljno reći da je frižider radio — potreban je dokaz
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Temperatura je jedna od najvažnijih kontrolnih tačaka za robu
                koja mora da se čuva u rashladnom režimu. Ako nema zapisa,
                teško je dokazati da je proizvod sve vreme bio u bezbednim
                uslovima.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                <h3 className="text-xl font-bold">Kontrola kritične tačke</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Frižider, hladnjača ili rashladna vitrina mogu biti kritična
                  tačka jer temperatura direktno utiče na bezbednost i kvalitet
                  proizvoda.
                </p>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                <h3 className="text-xl font-bold">Automatska evidencija</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Sistem automatski beleži temperaturu i smanjuje oslanjanje na
                  ručno upisivanje koje često ne prikazuje šta se desilo između
                  dva očitavanja.
                </p>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                <h3 className="text-xl font-bold">Alarmi pri odstupanju</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Kada temperatura izađe iz definisanog opsega, sistem šalje
                  alarm i čuva trag događaja za kasniju proveru.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 rounded-[30px] border border-slate-200 bg-[#F8FAFC] p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-[#123A5A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#123A5A]">
                  Za koga je namenjeno
                </span>

                <h2 className="text-3xl font-bold leading-tight text-[#0B1B2B] sm:text-4xl">
                  Za objekte kojima je temperatura deo svakodnevne kontrole
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  ColdControl je pogodan za restorane, ketering, proizvodnju
                  hrane, pekare, mesare, markete, hladnjače, magacine hrane i
                  objekte koji u okviru HACCP sistema moraju da pokažu da prate
                  uslove čuvanja.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                  Vlasniku ili odgovornom licu sistem daje jasan pregled:
                  trenutnu temperaturu, istoriju, min/max vrednosti, alarme i
                  izveštaj koji može da se koristi za internu kontrolu.
                </p>
              </div>

              <div className="rounded-[26px] border border-slate-200 bg-white p-5 sm:p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#123A5A]">
                  Tipične primene
                </p>

                <div className="space-y-4">
                  {[
                    "Frižideri za sirovine",
                    "Rashladne vitrine",
                    "Hladnjače i komore",
                    "Magacini hrane",
                    "Dostava i prijem robe",
                    "Proizvodni pogoni",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 font-bold"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <span className="mb-4 inline-flex rounded-full border border-[#123A5A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#123A5A]">
                Dokaz za kontrolu
              </span>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Šta ColdControl donosi HACCP objektu?
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                <h3 className="text-2xl font-bold">
                  Umesto sveske — automatski zapis
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Ručno upisivanje može da pokaže samo trenutak kada je neko
                  pogledao termometar. Kontinuirano merenje pokazuje šta se
                  dešavalo tokom celog dana i noći.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                <h3 className="text-2xl font-bold">
                  Izveštaj kada zatreba
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Sistem omogućava pregled merenja, min/max vrednosti, alarma i
                  događaja. Time odgovorno lice ima bolju osnovu za internu
                  proveru i razgovor sa kontrolom.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[26px] border border-[#123A5A]/10 bg-[#0B1B2B] p-6 text-white sm:p-8">
              <h3 className="text-2xl font-bold">
                Suština za kupca
              </h3>

              <p className="mt-4 max-w-4xl leading-8 text-white/70">
                Kada dođe do pitanja “kakva je bila temperatura robe?”, odgovor
                više nije samo ručni upis u tabeli, već istorija merenja,
                alarmi, min/max vrednosti i dokaz da se kritična tačka pratila.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#071521] px-4 py-14 text-white sm:px-6 md:py-20">
          <div className="mx-auto max-w-6xl rounded-[30px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  ColdControl za HACCP
                </p>

                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Pretvori temperaturu iz rizika u dokaz
                </h2>

                <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                  Pokaži kupcu, menadžeru ili kontroli da se temperatura prati
                  kontinuirano i da postoji evidencija za svaku kritičnu tačku.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#091521] p-5">
                <h3 className="mb-4 text-2xl font-bold text-yellow-400">
                  Dobijaš:
                </h3>

                <ul className="space-y-3 text-white/75">
                  <li>• kontinuirano praćenje temperature</li>
                  <li>• alarme pri odstupanju</li>
                  <li>• min/max vrednosti</li>
                  <li>• istoriju merenja</li>
                  <li>• evidenciju za internu kontrolu</li>
                  <li>• izveštaj spreman za prikaz</li>
                </ul>

                <Link
                  href="/zakazi-demo"
                  className="mt-7 block rounded-2xl bg-yellow-400 px-6 py-4 text-center font-bold text-black transition hover:scale-[1.02]"
                >
                  Zakaži demo za HACCP objekat
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