//Import Header component
import SecondHeader from "@/components/SecondHeader";
import FirstSection from "@/components/(WhyChooseUsComponents)/FirstSection";
import SecondSection from "@/components/(WhyChooseUsComponents)/SecondSection";
import WhyChooseUsSection from "@/components/(WhyChooseUsComponents)/WhyChooseUs";

import CTA from "@/components/(LandingPageComponents)/CTA"; 

export default function WhyChooseUs() {
  const headerProps = {
    heading: "Why Choose",
    coloredPart: "Us",
    route: "Why Choose Us",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
        <FirstSection />
        <SecondSection />
        <WhyChooseUsSection />
        <CTA />
    </main>
  );
}
