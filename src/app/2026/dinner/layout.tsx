import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundraiser dinner: PHC Conference 2026 archive",
  description: "The PHC Conference 2026 evening fundraiser dinner at The Memoir Club, London.",
  alternates: { canonical: "/2026/dinner/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
