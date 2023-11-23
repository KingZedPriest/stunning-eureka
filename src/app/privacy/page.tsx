//Import Header component
import SecondHeader from "@/components/SecondHeader";


import CTA from "@/components/(LandingPageComponents)/CTA"; 

export default function Privacy() {
  const headerProps = {
    heading: "Privacy",
    coloredPart: "Statement",
    route: "Privacy",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
        
        <CTA />
    </main>
  );
}
