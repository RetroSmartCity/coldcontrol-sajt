"use client";

export default function PrimerUgovoraPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-4 py-12 text-white sm:px-6 lg:px-8 print:bg-white print:text-black">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 print:hidden">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Ponuda i ugovor za sistem praćenja temperature
          </h1>

          <p className="mt-3 text-white/70">
            Rešenje za automatsku evidenciju temperature – spremno za inspekciju bez ručnog vođenja.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/"
              className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
            >
              ← Nazad na sajt
            </a>

            <button
              onClick={() => window.print()}
              className="rounded-xl bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:scale-[1.02]"
            >
              Štampaj / Sačuvaj PDF
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 leading-7 print:border print:border-gray-300 print:bg-white">
          <div className="mb-8 border-b border-white/10 pb-6 print:border-gray-300">
            <h2 className="text-xl font-semibold sm:text-2xl">
              PONUDA I UGOVOR ZA SISTEM PRAĆENJA TEMPERATURE
            </h2>

            <p className="mt-3 font-semibold">
              Rešenje za automatsku evidenciju temperature – spremno za inspekciju bez ručnog vođenja.
            </p>

            <p className="mt-6">
              Datum: __________________
              <br />
              Broj ponude: __________________
            </p>

            <p className="mt-6">
              <strong>Pružalac usluge:</strong> ______________________________
              <br />
              Adresa: ______________________________
              <br />
              PIB: ______________________________
            </p>

            <p className="mt-4">
              <strong>Korisnik:</strong> ______________________________
              <br />
              Adresa: ______________________________
              <br />
              PIB: ______________________________
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="mb-2 font-semibold">1. Predmet</h3>
              <p>
                Isporuka i korišćenje sistema za kontinuirano praćenje temperature
                24/7, sa automatskim beleženjem podataka i alarmnim obaveštenjima.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">2. Ponuda</h3>

              <p className="font-semibold">Osnovni paket obuhvata:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>1 uređaj,</li>
                <li>3 senzora,</li>
                <li>instalaciju,</li>
                <li>osnovnu obuku.</li>
              </ul>

              <p className="mt-4">
                Cena osnovnog paketa:{" "}
                <strong>99€ bez PDV-a</strong> promotivno.
                <br />
                Redovna cena: <strong>199€ bez PDV-a</strong>.
              </p>

              <p className="mt-4">
                Dodatni senzor:{" "}
                <strong>30€ po senzoru bez PDV-a</strong>.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">3. Održavanje i cloud usluga</h3>
              <p>
                Održavanje je obavezno za redovan rad sistema i uključuje cloud
                pristup, čuvanje podataka, pregled istorije, alarmni sistem i
                tehničku podršku.
              </p>

              <p className="mt-3">
                Standardna cena održavanja:{" "}
                <strong>4€ po senzoru mesečno bez PDV-a</strong>.
              </p>

              <p className="mt-3">
                Za veće sisteme i lance cena može biti od{" "}
                <strong>3,2€ po senzoru mesečno bez PDV-a</strong>, u skladu sa
                posebnom ponudom.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">4. Funkcionalnosti sistema</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>kontinuirano praćenje temperature 24/7,</li>
                <li>automatsko beleženje podataka,</li>
                <li>pregled istorije merenja,</li>
                <li>alarm pri odstupanju,</li>
                <li>pregled po uređajima i lokacijama.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">5. Garancija</h3>
              <p>
                Garancija na opremu traje <strong>12 meseci</strong> i odnosi se
                na kvarove nastale u redovnoj i pravilnoj upotrebi.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">6. Evidencija podataka i inspekcija</h3>
              <p>
                Sistem automatski beleži i čuva podatke o temperaturi i statusima
                tokom celog perioda korišćenja usluge.
              </p>

              <p className="mt-3">
                Izveštaji se mogu generisati u svakom trenutku, čime je evidencija
                dostupna i spremna za potrebe inspekcijskog nadzora.
              </p>

              <p className="mt-3 font-semibold">
                Automatska evidencija eliminiše potrebu za ručnim vođenjem temperature.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">7. SLA – nivo usluge</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>dostupnost sistema: <strong>≥ 99% mesečno</strong>,</li>
                <li>monitoring servera i uređaja,</li>
                <li>evidencija statusa sistema.</li>
              </ul>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr>
                      <th className="border border-white/20 px-3 py-2 print:border-gray-400">Problem</th>
                      <th className="border border-white/20 px-3 py-2 print:border-gray-400">Reakcija</th>
                      <th className="border border-white/20 px-3 py-2 print:border-gray-400">Rešenje</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">Kritični</td>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">do 2h</td>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">do 24h</td>
                    </tr>
                    <tr>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">Delimični</td>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">do 6h</td>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">do 48h</td>
                    </tr>
                    <tr>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">Manji</td>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">do 24h</td>
                      <td className="border border-white/20 px-3 py-2 print:border-gray-400">po planu</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">8. Obaveze</h3>

              <p className="font-semibold">Pružalac usluge:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>isporučuje opremu,</li>
                <li>vrši instalaciju i obuku,</li>
                <li>obezbeđuje održavanje sistema.</li>
              </ul>

              <p className="mt-4 font-semibold">Korisnik:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>obezbeđuje internet i napajanje,</li>
                <li>koristi sistem pravilno,</li>
                <li>reaguje na alarme,</li>
                <li>uredno izmiruje obaveze.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">9. Ograničenja</h3>
              <p>Pružalac usluge ne odgovara za probleme nastale usled:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>nestanka struje,</li>
                <li>prekida internet konekcije,</li>
                <li>nepostupanja korisnika po alarmu,</li>
                <li>nepravilnog korišćenja sistema.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">10. Trajanje i raskid</h3>
              <p>
                Ugovor traje <strong>12 meseci</strong>. Otkazni rok je{" "}
                <strong>30 dana pisanim putem</strong>.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">11. Važenje ponude</h3>
              <p>
                Ponuda važi <strong>7 dana</strong>. Potpisivanjem ovog dokumenta
                ponuda postaje ugovor.
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/70 print:border-gray-300 print:text-black">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <p>Pružalac usluge:</p>
                <p className="mt-8">______________________________</p>
              </div>

              <div>
                <p>Korisnik:</p>
                <p className="mt-8">______________________________</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}