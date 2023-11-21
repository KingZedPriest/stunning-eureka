import Image from "next/image";
//Import Header component
import SecondHeader from "@/components/SecondHeader";
import FirstSection from "@/components/(AboutPageComponents)/FirstSection";
export default function About() {
  const headerProps = {
    heading: "About",
    coloredPart: "Us",
    route: "About Us",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
      <div className="py-[8rem] px-4 sm:px-10 md:px-12 lg:px-14">
        <FirstSection />
      </div>
    </main>
  );
}
