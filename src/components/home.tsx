import { Hero } from "./home/hero";
import { ServicesSection } from "./home/services-section";
import { PrinciplesSection } from "./home/principles-section";
import { WorkTeaser } from "./home/work-teaser";
import { CareersTeaser } from "./home/careers-teaser";
import { ContactCta } from "./home/contact-cta";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PrinciplesSection />
      <WorkTeaser />
      <CareersTeaser />
      <ContactCta />
    </>
  );
}
