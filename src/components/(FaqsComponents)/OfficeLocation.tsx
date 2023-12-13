import Image from "next/image";
//Import Needed Images
import faqImg from "../../../public/images/faq1.jpeg";

const OfficeLocation = () => {
  return (
    <main className="px-4 pt-[8rem] sm:px-10 md:px-12 lg:px-14">
      <div className="flex flex-col-reverse gap-y-5 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
        <div className="w-full lg:w-[45%]">
            <Image src={faqImg} alt="Office Image" className="rounded-lg"/>
        </div>
        <div className="flex w-full flex-col gap-y-5 md:gap-y-10 lg:w-[50%]">
          <div>
            <p className="mb-4 text-sm text-orange sm:text-base md:text-lg lg:text-xl">
              OUR OFFICE
            </p>
            <h1 className="text-2xl font-[620] sm:text-3xl md:text-4xl lg:text-5xl">Our <span className="text-orange">Global Office </span>Presence.</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg my-4">Connecting Continents: Discover Our Global Office Addresses for Unified Courier Solutions.</p>
            <div className="flex gap-x-5 md:gap-x-10 mt-10 overflow-x-auto pb-4 special">
                <div className="w-72 h-80 min-w-[15rem] rounded-md bg-blue">

                </div>
                <div className="w-72 h-80 min-w-[15rem] rounded-md bg-blue">

                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OfficeLocation;
