import { CheckUpFormSection } from "@/components/CheckUpFormSection";
import { CheckUpShowcaseSection } from "@/components/CheckUpShowcaseSection";
import { CheckUpSection } from "@/components/CheckUpSection";
import { ChildFaqSection } from "@/components/ChildFaqSection";
import { ConfidenceSection } from "@/components/ConfidenceSection";
import { HelpSection } from "@/components/HelpSection";
import { PostPlanSupportSection } from "@/components/PostPlanSupportSection";
import { ReportAndMeasurementSection } from "@/components/ReportAndMeasurementSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export function LandingFunnel() {
  return (
    <>
      <HelpSection />
      <TestimonialSection />
      <ConfidenceSection />
      <CheckUpSection />
      <ReportAndMeasurementSection surface="white" />
      <CheckUpShowcaseSection />
      <PostPlanSupportSection />
      <ChildFaqSection />
      <CheckUpFormSection />
    </>
  );
}
