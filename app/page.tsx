"use client";

import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import DashboardPreview from "./components/DashboardPreview";
import Solutions from "./components/Solutions";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  return (
    <main className="relative overflow-x-hidden bg-[#071521] text-white">
      <Header />

      <div className="relative z-0 flex flex-col">
        <Hero />

        {/* PLATFORMA */}
        <section id="proizvod" className="scroll-mt-24">
          <DashboardPreview />
        </section>

        {/* KONTROLNI BLOK */}
        <section className="px-4 py-12">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-[#0d2130] p-6 shadow-2xl md:p-8">
            <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.26em] text-cyan-300">
                  Brzi izbor
                </p>

                <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
                  Pogledajte samo ono što vam treba
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  Detalji sistema i cene se prikazuju na klik, bez odlaska na drugu stranicu.
                </p>
              </div>

              <div className="grid gap-4">
                {/* DETAILS */}
                <button
                  onClick={() => setShowDetails((prev) => !prev)}
                  className="rounded-2xl border border-cyan-300/30 bg-[#081622] px-6 py-5 text-left transition hover:border-cyan-300/70 hover:bg-[#10283a]"
                >
                  <span className="block text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                    Detalji sistema
                  </span>

                  <span className="mt-2 block text-xl font-extrabold text-white">
                    {showDetails ? "Sakrij detalje ↑" : "Kako radi sistem ↓"}
                  </span>
                </button>

                {/* PRICING */}
                <button
                  onClick={() => setShowPricing((prev) => !prev)}
                  className="rounded-2xl bg-yellow-400 px-6 py-5 text-left text-black transition hover:bg-yellow-300"
                >
                  <span className="block text-sm font-bold uppercase tracking-[0.22em] text-black/60">
                    Ponuda
                  </span>

                  <span className="mt-2 block text-xl font-extrabold">
                    {showPricing ? "Sakrij cene ↑" : "Prikaži cene →"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE / RESENJA */}
        <section id="resenja" className="scroll-mt-24">
          {showDetails && (
            <>
              <HowItWorks />
              <Solutions />
            </>
          )}
        </section>

        {/* CENE */}
        <section id="cene" className="scroll-mt-24">
          {showPricing && <Pricing />}
        </section>

        <CTA />
      </div>

      <Footer />
    </main>
  );
}