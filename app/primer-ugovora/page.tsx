"use client";

import Image from "next/image";

export default function PrimerUgovoraPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-4 py-10 text-white sm:px-6 lg:px-8 print:bg-white print:text-black">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between gap-4 print:hidden">
          <a
            href="/"
            className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            ← Nazad na sajt
          </a>

          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black hover:scale-[1.02]"
          >
            Štampaj / Sačuvaj PDF
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white p-8 text-slate-900 shadow-2xl print:border-0 print:shadow-none">
          <div className="mb-8 flex items-start justify-between gap-6 border-b border-slate-200 pb-6">
            <div>
              <Image
                src="/images/logo-header-tight.webp"
                alt="ColdControl Systems"
                width={190}
                height={60}
                className="mb-5"
              />

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-slate-500">
                Poslovna dokumentacija
              </p>

              <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                POSLOVNA PONUDA I OKVIRNI UGOVOR
              </h1>

              <p className="mt-2 text-lg font-bold text-slate-800">
                za implementaciju sistema kontinuiranog praćenja temperature
              </p>

              <p className="mt-4 text-base font-semibold text-slate-700">
                Rešenje za automatsku evidenciju temperature, alarmiranje i
                izveštaje dostupne za internu kontrolu i inspekcijski nadzor.
              </p>
            </div>
          </div>

          <div className="mb-8 grid gap-6 rounded-2xl bg-slate-50 p-5 text-sm sm:grid-cols-2">
            <div>
              <p>Datum: __________________</p>
              <p className="mt-2">Broj ponude: __________________</p>
              <p className="mt-2">Period važenja ponude: 7 dana</p>
            </div>

            <div>
              <p>
                <strong>Pružalac usluge:</strong>_____________________
              </p>
              <p className="mt-2">
                Adresa: _____________________________________
              </p>
              <p className="mt-2">PIB: __________</p>
              <p className="mt-2">MB: __________</p>
            </div>

            <div className="sm:col-span-2">
              <p>
                <strong>Korisnik:</strong> ______________________________
              </p>
              <p className="mt-2">
                Adresa: ______________________________
              </p>
              <p className="mt-2">
                PIB: ______________________________
              </p>
              <p className="mt-2">
                MB: ______________________________
              </p>
            </div>
          </div>

          <div className="space-y-7 leading-7">
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="mb-2 text-lg font-bold">Executive summary</h2>
              <p>
                ColdControl je sistem za kontinuirano praćenje temperature,
                automatsku evidenciju, alarmiranje i pripremu podataka za
                internu kontrolu i inspekcijski nadzor. Rešenje je namenjeno
                objektima koji čuvaju proizvode u kontrolisanom temperaturnom
                režimu i žele da smanje zavisnost od ručnog vođenja evidencije.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">1. Predmet dokumenta</h2>
              <p>
                Predmet ovog dokumenta je isporuka, instalacija, inicijalna
                konfiguracija i korišćenje ColdControl sistema za kontinuirano
                praćenje temperature 24/7, sa automatskim beleženjem podataka,
                alarmnim obaveštenjima i cloud pristupom istoriji merenja.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">2. Obim isporuke</h2>
              <p className="font-semibold">
                Osnovni paket implementacije obuhvata:
              </p>

              <ul className="mt-2 list-disc pl-6">
                <li>centralni uređaj za prikupljanje podataka</li>
                <li>3 merne tačke</li>
                <li>inicijalnu konfiguraciju sistema</li>
                <li>instalaciju na lokaciji korisnika</li>
                <li>korisnički pristup cloud platformi</li>
                <li>osnovnu obuku osoblja</li>
                <li>pregled istorije merenja i statusa sistema</li>
              </ul>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p>
                  <strong>Početna implementacija:</strong> "Konfiguracija prema potrebama objekta"

                </p>
                <p>
                  <strong>Standardna implementacija:</strong>  "Prilagođena ponuda prema organizaciji sistema"

                </p>
                <p>
                  <strong>Dodatna merna tačka:</strong> "Dodavanje novih mernih pozicija po potrebi"
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">
                3. Održavanje i cloud usluga
              </h2>

              <p>
                Održavanje je obavezno za redovan rad sistema i uključuje cloud
                pristup, čuvanje podataka, pregled istorije, alarmni sistem,
                tehničku podršku i osnovni nadzor dostupnosti sistema.
              </p>

              <p className="mt-3">
                Standardna cena održavanja:{" "}
                <strong>"Mesečni model po senzoru"</strong>.
              </p>

              
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">
                4. Funkcionalnosti sistema
              </h2>

              <ul className="list-disc pl-6">
                <li>kontinuirano praćenje temperature 24/7</li>
                <li>automatsko beleženje podataka</li>
                <li>pregled istorije merenja</li>
                <li>alarm pri odstupanju temperature</li>
                <li>pregled po uređajima, mernim tačkama i lokacijama</li>
                <li>generisanje izveštaja za izabrani period</li>
                <li>evidencija statusa sistema i događaja</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">
                5. Evidencija podataka i inspekcijski nadzor
              </h2>

              <p>
                Sistem automatski beleži i čuva podatke o temperaturi i
                statusima tokom celog perioda korišćenja usluge.
              </p>

              <p className="mt-3">
                Izveštaji se mogu generisati u svakom trenutku, čime je
                evidencija dostupna za potrebe interne kontrole i inspekcijskog
                nadzora.
              </p>

              <p className="mt-3 rounded-xl bg-green-50 p-3 font-bold text-green-800">
                Automatska evidencija smanjuje potrebu za ručnim vođenjem
                temperature i omogućava brži pristup istoriji merenja.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">
                6. Važna napomena o validaciji i kalibraciji
              </h2>

              <p>
                ColdControl sistem ne zamenjuje validaciju rashladne opreme,
                kalibraciju mernih instrumenata ili zakonske obaveze korisnika.
                Sistem obezbeđuje kontinuiranu evidenciju, alarmiranje, pregled
                istorije merenja i operativnu kontrolu temperaturnih uslova.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">7. Garancija</h2>

              <p>
                Garancija na opremu traje <strong>12 meseci</strong> i odnosi
                se na kvarove nastale u redovnoj i pravilnoj upotrebi.
              </p>

              <p className="mt-3">
                Garancija ne obuhvata fizička oštećenja, neovlašćene izmene,
                neadekvatno napajanje, nepravilno rukovanje ili oštećenja
                nastala usled uslova na lokaciji korisnika.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">
                8. Operativna podrška i SLA
              </h2>

              <ul className="list-disc pl-6">
                <li>
                  dostupnost cloud platforme: <strong>≥ 99% mesečno</strong>
                </li>
                <li>monitoring servera i osnovnih sistemskih servisa</li>
                <li>evidencija statusa sistema</li>
                <li>tehnička podrška za prijavljene probleme</li>
              </ul>

              <table className="mt-4 w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-3 py-2">
                      Kategorija problema
                    </th>
                    <th className="border border-slate-300 px-3 py-2">
                      Vreme reakcije
                    </th>
                    <th className="border border-slate-300 px-3 py-2">
                      Ciljani rok rešavanja
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Kritični prekid rada sistema
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      do 2h
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      do 24h
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Delimični problem u radu
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      do 6h
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      do 48h
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-slate-300 px-3 py-2">
                      Manji zahtev ili korekcija
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      do 24h
                    </td>
                    <td className="border border-slate-300 px-3 py-2">
                      po planu
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-3 text-sm text-slate-600">
                SLA se odnosi na dostupnost cloud platforme i podršku sistema.
                SLA ne obuhvata kvarove nastale usled nestanka električne
                energije, prekida internet konekcije, fizičkog oštećenja opreme
                ili drugih spoljašnjih faktora na lokaciji korisnika.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">
                9. Pristup i bezbednost podataka
              </h2>

              <p>
                Korisniku se obezbeđuje pristup podacima putem korisničkog
                naloga. Podaci su dostupni za pregled istorije, izveštaje i
                internu kontrolu.
              </p>

              <p className="mt-3">
                Pristup sistemu ograničen je na ovlašćena lica korisnika.
                Korisnik je odgovoran za pravilno korišćenje pristupnih podataka
                i za određivanje lica koja imaju pravo pristupa platformi.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">10. Obaveze ugovornih strana</h2>

              <p className="font-semibold">Pružalac usluge:</p>
              <ul className="list-disc pl-6">
                <li>isporučuje opremu</li>
                <li>vrši instalaciju i inicijalnu konfiguraciju</li>
                <li>obezbeđuje osnovnu obuku korisnika</li>
                <li>obezbeđuje održavanje sistema</li>
                <li>obezbeđuje cloud pristup i tehničku podršku</li>
              </ul>

              <p className="mt-3 font-semibold">Korisnik:</p>
              <ul className="list-disc pl-6">
                <li>obezbeđuje internet konekciju i napajanje</li>
                <li>koristi sistem pravilno i u skladu sa namenom</li>
                <li>reaguje na alarmna obaveštenja</li>
                <li>obezbeđuje fizičku zaštitu opreme na lokaciji</li>
                <li>uredno izmiruje ugovorene obaveze</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">11. Ograničenja odgovornosti</h2>

              <p>Pružalac usluge ne odgovara za probleme nastale usled:</p>

              <ul className="list-disc pl-6">
                <li>nestanka električne energije</li>
                <li>prekida ili nestabilnosti internet konekcije</li>
                <li>nepostupanja korisnika po alarmnom obaveštenju</li>
                <li>nepravilnog korišćenja sistema</li>
                <li>fizičkog oštećenja ili premeštanja opreme bez dogovora</li>
                <li>kvarova rashladne opreme korisnika</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">12. Trajanje i raskid</h2>

              <p>
                Ugovor traje <strong>12 meseci</strong>, osim ako strane
                drugačije ne definišu posebnim dogovorom.
              </p>

              <p className="mt-3">
                Otkazni rok iznosi <strong>30 dana pisanim putem</strong>.
                Nakon raskida ugovora prestaje pravo korišćenja cloud platforme
                i aktivne usluge održavanja, osim ako nije drugačije ugovoreno.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">13. Važenje ponude</h2>

              <p>
                Ponuda važi <strong>7 dana</strong> od datuma izdavanja.
                Potpisivanjem ovog dokumenta ponuda postaje ugovor između
                pružaoca usluge i korisnika.
              </p>
            </section>
          </div>

          <div className="mt-12 grid gap-10 border-t border-slate-200 pt-8 text-sm sm:grid-cols-2">
            <div>
              <p className="font-semibold">Pružalac usluge:</p>
              <p className="mt-2">Nevena Kapelan pr Kristal369</p>
              <p className="mt-10">______________________________</p>
            </div>

            <div>
              <p className="font-semibold">Korisnik:</p>
              <p className="mt-10">______________________________</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}