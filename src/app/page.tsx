//Components
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA"
export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Testimonial />
      <CTA />
    </main>
  )
}
