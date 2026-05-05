"use client";

import Image from "next/image";
import Link from "next/link";

const rows = [
  ["2026-04-30", "3.06 °C", "08:00:01", "3.94 °C", "13:59:51"],
  ["2026-05-01", "6.19 °C", "08:00:05", "2.75 °C", "14:00:03"],
  ["2026-05-02", "5.12 °C", "08:00:07", "4.12 °C", "13:59:51"],
  ["2026-05-03", "5.19 °C", "08:00:05", "4.12 °C", "13:59:54"],
  ["2026-05-04", "7.06 °C", "08:00:05", "7.44 °C", "13:59:50"],
];

export default function PrimerIzvestajaPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-4 py-10 text-white sm:px-6 lg:px-8 print:bg-white print:p-0 print:text-black">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="rounded-xl border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            ← Nazad na sajt
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
              Inspekcijski dokument
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-950">
              IZVEŠTAJ O TEMPERATURI ZA INSPEKCIJU
            </h1>

            <p className="mt-3 text-base font-semibold text-slate-700">
              Automatska evidencija temperature — spremno za internu kontrolu i inspekcijski uvid.
            </p>
          </header>

          <section className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-5 text-sm sm:grid-cols-2">
            <div className="space-y-2">
              <p><strong>Objekat:</strong> Neka Apoteka</p>
              <p><strong>Senzor:</strong> Frižider 1</p>
              <p><strong>Adresa:</strong> Mite Mitića 33</p>
            </div>

            <div className="space-y-2">
              <p><strong>Period:</strong> 2026-04-30 - 2026-05-04</p>
              <p><strong>Tip izveštaja:</strong> dnevna kontrolna očitavanja</p>
              <p><strong>Status:</strong> u opsegu 2–8 °C</p>
            </div>
          </section>

          <section className="mt-6">
            <p className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
              Merenja su uzeta oko 08:00 i 14:00 časova, sa tolerancijom od par minuta.
              Izveštaj prikazuje očitavanja za izabrani period, minimalnu i maksimalnu temperaturu.
            </p>
          </section>

          <section className="mt-6 overflow-hidden rounded-2xl border border-slate-300">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3">Datum</th>
                  <th className="px-4 py-3">Temp 08h</th>
                  <th className="px-4 py-3">Vreme</th>
                  <th className="px-4 py-3">Temp 14h</th>
                  <th className="px-4 py-3">Vreme</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row[0]}
                    className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                  >
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`} className="border-t border-slate-200 px-4 py-3">
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
                Minimum
              </p>
              <p className="mt-2 text-2xl font-extrabold">2.75 °C</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Maksimum
              </p>
              <p className="mt-2 text-2xl font-extrabold">7.44 °C</p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                Zaključak
              </p>
              <p className="mt-2 font-bold text-green-800">
                Evidencija dostupna za kontrolu.
              </p>
            </div>
          </section>

          <section className="mt-6 rounded-2xl bg-slate-900 p-5 text-white print:bg-slate-100 print:text-slate-900">
            <p className="font-bold">
              Automatska evidencija – spremno za inspekciju.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300 print:text-slate-700">
              Podaci su generisani iz ColdControl sistema za kontinuirano praćenje temperature.
              Izveštaj služi kao pregled očitavanja, minimuma, maksimuma i statusa za izabrani period.
            </p>
          </section>

          <footer className="mt-12 grid gap-10 border-t border-slate-200 pt-8 text-sm sm:grid-cols-2">
            <div>
              <p className="font-semibold">Izveštaj generisao:</p>
              <p className="mt-2">ColdControl Systems</p>
            </div>

            <div>
              <p className="font-semibold">Odgovorno lice:</p>
              <p className="mt-10">______________________________</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}