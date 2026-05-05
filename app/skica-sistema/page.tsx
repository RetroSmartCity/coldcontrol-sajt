import Image from "next/image";
import Link from "next/link";

export default function SkicaSistemaPage() {
  return (
    <main className="min-h-screen bg-[#071625] text-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
            Dokumentacija
          </p>

          <h1 className="max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">
            Skica povezivanja ColdControl sistema
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            Senzor se postavlja unutar frižidera, dok ColdControl uređaj ostaje
            spolja. Uređaj se napaja preko USB punjača za telefon i šalje
            podatke putem WiFi konekcije.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-2xl">
          <Image
            src="/images/skica-coldcontrol.png"
            alt="Skica povezivanja ColdControl sistema"
            width={1600}
            height={900}
            className="h-auto w-full rounded-[1.5rem]"
            priority
          />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-bold">1. Senzor u frižideru</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Temperaturna sonda se postavlja u zonu robe ili lekova, tamo gde
              je merenje najbitnije.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-bold">2. Uređaj van frižidera</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Glavni uređaj ostaje spolja zbog stabilnijeg WiFi signala i bolje
              zaštite elektronike od vlage.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-bold">3. Email alarm</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Ako temperatura izađe iz dozvoljenog opsega, sistem šalje email
              obaveštenje odgovornoj osobi.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
          <h2 className="text-xl font-bold">Kratko objašnjenje za korisnika</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-white/75">
            ColdControl ne zahteva komplikovanu instalaciju. Sonda ide u
            frižider, kabl prolazi kroz zaptivku vrata, uređaj ostaje spolja i
            uključuje se u običan USB punjač. Sistem zatim automatski šalje
            podatke na platformu i omogućava email alarm u slučaju odstupanja.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/zakazi-demo"
            className="rounded-2xl bg-yellow-400 px-6 py-3 text-center text-sm font-bold text-black transition hover:bg-yellow-300"
          >
            Zakaži demo
          </Link>

          <Link
            href="/primer-izvestaja"
            className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Pogledaj primer izveštaja
          </Link>
        </div>
      </section>
    </main>
  );
}