//Import Header component
import SecondHeader from "@/components/SecondHeader";
import ServiceOverview from "@/components/(ServicesComponents)/ServiceOverview";

import CTA from "@/components/(LandingPageComponents)/CTA"; 

export default function Services() {
  const headerProps = {
    heading: "Our",
    coloredPart: "Services",
    route: "Services",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
      <ServiceOverview />
      <CTA />
    </main>
  );
}
