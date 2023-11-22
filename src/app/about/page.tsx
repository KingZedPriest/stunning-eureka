import Image from "next/image";
//Import Header component
import SecondHeader from "@/components/SecondHeader";
import FirstSection from "@/components/(AboutPageComponents)/FirstSection";
import SecondSection from "@/components/(AboutPageComponents)/SecondSection";
import WhyChooseUs from "@/components/(AboutPageComponents)/WhyChooseUs";

import CTA from "@/components/(LandingPageComponents)/CTA"; 

export default function About() {
  const headerProps = {
    heading: "About",
    coloredPart: "Us",
    route: "About Us",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
        <FirstSection />
        <SecondSection />
        <WhyChooseUs />
        <CTA />
    </main>
  );
}
