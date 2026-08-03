import type { Metadata } from "next";
import { EnConception } from "@/components/neema/EnConception";

export const metadata: Metadata = {
  title: "Partenaires",
};

export default function PartenairesPage() {
  return <EnConception label="Partenaires" />;
}
