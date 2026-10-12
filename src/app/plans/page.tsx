import type { Metadata } from "next";
import { PlansApp } from "@/components/plans/plans-app";

export const metadata: Metadata = {
  title: "Your plans — Hopscotch",
};

export default function PlansPage() {
  return <PlansApp />;
}
