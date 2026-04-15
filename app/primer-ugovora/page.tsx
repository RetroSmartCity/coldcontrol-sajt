"use client";

export default function PrimerUgovoraPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-4 py-12 text-white sm:px-6 lg:px-8 print:bg-white print:text-black">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 print:hidden">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Primer ugovora o saradnji
          </h1>
          <p className="mt-3 text-white/70">
            Informativni primer ugovora za sistem praćenja temperature sa promo
            uslovima za prvih 100 apoteka.
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
              UGOVOR O ISPORUCI, KORIŠĆENJU I ODRŽAVANJU SISTEMA ZA PRAĆENJE TEMPERATURE
            </h2>

            <p className="mt-4">
              Zaključen dana __________________ između:
            </p>

            <p className="mt-4">
              <strong>Pružalac usluge:</strong> ______________________________
              <br />
              Adresa: ______________________________
              <br />
              PIB / Matični broj: ______________________________
              <br />
              (u daljem tekstu: „Pružalac usluge“)
            </p>

            <p className="mt-4">
              <strong>Korisnik:</strong> ______________________________
              <br />
              Adresa: ______________________________
              <br />
              PIB / Matični broj: ______________________________
              <br />
              (u daljem tekstu: „Korisnik“)
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="mb-2 font-semibold">Član 1 – Predmet ugovora</h3>
              <p>
                Predmet ovog ugovora je isporuka, instalacija, puštanje u rad i
                održavanje sistema za kontinuirano praćenje temperature, koji
                obuhvata uređaj, senzore, cloud platformu za pregled podataka i
                alarmni sistem za obaveštavanje o odstupanjima.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 2 – Promo uslovi</h3>
              <p>
                U okviru promo perioda za prvih 100 apoteka, Korisniku se nudi
                početni paket po ceni od <strong>99€</strong>, koji uključuje:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>jedan uređaj,</li>
                <li>3 senzora,</li>
                <li>besplatnu instalaciju,</li>
                <li>osnovnu obuku za korišćenje sistema.</li>
              </ul>

              <p className="mt-3">
                Minimalna konfiguracija po uređaju iznosi 3 senzora.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 3 – Garancija</h3>
              <p>
                Garancija na uređaje traje <strong>12 meseci</strong> i odnosi se
                na kvarove nastale u redovnoj i pravilnoj upotrebi.
              </p>
              <p className="mt-3">
                Garancija predstavlja odvojenu stavku od usluge održavanja sistema
                i cloud pristupa.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 4 – Dodatni senzori i proširenje sistema</h3>
              <p>
                Korisnik može proširiti sistem dodatnim senzorima i dodatnim
                uređajima prema potrebama objekta ili organizacije.
              </p>
              <p className="mt-3">
                Cena svakog dodatnog senzora iznosi <strong>30€ jednokratno</strong>.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 5 – Održavanje sistema i cloud pristup</h3>
              <p>
                Održavanje sistema i cloud pristup obračunavaju se od samog početka
                korišćenja sistema, odnosno od aktivacije sistema kod Korisnika.
              </p>

              <p className="mt-3">
                Standardna cena održavanja iznosi <strong>4€ po senzoru mesečno</strong>.
              </p>

              <p className="mt-3">
                Za lance, veće sisteme i veći ukupan broj senzora, cena održavanja
                može biti ugovorena po povoljnijem modelu, već od{" "}
                <strong>3€ po senzoru mesečno</strong>.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 6 – Funkcionalnost sistema</h3>
              <p>Sistem omogućava:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>kontinuirano praćenje temperature 24/7,</li>
                <li>pregled podataka u realnom vremenu,</li>
                <li>istoriju merenja,</li>
                <li>alarm pri izlasku temperature iz zadatog opsega,</li>
                <li>organizovan pregled po lokacijama, uređajima i senzorima.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 7 – Obaveze pružaoca usluge</h3>
              <p>Pružalac usluge se obavezuje da:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>isporuči ugovorenu opremu,</li>
                <li>izvrši instalaciju sistema,</li>
                <li>omogući osnovnu obuku korisnika,</li>
                <li>obezbedi rad cloud pregleda u okviru ugovorene usluge,</li>
                <li>vrši tehničko održavanje u okviru ugovorenog modela.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 8 – Obaveze korisnika</h3>
              <p>Korisnik se obavezuje da:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>omogući uslove za instalaciju sistema,</li>
                <li>koristi sistem u skladu sa uputstvima,</li>
                <li>pravovremeno reaguje na alarmne situacije,</li>
                <li>uredno izmiruje ugovorene naknade.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 9 – Ograničenje odgovornosti</h3>
              <p>
                Pružalac usluge ne snosi odgovornost za štetu nastalu usled:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>prekida napajanja električnom energijom,</li>
                <li>prekida internet konekcije,</li>
                <li>neblagovremene reakcije Korisnika na alarm,</li>
                <li>nepravilnog rukovanja sistemom od strane Korisnika.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 10 – Podaci i evidencija</h3>
              <p>
                Podaci o temperaturi, statusima i alarmima čuvaju se u sistemu i
                dostupni su Korisniku kroz cloud pregled, u skladu sa tehničkim
                mogućnostima sistema i ugovorenim paketom.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 11 – Trajanje ugovora</h3>
              <p>
                Ovaj ugovor se zaključuje na period od <strong>12 meseci</strong>,
                osim ako ugovorne strane ne dogovore drugačije.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 12 – Raskid ugovora</h3>
              <p>
                Svaka ugovorna strana može raskinuti ugovor uz pisano obaveštenje i
                otkazni rok od <strong>30 dana</strong>, osim u slučaju drugačijeg
                dogovora definisanog posebnim aneksom ili ponudom.
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-sm text-white/70 print:border-gray-300 print:text-black">
            <p className="mb-6">
              Ovaj dokument predstavlja informativni primer ugovora i služi kao osnova
              za pripremu konkretne ponude i konačne verzije ugovora sa korisnikom.
            </p>

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