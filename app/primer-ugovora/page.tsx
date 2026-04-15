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
            Informativni primer ugovora za sistem praćenja temperature, sa jasno
            definisanim početnim paketom, načinom korišćenja i organizacijom usluge.
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
                korišćenje sistema za kontinuirano praćenje temperature, koji
                obuhvata uređaj, senzore, cloud pregled podataka i alarmni sistem
                za obaveštavanje o odstupanjima.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 2 – Početni paket</h3>
              <p>
                Početni paket obuhvata jedan uređaj sa 3 senzora, instalaciju i
                osnovnu obuku za korišćenje sistema.
              </p>

              <p className="mt-3">
                Redovna cena uređaja iznosi <strong>199€</strong>, dok je u okviru
                promo ponude uređaj dostupan po ceni od <strong>99€</strong>, u skladu
                sa važećim uslovima ponude.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 3 – Namena sistema</h3>
              <p>
                Sistem je namenjen automatskom praćenju temperature, čuvanju istorije
                merenja i organizovanom pregledu podataka kroz cloud platformu.
              </p>

              <p className="mt-3">
                Uvođenjem sistema korisnik prelazi sa ručnog upisivanja temperature
                na automatsko očitavanje i evidentiranje podataka, uz jednostavniji
                pregled i veću pouzdanost evidencije.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 4 – Dodatni senzori i proširenje</h3>
              <p>
                Sistem se može proširivati dodatnim senzorima i dodatnim uređajima,
                u skladu sa potrebama korisnika, brojem lokacija, prostorija,
                frižidera ili drugih tačaka merenja.
              </p>

              <p className="mt-3">
                Cena dodatnog senzora iznosi <strong>30€ jednokratno</strong> po senzoru.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 5 – Garancija</h3>
              <p>
                Garancija na uređaje traje <strong>12 meseci</strong> i odnosi se na
                kvarove nastale u redovnoj i pravilnoj upotrebi.
              </p>

              <p className="mt-3">
                Garancija se odnosi na opremu i predstavlja zasebnu stavku u odnosu
                na uslugu korišćenja cloud platforme i tehničke podrške.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 6 – Cloud pristup i održavanje</h3>
              <p>
                Za redovno korišćenje sistema korisniku je omogućen cloud pristup,
                pregled istorije merenja, statusa i alarmnih stanja, kao i tehnička
                podrška kroz organizovan model održavanja sistema.
              </p>

              <p className="mt-3">
                Standardni model održavanja iznosi <strong>4€ po senzoru mesečno</strong>.
              </p>

              <p className="mt-3">
                Za veće sisteme, lance i veći ukupan broj senzora može biti definisan
                povoljniji model, već od <strong>3,2€ po senzoru mesečno</strong>, u
                skladu sa posebnim dogovorom i ponudom.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 7 – Funkcionalnost sistema</h3>
              <p>Sistem omogućava:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>kontinuirano praćenje temperature 24/7,</li>
                <li>pregled trenutnog stanja i istorije merenja,</li>
                <li>automatsko evidentiranje podataka,</li>
                <li>alarm pri izlasku iz zadatog opsega,</li>
                <li>organizovan pregled po uređajima, lokacijama i zonama.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 8 – Obaveze pružaoca usluge</h3>
              <p>Pružalac usluge se obavezuje da:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>isporuči ugovorenu opremu,</li>
                <li>izvrši instalaciju sistema,</li>
                <li>omogući osnovnu obuku korisnika,</li>
                <li>obezbedi rad sistema u okviru ugovorenog modela,</li>
                <li>vrši tehničku podršku i održavanje u skladu sa paketom.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 9 – Obaveze korisnika</h3>
              <p>Korisnik se obavezuje da:</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>omogući uslove za instalaciju i korišćenje sistema,</li>
                <li>koristi sistem u skladu sa uputstvima,</li>
                <li>pravovremeno reaguje na alarmne situacije,</li>
                <li>uredno izmiruje ugovorene naknade.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 10 – Ograničenje odgovornosti</h3>
              <p>
                Pružalac usluge ne snosi odgovornost za štetu nastalu usled:
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>prekida napajanja električnom energijom,</li>
                <li>prekida internet konekcije,</li>
                <li>neblagovremene reakcije korisnika na alarm,</li>
                <li>nepravilnog rukovanja sistemom od strane korisnika.</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 11 – Podaci i evidencija</h3>
              <p>
                Podaci o temperaturi, statusima i alarmima čuvaju se u sistemu i
                dostupni su korisniku kroz cloud pregled, u skladu sa tehničkim
                mogućnostima sistema i ugovorenim paketom.
              </p>

              <p className="mt-3">
                Evidencija se vodi automatski kroz sistem, čime se smanjuje potreba
                za ručnim upisivanjem i dodatnim administrativnim opterećenjem.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 12 – Trajanje ugovora</h3>
              <p>
                Ovaj ugovor se zaključuje na period od <strong>12 meseci</strong>,
                osim ako ugovorne strane ne dogovore drugačije.
              </p>
            </section>

            <section>
              <h3 className="mb-2 font-semibold">Član 13 – Raskid ugovora</h3>
              <p>
                Svaka ugovorna strana može raskinuti ugovor uz pisano obaveštenje i
                otkazni rok od <strong>30 dana</strong>, osim u slučaju drugačijeg
                dogovora definisanog posebnom ponudom ili aneksom.
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