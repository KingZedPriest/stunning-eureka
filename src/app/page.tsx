//Components
import HeroSection from "@/components/(LandingPageComponents)/HeroSection";
import SecondSection from "@/components/(LandingPageComponents)/SecondSection";
import ThirdSection from "@/components/(LandingPageComponents)/ThirdSection";
import FourthSection from "@/components/(LandingPageComponents)/FourthSection";
import Testimonial from "@/components/(LandingPageComponents)/Testimonial";
import Contact from "@/components/(LandingPageComponents)/Contact";
import CTA from "@/components/(LandingPageComponents)/CTA"
export default async function Home() {
  await new Promise (resolve => setTimeout(resolve, 6000))
  return (
    <main className="bg-white">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Testimonial />
      <Contact />
      <CTA />
    </main>
  )
}
