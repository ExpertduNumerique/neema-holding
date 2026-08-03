import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { poles, getPole } from "@/lib/poles";
import { EnConception } from "@/components/neema/EnConception";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return poles.map((pole) => ({ slug: pole.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pole = getPole(slug);
  if (!pole) return {};
  return { title: pole.name };
}

export default async function PolePage({ params }: PageProps) {
  const { slug } = await params;
  const pole = getPole(slug);
  if (!pole) notFound();

  return <EnConception label={pole.name} />;
}
