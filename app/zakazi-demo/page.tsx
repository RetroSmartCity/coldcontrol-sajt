import DemoRequestForm from "../components/demo-request/DemoRequestForm";

export default function ZakaziDemoPage() {
  return (
    <main className="min-h-screen bg-[#071521] px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">Zakaži demo</h1>

        <p className="mb-8 text-white/70">
          Pošaljite zahtev i javićemo vam se što pre.
        </p>

        <DemoRequestForm />
      </div>
    </main>
  );
}