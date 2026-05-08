import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Izveštaj mapiranja frižidera | ColdControl Systems",
  description:
    "Primer izveštaja temperaturnog mapiranja farmaceutskog frižidera tokom 48h sa tri merne sonde, min/max vrednostima, grafičkom analizom i audit evidencijom.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}