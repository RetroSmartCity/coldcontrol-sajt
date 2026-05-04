import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primer poslovne ponude i SLA ugovora | ColdControl Systems",
  description:
    "Okvirni poslovni dokument za implementaciju ColdControl sistema sa SLA podrškom, automatskom evidencijom temperature i izveštajima za internu kontrolu i inspekcijski nadzor.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}