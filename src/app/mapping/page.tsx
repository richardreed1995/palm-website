import HeroSectionMapping from "@/components/hero-section-mapping";
import ProcessMapping from "@/components/process-mapping";
import BenefitsMapping from "@/components/benefits-mapping";
import FAQsMapping from "@/components/faqs-mapping";
import CTAMapping from "@/components/cta-mapping";
import FooterMapping from "@/components/footer-mapping";
import { HeroHeaderMapping } from "@/components/header-mapping";
import ProcessDescription from "@/components/process-description";
import WhatsIncludedMapping from "@/components/whats-included-mapping";

export default function MappingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroHeaderMapping />
      <main className="flex-1 flex flex-col">
        <HeroSectionMapping />
        <BenefitsMapping />
        <ProcessDescription />
        <WhatsIncludedMapping />
        <ProcessMapping />
        <FAQsMapping />
        <CTAMapping />
      </main>
      <FooterMapping />
    </div>
  );
}
