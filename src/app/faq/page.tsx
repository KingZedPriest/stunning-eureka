//Import needed component
import SecondHeader from "@/components/SecondHeader";
import AskedQuestion from "@/components/(FaqsComponents)/AskedQuestion";
import CTA from "@/components/(LandingPageComponents)/CTA"; 

 const headerProps = {
    heading: "Our",
    coloredPart: "FAQs",
    route: "FAQs",
  };

export default function FAQ() {

  return (
    <main>
      <SecondHeader {...headerProps} />
      <AskedQuestion />
      <CTA />
    </main>
  );
}
