import type { Metadata } from "next";
import { EnConception } from "@/components/neema/EnConception";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function ConfidentialitePage() {
  return <EnConception label="Confidentialité" />;
}
