//Import Header component
import SecondHeader from "@/components/SecondHeader";
import ContactForm from "@/components/(ContactComponents)/ContactForm";
import Consult from "@/components/(AboutUsComponents)/Consult";
import OfficeLocation from "@/components/(FaqsComponents)/OfficeLocation";
import CTA from "@/components/(LandingPageComponents)/CTA"; 

const headerProps = {
  heading: "Contact",
  coloredPart: "Us",
  route: "Contact Us",
};

export default function Contact() {
  
  return (
    <main>
      <SecondHeader {...headerProps} />
      <ContactForm />
      <Consult />
      <OfficeLocation />
      <CTA />
    </main>
  );
}
