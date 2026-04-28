"use client";

import Image from "next/image";

export default function PrimerUgovoraPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-4 py-10 text-white sm:px-6 lg:px-8 print:bg-white print:text-black">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between gap-4 print:hidden">
          <a href="/" className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10">
            ← Nazad na sajt
          </a>

          <button
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

              <h1 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                PONUDA I UGOVOR ZA SISTEM PRAĆENJA TEMPERATURE
              </h1>

              <p className="mt-3 text-base font-semibold text-slate-700">
                Rešenje za automatsku evidenciju temperature – spremno za inspekciju bez ručnog vođenja.
              </p>
            </div>
          </div>

          <div className="mb-8 grid gap-6 rounded-2xl bg-slate-50 p-5 text-sm sm:grid-cols-2">
            <div>
              <p>Datum: __________________</p>
              <p className="mt-2">Broj ponude: __________________</p>
            </div>

            <div>
              <p><strong>Pružalac usluge:</strong> ______________________________</p>
              <p className="mt-2">Adresa: ______________________________</p>
              <p className="mt-2">PIB: ______________________________</p>
            </div>

            <div className="sm:col-span-2">
              <p><strong>Korisnik:</strong> ______________________________</p>
              <p className="mt-2">Adresa: ______________________________</p>
              <p className="mt-2">PIB: ______________________________</p>
            </div>
          </div>

          <div className="space-y-7 leading-7">
            <section>
              <h2 className="mb-2 text-lg font-bold">1. Predmet</h2>
              <p>
                Predmet ovog dokumenta je isporuka, instalacija i korišćenje sistema za kontinuirano
                praćenje temperature 24/7, sa automatskim beleženjem podataka i alarmnim obaveštenjima.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">2. Ponuda</h2>
              <p className="font-semibold">Osnovni paket obuhvata:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>1 uređaj</li>
                <li>3 senzora</li>
                <li>instalaciju</li>
                <li>osnovnu obuku</li>
              </ul>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p><strong>Cena osnovnog paketa:</strong> 99€ bez PDV-a promotivno.</p>
                <p><strong>Redovna cena:</strong> 199€ bez PDV-a.</p>
                <p><strong>Dodatni senzor:</strong> 30€ po senzoru bez PDV-a.</p>
              </div>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">3. Održavanje i cloud usluga</h2>
              <p>
                Održavanje je obavezno za redovan rad sistema i uključuje cloud pristup, čuvanje
                podataka, pregled istorije, alarmni sistem i tehničku podršku.
              </p>
              <p className="mt-3">
                Standardna cena održavanja: <strong>4€ po senzoru mesečno bez PDV-a</strong>.
              </p>
              <p>
                Za veće sisteme i lance cena može biti od <strong>3,2€ po senzoru mesečno bez PDV-a</strong>,
                u skladu sa posebnom ponudom.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">4. Funkcionalnosti sistema</h2>
              <ul className="list-disc pl-6">
                <li>kontinuirano praćenje temperature 24/7</li>
                <li>automatsko beleženje podataka</li>
                <li>pregled istorije merenja</li>
                <li>alarm pri odstupanju temperature</li>
                <li>pregled po uređajima i lokacijama</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">5. Garancija</h2>
              <p>
                Garancija na opremu traje <strong>12 meseci</strong> i odnosi se na kvarove nastale
                u redovnoj i pravilnoj upotrebi.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">6. Evidencija podataka i inspekcija</h2>
              <p>
                Sistem automatski beleži i čuva podatke o temperaturi i statusima tokom celog perioda
                korišćenja usluge.
              </p>
              <p className="mt-3">
                Izveštaji se mogu generisati u svakom trenutku, čime je evidencija dostupna i spremna
                za potrebe inspekcijskog nadzora.
              </p>
              <p className="mt-3 rounded-xl bg-green-50 p-3 font-bold text-green-800">
                Automatska evidencija eliminiše potrebu za ručnim vođenjem temperature.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">7. SLA – nivo usluge</h2>
              <ul className="list-disc pl-6">
                <li>dostupnost sistema: <strong>≥ 99% mesečno</strong></li>
                <li>monitoring servera i uređaja</li>
                <li>evidencija statusa sistema</li>
              </ul>

              <table className="mt-4 w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-3 py-2">Problem</th>
                    <th className="border border-slate-300 px-3 py-2">Reakcija</th>
                    <th className="border border-slate-300 px-3 py-2">Rešenje</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">Kritični</td>
                    <td className="border border-slate-300 px-3 py-2">do 2h</td>
                    <td className="border border-slate-300 px-3 py-2">do 24h</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">Delimični</td>
                    <td className="border border-slate-300 px-3 py-2">do 6h</td>
                    <td className="border border-slate-300 px-3 py-2">do 48h</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">Manji</td>
                    <td className="border border-slate-300 px-3 py-2">do 24h</td>
                    <td className="border border-slate-300 px-3 py-2">po planu</td>
                  </tr>
                </tbody>
              </table>

              <p className="mt-3 text-sm text-slate-600">
                Dostupnost i rokovi rešavanja zavise i od spoljašnjih faktora kao što su internet
                konekcija, napajanje i uslovi na lokaciji korisnika.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">8. Obaveze</h2>
              <p className="font-semibold">Pružalac usluge:</p>
              <ul className="list-disc pl-6">
                <li>isporučuje opremu</li>
                <li>vrši instalaciju i obuku</li>
                <li>obezbeđuje održavanje sistema</li>
              </ul>

              <p className="mt-3 font-semibold">Korisnik:</p>
              <ul className="list-disc pl-6">
                <li>obezbeđuje internet konekciju i napajanje</li>
                <li>koristi sistem pravilno</li>
                <li>reaguje na alarmna obaveštenja</li>
                <li>uredno izmiruje obaveze</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">9. Ograničenja</h2>
              <p>Pružalac usluge ne odgovara za probleme nastale usled:</p>
              <ul className="list-disc pl-6">
                <li>nestanka struje</li>
                <li>prekida internet konekcije</li>
                <li>nepostupanja korisnika po alarmu</li>
                <li>nepravilnog korišćenja sistema</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">10. Trajanje i raskid</h2>
              <p>
                Ugovor traje <strong>12 meseci</strong>. Otkazni rok je <strong>30 dana pisanim putem</strong>.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-bold">11. Važenje ponude</h2>
              <p>
                Ponuda važi <strong>7 dana</strong>. Potpisivanjem ovog dokumenta ponuda postaje ugovor.
              </p>
            </section>
          </div>

          <div className="mt-12 grid gap-10 border-t border-slate-200 pt-8 text-sm sm:grid-cols-2">
            <div>
              <p className="font-semibold">Pružalac usluge:</p>
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