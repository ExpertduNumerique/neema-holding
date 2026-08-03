import type { Metadata } from "next";
import { EnConception } from "@/components/neema/EnConception";

export const metadata: Metadata = {
  title: "Actualités",
};

export default function ActualitesPage() {
  return <EnConception label="Actualités" />;
}
