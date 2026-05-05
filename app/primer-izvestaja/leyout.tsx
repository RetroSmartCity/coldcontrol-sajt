import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Primer inspekcijskog izveštaja | ColdControl Systems",
  description:
    "Primer izveštaja o temperaturi za inspekcijski uvid sa automatskom evidencijom, minimalnim i maksimalnim vrednostima.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}