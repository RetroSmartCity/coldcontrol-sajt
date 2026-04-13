"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormState = {
  company: string;
  person: string;
  phone: string;
  email: string;
  address: string;
  type: string;
  locations: string;
  sensors: string;
  message: string;
};

const initialState: FormState = {
  company: "",
  person: "",
  phone: "",
  email: "",
  address: "",
  type: "",
  locations: "",
  sensors: "",
  message: "",
};

export default function DemoRequestForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Došlo je do greške pri slanju.");
      }

      setSuccessMessage("Uspešno poslato. Javićemo vam se uskoro.");
      setForm(initialState);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Došlo je do neočekivane greške."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Ime firme
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
            placeholder="npr. Apoteka Zemun"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Kontakt osoba
          </label>
          <input
            name="person"
            value={form.person}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
            placeholder="Ime i prezime"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Telefon
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
            placeholder="06x xxx xxxx"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
            placeholder="email@firma.rs"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Grad / adresa
        </label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
          placeholder="Grad, adresa ili lokacija objekta"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Tip objekta
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-[#0B1B2B] px-4 py-3 text-white outline-none focus:border-cyan-400/40"
          >
            <option value="">Izaberi</option>
            <option value="Apoteka">Apoteka</option>
            <option value="Hladnjača">Hladnjača</option>
            <option value="Restoran">Restoran</option>
            <option value="Supermarket">Supermarket</option>
            <option value="Magacin">Magacin</option>
            <option value="Drugo">Drugo</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Broj lokacija
          </label>
          <input
            name="locations"
            value={form.locations}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
            placeholder="npr. 1"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">
            Broj senzora
          </label>
          <input
            name="sensors"
            value={form.sensors}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
            placeholder="npr. 5"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Poruka
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-cyan-400/40"
          placeholder="Napišite ukratko šta vam je potrebno..."
        />
      </div>

      {successMessage ? (
        <div className="rounded-2xl border border-green-400/20 bg-green-400/10 px-4 py-3 text-sm text-green-200">
          {successMessage}
        </div>
      ) : null}

      {errorMessage ? (
        <div className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {errorMessage}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="rounded-2xl bg-yellow-400 px-6 py-4 text-base font-bold text-black shadow-[0_12px_30px_rgba(250,204,21,0.22)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Šaljem..." : "Pošalji zahtev"}
      </button>
    </form>
  );
}