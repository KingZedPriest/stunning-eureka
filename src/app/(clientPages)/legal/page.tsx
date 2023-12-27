import Link from "next/link";
//Import Header component
import SecondHeader from "@/components/SecondHeader";

import CTA from "@/components/(LandingPageComponents)/CTA";

export default function Legal() {
  const headerProps = {
    heading: "Legal",
    coloredPart: "Statement",
    route: "Legal",
  };

  return (
    <main>
      <SecondHeader {...headerProps} />
      <div className="flex flex-col gap-y-3 px-4 pt-[8rem] sm:px-10 md:px-12 lg:px-14">
        <h1 className="text-lg font-[620] sm:text-xl md:text-2xl lg:text-3xl">
          United Traverse Legal Information
        </h1>
        <div className="mt-4 flex flex-col gap-y-3 text-xs font-medium sm:text-sm lg:text-base">
          <p>
            Welcome to United Traverse! These Terms of Service outline the rules
            and regulations for the use of our courier shipping services. By
            accessing our website and using our services, you agree to abide by
            these terms.
          </p>
          <div>
            <p className="font-bold">Service Overview</p>
            <p>
              United Traverse provides international courier shipping services.
              Our services are subject to these terms and any additional terms
              provided to you.
            </p>
          </div>
          <div>
            <p className="font-bold">User Responsibilities</p>
            <p>
              Users are responsible for providing accurate information,
              complying with shipping regulations, and adhering to our
              guidelines.
            </p>
            <p>
              Protecting your privacy is important to us.{" "}
              <Link href="/privacy" className="text-orange hover:underline">
                Our Privacy Policy
              </Link>{" "}
              outlines how we collect, use, and protect your personal
              information.
            </p>
          </div>
          <div>
            <p className="font-bold">Item Restrictions</p>
            <p>
              Certain items are restricted for shipment. It&apos;s crucial to
              review and comply with our shipping guidelines to ensure safe and
              legal transportation.
            </p>
            <ul className="mt-2 flex list-disc flex-col gap-y-2">
              <p className="font-bold">Hazardous Materials:</p>
              <li>Explosives</li>
              <li>Flammable materials</li>
              <li>Radioactive substances</li>
              <li>Corrosive materials</li>
              <p className="font-bold">Illegal Substances:</p>
              <li>Controlled substances</li>
              <li>Narcotics</li>
              <li>Drug paraphernalia</li>
              <p className="font-bold">Weapons and Firearms:</p>
              <li>Firearms and ammunition</li>
              <li>Explosive devices</li>
              <li>Knives and other weapons</li>
              <p className="font-bold">Perishable Goods:</p>
              <li>Fresh or frozen foods without proper packaging</li>
              <li>Live animals</li>
              <p className="font-bold">Valuables:</p>
              <li>Cash and currency</li>
              <li>Precious metals and stones</li>
              <p className="font-bold">Sensitive Information:</p>
              <li>Personal information without proper encryption</li>
              <li>Classified or confidential documents</li>
              <p className="font-bold">Counterfeit Goods:</p>
              <li>Fake or pirated products</li>
              <p className="font-bold">Biological Materials:</p>
              <li>Infectious substances</li>
              <li>Biological samples without proper documentation</li>
              <p className="font-bold">Electronic Waste:</p>
              <li>Items containing hazardous electronic components</li>
              <p className="font-bold">Human Remains:</p>
              <li>Ashes or other human remains without proper documentation</li>
            </ul>
          </div>
          <p className="text-xs font-bold text-orange lg:text-base">
            Please note, we do transport some of the items listed above if you
            meet our package safety and compliance policy. Kindly{" "}
            <Link href="/contact">contact us</Link> for more information.{" "}
          </p>
        </div>
        <div className="mt-4 flex flex-col gap-y-3 text-xs font-medium sm:text-sm lg:text-base">
          <h1 className="text-base font-[620] sm:text-lg md:text-xl lg:text-2xl">
            Governing Law
          </h1>
          <div>
            <p className="font-bold">United States Operations</p>
            <p>
              For shipments and services provided within the United States,
              these Terms of Service and any disputes arising out of or related
              to the use of United Traverse&apos;s services shall be governed by
              and construed in accordance with the laws of the state of New
              York, without regard to its conflict of law provisions.
            </p>
          </div>
          <div>
            <p className="font-bold">Baghdad Operations (Iraq):</p>
            <p>
              For shipments and services provided in Baghdad, Iraq, these Terms
              of Service and any disputes arising out of or related to the use
              of United Traverse&apos;s services shall be governed by and construed
              in accordance with the laws of the Republic of Iraq.
            </p>
          </div>
          <div>
            <p className="font-bold">International Operations</p>
            <p>For international shipments not specifically covered by the above sections, the laws governing the United States operations shall apply.</p>
          </div>
        </div>
        <p className="font-bold uppercase text-xs sm:text-sm lg:text-base">Kindly reach out to us for more information or details about any of the above Laws.</p>
      </div>
      <CTA />
    </main>
  );
}
