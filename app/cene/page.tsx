import Header from "../components/Header";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export const metadata = {
  title: "Cene sistema | ColdControl",
  description:
    "Cene ColdControl sistema za praćenje temperature: uređaj, senzori, cloud održavanje i ponuda za veće sisteme.",
};

export default function CenePage() {
  return (
    <>
      <Header />
      <Pricing />
      <Footer />
    </>
  );
}