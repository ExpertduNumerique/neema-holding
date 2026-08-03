import type { Metadata } from "next";
import { EnConception } from "@/components/neema/EnConception";

export const metadata: Metadata = {
  title: "Notre Équipe",
};

export default function NotreEquipePage() {
  return <EnConception label="Notre Équipe" />;
}
