//Import Header component
import SecondHeader from "@/components/SecondHeader";


import CTA from "@/components/(LandingPageComponents)/CTA"; 

export default function About() {
  const headerProps = {
    heading: "Our",
    coloredPart: "FAQs",
    route: "FAQs",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
        
        <CTA />
    </main>
  );
}
