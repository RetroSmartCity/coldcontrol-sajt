import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import DashboardPreview from "./components/DashboardPreview";
import Solutions from "./components/Solutions";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#071521] text-white">
      <Header />

      <div className="relative z-0 flex flex-col">
        <Hero />
        <HowItWorks />
        <DashboardPreview />
        <Solutions />
        <Pricing />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}