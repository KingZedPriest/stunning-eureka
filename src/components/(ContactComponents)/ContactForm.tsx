"use client"
//Import Needed Components
import Heading from "../h1";

//Import Needed Icons
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const ContactForm = () => {
  return (
    <main className="px-4 py-[8rem] sm:px-10 md:px-12 lg:px-14 bg-bgWhite">
      <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10 lg:gap-y-0">
        <div className="w-full lg:w-[50%]">
          <div>
            <p className="mb-4 text-sm text-orange sm:text-base md:text-lg lg:text-xl">
              CONTACT US
            </p>
            <Heading heading="Get In" coloredHeading="Touch" />
            <p className="my-4 text-xs sm:text-sm md:text-base lg:text-lg">
              Connect With Us: Reach Out for Inquiries, Assistance, and
              Collaborations.
            </p>
          </div>
          <div className="flex gap-x-5 mt-10 overflow-x-auto special pb-4">
            <div className="flex gap-x-3 rounded-md border border-blue p-4 shrink-0">
                <MdEmail size={30} className="text-orange"/>
                <div>
                    <p className="text-lg font-bold md:text-xl">Email</p>
                    <p className="text-xs md:text-sm mt-1">Contactus@unitedtraverse.com</p>
                </div>
            </div>
            <div className="flex gap-x-3 rounded-md border border-blue p-4 shrink-0">
                <HiLocationMarker size={30} className="text-orange"/>
                <div>
                    <p className="text-lg font-bold md:text-xl">Address</p>
                    <p className="text-xs md:text-sm mt-1">112 Commerce Parkway Suite 405 Metropolitan City,
                      United States.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
            <form>
                <div className="flex gap-x-5">
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" className="bg-white w-1/2 p-3 placeholder:text-xs md:placeholder:text-sm border border-orange border-opacity-50 rounded-md focus:outline-none focus:border-2 caret-blue"/>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email Address" className="bg-white w-1/2 p-3 placeholder:text-xs md:placeholder:text-sm border border-orange border-opacity-50 rounded-md focus:outline-none focus:border-2 caret-blue"/>
                </div>
                <input type="text" name="subject" id="subject" placeholder="Enter Your Subject Here" className="bg-white w-full mt-6 p-3 placeholder:text-xs md:placeholder:text-sm border border-orange border-opacity-50 rounded-md focus:outline-none focus:border-2 caret-blue"/>
                <textarea name="message" id="message" placeholder="Enter Your Message Here" className="bg-white w-full h-40 mt-10 p-3 placeholder:text-xs md:placeholder:text-sm border border-orange border-opacity-50 rounded-md focus:outline-none focus:border-2 caret-blue resize-none"></textarea>
                <input type="submit" value="Submit Button" className="cursor-pointer p-3 w-40 bg-orange mt-6 text-xs md:text-sm text-center text-white rounded-md hover:bg-[#d64514]" />
            </form>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
