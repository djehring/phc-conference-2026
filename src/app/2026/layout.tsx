import type { Metadata } from "next";
import ArchiveBanner from "@/components/ArchiveBanner";

export const metadata: Metadata = {
  title: "PHC Conference 2026 archive: Nourish to Flourish",
  description:
    "Archive of PHC Conference 2026, Nourish to Flourish, held on 16 and 17 May 2026 at The Light, Euston, London.",
  alternates: { canonical: "/2026/" },
};

export default function Archive2026Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArchiveBanner />
      {children}
    </>
  );
}
