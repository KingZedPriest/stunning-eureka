//Import Header component
import SecondHeader from "@/components/SecondHeader";
import OurTeam from "@/components/(AboutUsComponents)/OurTeam";

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
      <OurTeam />
      <CTA />
    </main>
  );
}
