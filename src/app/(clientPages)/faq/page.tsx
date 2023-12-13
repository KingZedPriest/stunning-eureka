//Import needed component
import SecondHeader from "@/components/SecondHeader";
import AskedQuestion from "@/components/(FaqsComponents)/AskedQuestion";
import Summary from "@/components/(ServicesComponents)/Summary";
import OfficeLocation from "@/components/(FaqsComponents)/OfficeLocation";
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
      <Summary />
      <OfficeLocation />
      <CTA />
    </main>
  );
}
