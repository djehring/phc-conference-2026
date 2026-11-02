import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibitors and sponsors: PHC Conference 2026 archive",
  description: "The exhibitors and sponsors who supported PHC Conference 2026.",
  alternates: { canonical: "/2026/exhibitors/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
