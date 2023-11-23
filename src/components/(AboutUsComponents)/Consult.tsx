import Link from "next/link";
//Import Needed Components
import Heading from "../h1";
//Import Needed Images
import img from "../../../public/images/remove.jpg";
//Import Icons
import { MdGppGood } from "react-icons/md";
const Consult = () => {
  return (
    <main className="relative bg-[url('../../public/images/bg5.jpeg')] bg-cover bg-center object-center py-[8rem] text-white selection:bg-orange selection:text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative px-4 sm:px-10 md:px-12 lg:px-14">
        <div className="flex flex-col items-center justify-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-center mx-auto">
          <Heading
            heading="Consult The Services You"
            coloredHeading="Need Now!!!"
          />
          <p className="text-xs sm:text-sm md:text-base mt-10">
            Discover a seamless solution to all your shipping and courier needs
            with United Traverse. Our comprehensive services ensure that whether
            it&apos;s express deliveries, international shipments, or custom
            logistics, we stand as the ultimate answer to your shipping
            requirements, providing reliability, efficiency, and a commitment to
            exceed your expectations.
          </p>
          <Link
            href="/contact"
            className="mt-10 border border-orange bg-orange px-4 py-2 text-white duration-500 hover:bg-white hover:text-orange"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Consult;
