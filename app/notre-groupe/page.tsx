import type { Metadata } from "next";
import { EnConception } from "@/components/neema/EnConception";

export const metadata: Metadata = {
  title: "Notre Groupe",
};

export default function NotreGroupePage() {
  return <EnConception label="Notre Groupe" />;
}
