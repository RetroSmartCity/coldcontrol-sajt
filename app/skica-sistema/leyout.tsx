import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skica sistema | ColdControl",
  description:
    "Skica povezivanja ColdControl sistema: senzor u frižideru, uređaj van frižidera, USB napajanje i WiFi slanje podataka.",
};

export default function SkicaSistemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}