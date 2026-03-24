import { speakers } from "@/lib/data";
import SpeakerPageContent from "./SpeakerPageContent";
import type { Metadata } from "next";
import { getSpeakerBySlug } from "@/lib/utils";

export function generateStaticParams() {
  return speakers.map((speaker) => ({
    slug: speaker.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const speaker = getSpeakerBySlug(slug);
  return {
    title: speaker
      ? `${speaker.name} - PHC Conference 2026`
      : "Speaker - PHC Conference 2026",
    description: speaker?.description,
  };
}

export default async function SpeakerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SpeakerPageContent slug={slug} />;
}
