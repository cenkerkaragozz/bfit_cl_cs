import { CheckUpFormSection } from "@/components/CheckUpFormSection";
import { CheckUpShowcaseSection } from "@/components/CheckUpShowcaseSection";
import { CheckUpSection } from "@/components/CheckUpSection";
import { ChildFaqSection } from "@/components/ChildFaqSection";
import { ConfidenceSection } from "@/components/ConfidenceSection";
import { HelpSection } from "@/components/HelpSection";
import { ReportAndMeasurementSection } from "@/components/ReportAndMeasurementSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export function LandingFunnel() {
  return (
    <>
      <HelpSection />
      <ConfidenceSection />
      <CheckUpSection />
      <ReportAndMeasurementSection surface="white" />
      <CheckUpShowcaseSection />
      <ChildFaqSection />
      <TestimonialSection />
      <CheckUpFormSection />
    </>
  );
}
