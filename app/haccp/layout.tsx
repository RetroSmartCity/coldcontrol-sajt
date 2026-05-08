import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACCP kontrola temperature | ColdControl Systems",
  description:
    "ColdControl za HACCP objekte: kontinuirano praćenje temperature u frižiderima, hladnjačama i rashladnim vitrinama, automatska evidencija, alarmi i izveštaji.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}