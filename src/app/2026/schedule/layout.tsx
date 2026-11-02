import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule: PHC Conference 2026 archive",
  description: "The full two-day programme from PHC Conference 2026.",
  alternates: { canonical: "/2026/schedule/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
