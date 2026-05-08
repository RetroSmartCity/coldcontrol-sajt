"use client";

import Image from "next/image";
import Link from "next/link";

const probeRows = [
  ["Sonda 1", "Gornja zona", "2.4 °C", "7.9 °C", "5.1 °C", "2"],
  ["Sonda 2", "Centralna zona", "3.1 °C", "6.2 °C", "4.8 °C", "0"],
  ["Sonda 3", "Donja zona", "2.8 °C", "8.4 °C", "5.6 °C", "3"],
];

const eventRows = [
  ["2026-05-06 09:42", "Sonda 3", "8.4 °C", "Iznad opsega", "17 min"],
  ["2026-05-06 13:18", "Sonda 1", "7.9 °C", "Granična vrednost", "11 min"],
  ["2026-05-07 10:05", "Sonda 3", "8.2 °C", "Iznad opsega", "9 min"],
];

export default function IzvestajMapiranjaFrizideraPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-4 py-10 text-white sm:px-6 lg:px-8 print:bg-white print:p-0 print:text-black">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/kontrola-temperature-u-apotekama"
            className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            ← Nazad na apoteke
          </Link>

          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black hover:bg-yellow-300"
          >
            Štampaj / Sačuvaj PDF
          </button>
        </div>

        <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl print:rounded-none print:shadow-none">
          <header className="border-b border-slate-200 pb-6">
            <Image
              src="/images/logo-header-tight.webp"
              alt="ColdControl Systems"
              width={190}
              height={60}
              className="mb-5"
              priority
            />

            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">
              Temperaturno mapiranje frižidera
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
              IZVEŠTAJ O TEMPERATURNOM MAPIRANJU FRIŽIDERA
            </h1>

            <p className="mt-3 text-base font-semibold text-slate-700">
              Kontinuirano praćenje tokom 48h sa tri temperaturne sonde.
            </p>
          </header>

          <section className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-5 text-sm sm:grid-cols-2">
            <div className="space-y-2">
              <p>
                <strong>Objekat:</strong> Primer apoteka
              </p>

              <p>
                <strong>Uređaj:</strong> Farmaceutski frižider 1
              </p>

              <p>
                <strong>Adresa:</strong> Primer lokacija
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <strong>Period merenja:</strong> 48h
              </p>

              <p>
                <strong>Broj sondi:</strong> 3 merne tačke
              </p>

              <p>
                <strong>Referentni opseg:</strong> 2–8 °C
              </p>
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-extrabold text-slate-950">
              Cilj mapiranja
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Cilj temperaturnog mapiranja je da se proveri stabilnost
              temperature u različitim zonama frižidera tokom realnog rada
              objekta.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Merenje pokazuje da li gornja, centralna i donja zona imaju
              jednako stabilne uslove čuvanja ili postoje razlike koje nisu
              vidljive kroz povremeno ručno očitavanje.
            </p>
          </section>

          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-300">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3">Sonda</th>
                  <th className="px-4 py-3">Pozicija</th>
                  <th className="px-4 py-3">Min</th>
                  <th className="px-4 py-3">Max</th>
                  <th className="px-4 py-3">Prosek</th>
                  <th className="px-4 py-3">Odstupanja</th>
                </tr>
              </thead>

              <tbody>
                {probeRows.map((row, index) => (
                  <tr
                    key={row[0]}
                    className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                  >
                    {row.map((cell) => (
                      <td
                        key={`${row[0]}-${cell}`}
                        className="border-t border-slate-200 px-4 py-3"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Najstabilnija zona
              </p>

              <p className="mt-2 text-2xl font-extrabold">
                Centralna zona
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Najveća izmerena vrednost
              </p>

              <p className="mt-2 text-2xl font-extrabold">
                8.4 °C
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-700">
                Napomena
              </p>

              <p className="mt-2 font-bold text-yellow-800">
                Uočene su razlike po zonama.
              </p>
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-extrabold text-slate-950">
              Pozicije sondi
            </h2>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4">
                <p className="font-bold">
                  Sonda 1 — gornja zona
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Postavljena u gornjem delu frižidera, u blizini ventilacije.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="font-bold">
                  Sonda 2 — centralna zona
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Referentna kontrolna pozicija sa najstabilnijim vrednostima.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4">
                <p className="font-bold">
                  Sonda 3 — donja zona
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Zona pod većim uticajem otvaranja vrata i spoljne temperature.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/images/graf-kontinuirano-merenje-temperature.png"
                alt="Graf temperaturnog mapiranja"
                width={1400}
                height={800}
                className="h-auto w-full"
              />
            </div>
          </section>

          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-300">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3">Vreme</th>
                  <th className="px-4 py-3">Sonda</th>
                  <th className="px-4 py-3">Temperatura</th>
                  <th className="px-4 py-3">Događaj</th>
                  <th className="px-4 py-3">Trajanje</th>
                </tr>
              </thead>

              <tbody>
                {eventRows.map((row, index) => (
                  <tr
                    key={`${row[0]}-${row[1]}`}
                    className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                  >
                    {row.map((cell) => (
                      <td
                        key={`${row[0]}-${cell}`}
                        className="border-t border-slate-200 px-4 py-3"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="mt-6 rounded-2xl bg-slate-900 p-5 text-white print:bg-slate-100 print:text-slate-900">
            <p className="font-bold">
              Analiza rezultata
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300 print:text-slate-700">
              Tokom perioda mapiranja uočene su temperaturne razlike između
              zona frižidera. Centralna zona pokazala je najstabilnije
              vrednosti, dok je donja zona imala izraženije oscilacije.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-300 print:text-slate-700">
              Ovakav rezultat pokazuje zašto jedno kontrolno mesto ne mora
              uvek da prikaže stvarno stanje u celom uređaju.
            </p>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-extrabold text-slate-950">
                Zaključak
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Frižider je uglavnom održavao temperaturni opseg 2–8 °C,
                ali su zabeležena kratkotrajna odstupanja u donjoj zoni.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Preporučuje se da se kontrolni senzor postavi u centralnu
                zonu i da se nastavi kontinuirano praćenje.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-extrabold text-slate-950">
                Preporuke
              </h2>

              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li>
                  • koristiti centralnu zonu kao referentnu poziciju,
                </li>

                <li>
                  • pratiti min/max vrednosti, ne samo trenutnu temperaturu,
                </li>

                <li>
                  • analizirati otvaranje vrata i raspored proizvoda,
                </li>

                <li>
                  • čuvati audit evidenciju za internu kontrolu.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-extrabold text-slate-950">
              Audit i verodostojnost podataka
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Podaci su generisani automatski kroz ColdControl sistem.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Sistem beleži vreme merenja, identitet senzora,
              temperaturne vrednosti, alarme, odstupanja i istoriju događaja.
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-700">
              Izveštaj služi kao dokaz o sprovedenom temperaturnom mapiranju
              i kao osnova za internu proveru uslova čuvanja.
            </p>
          </section>

          <footer className="mt-12 grid gap-10 border-t border-slate-200 pt-8 text-sm sm:grid-cols-2">
            <div>
              <p className="font-semibold">
                Izveštaj generisao:
              </p>

              <p className="mt-2">
                ColdControl Systems
              </p>

              <p className="mt-1">
                www.coldcontrol.app
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Odgovorno lice:
              </p>

              <p className="mt-10">
                ______________________________
              </p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}