//Import Header component
import SecondHeader from "@/components/SecondHeader";


import CTA from "@/components/(LandingPageComponents)/CTA"; 

export default function About() {
  const headerProps = {
    heading: "Contact",
    coloredPart: "Us",
    route: "Contact Us",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
        
        <CTA />
    </main>
  );
}
