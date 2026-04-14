export default function PrimerUgovoraPage() {
  return (
    <main className="min-h-screen bg-[#071521] text-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Primer ugovora o saradnji
          </h1>
          <p className="mt-3 text-white/70">
            Informativni primer ugovora za ColdControl sistem praćenja temperature.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
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

        {/* Content */}
        <div className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-6 leading-7">

          <h2 className="text-xl font-semibold">
            UGOVOR O ISPORUCI I ODRŽAVANJU SISTEMA ZA PRAĆENJE TEMPERATURE
          </h2>

          <p>
            Zaključen dana __________ između:
          </p>

          <p>
            <strong>Pružalac usluge:</strong> ColdControl Systems  
            <br />
            (u daljem tekstu: „Pružalac usluge“)
          </p>

          <p>
            <strong>Korisnik:</strong> ________________________  
            <br />
            ________________________  
            <br />
            (u daljem tekstu: „Korisnik“)
          </p>

          <hr className="border-white/10" />

          <div>
            <h3 className="font-semibold mb-2">Član 1 – Predmet ugovora</h3>
            <p>
              Predmet ovog ugovora je isporuka i korišćenje sistema za praćenje temperature
              koji obuhvata uređaje, senzore, cloud platformu i alarmni sistem.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Član 2 – Opis sistema</h3>
            <p>
              Sistem omogućava kontinuirano praćenje temperature (24/7), pregled u realnom vremenu,
              istoriju merenja i automatsko obaveštavanje o odstupanjima.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Član 3 – Garancija</h3>
            <p>
              Garancija na uređaje i senzore iznosi 12 meseci i pokriva kvarove u redovnoj upotrebi.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Član 4 – Cloud usluga</h3>
            <p>
              Korisnik dobija 12 meseci besplatnog pristupa cloud platformi.
              Nakon isteka, usluga se nastavlja uz pretplatu.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Član 5 – Obaveze korisnika</h3>
            <p>
              Korisnik je dužan da koristi sistem u skladu sa uputstvima i reaguje
              na alarmne situacije.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Član 6 – Odgovornost</h3>
            <p>
              Pružalac usluge ne snosi odgovornost za štetu nastalu usled
              neblagovremene reakcije korisnika, prekida interneta ili električne energije.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Član 7 – Podaci</h3>
            <p>
              Svi podaci o temperaturi se čuvaju u sistemu i dostupni su korisniku.
              Sistem vodi evidenciju promena (audit log).
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Član 8 – Trajanje ugovora</h3>
            <p>
              Ugovor se zaključuje na period od 12 meseci i može se produžiti sporazumno.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Član 9 – Raskid</h3>
            <p>
              Svaka strana može raskinuti ugovor uz otkazni rok od 30 dana.
            </p>
          </div>

          <hr className="border-white/10" />

          <div className="pt-4 flex justify-between text-sm text-white/70">
            <div>
              <p>Pružalac usluge:</p>
              <p className="mt-6">________________________</p>
            </div>

            <div>
              <p>Korisnik:</p>
              <p className="mt-6">________________________</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}