import type { Metadata } from "next";
import { EnConception } from "@/components/neema/EnConception";

export const metadata: Metadata = {
  title: "Presse & Kit média",
};

export default function PressePage() {
  return <EnConception label="Presse & Kit média" />;
}
