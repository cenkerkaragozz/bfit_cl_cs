"use client";

import { useState } from "react";
import { CheckUpFormSection } from "@/components/CheckUpFormSection";
import { CheckUpSection } from "@/components/CheckUpSection";
import { ConfidenceSection } from "@/components/ConfidenceSection";
import { HelpSection } from "@/components/HelpSection";
import { ProgramSection } from "@/components/ProgramSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export function LandingFunnel() {
  const [selectedConcern, setSelectedConcern] = useState(
    "Ödevin başına geçmekte zorlanıyor veya sürekli erteliyor.",
  );

  return (
    <>
      <HelpSection selectedConcern={selectedConcern} onSelectConcern={setSelectedConcern} />
      <ConfidenceSection />
      <CheckUpSection />
      <ProgramSection />
      <TestimonialSection />
      <CheckUpFormSection selectedConcern={selectedConcern} />
    </>
  );
}
