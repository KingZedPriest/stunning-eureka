import Image from "next/image";
//Import Header component
import SecondHeader from "@/components/SecondHeader";
import FirstSection from "@/components/(AboutPageComponents)/FirstSection";
import SecondSection from "@/components/(AboutPageComponents)/SecondSection";

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
    </main>
  );
}
