"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
//Import the fonts
import { montserrat } from "../app/fonts";
//Needed Images
import logo from "../../public/logo.png";
//Import Icons
import { LuMenuSquare } from "react-icons/lu";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Header() {
  //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <main className="border-b border-[#F0F0F0] bg-white px-4 py-2 sm:px-6 md:px-8 md:py-4 lg:px-10">
      <div className="flex items-center justify-between font-semibold">
        <div className="flex gap-x-5 lg:gap-x-8">
          <div className="bg-red w-10 rounded-lg p-2 sm:w-12 md:w-14 lg:w-12">
            <Image src={logo} alt="United Traverse Logo" />
          </div>
          <div
            className={`${montserrat.className} hidden md:flex md:items-center md:justify-between`}
          >
            <div className="flex gap-x-5 lg:gap-x-8">
              <Link
                href="/services"
                className="hover:bg-red rounded-lg border-[#F0F0F0] px-4 py-2 duration-500 hover:border-l-4 hover:text-white"
              >
                Services
              </Link>
              <Link
                href="/company"
                className="hover:bg-red rounded-lg border-[#F0F0F0] px-4 py-2 duration-500 hover:border-l-4 hover:text-white"
              >
                Company
              </Link>
              <Link
                href="/faq"
                className="hover:bg-red rounded-lg border-[#F0F0F0] px-4 py-2 duration-500 hover:border-l-4 hover:text-white"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="hover:bg-red rounded-lg border-[#F0F0F0] px-4 py-2 duration-500 hover:border-l-4 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className={`${montserrat.className} hidden md:block`}>
          <Link
            href=""
            className="bg-red border-red hover:text-red rounded-lg border-2 px-4 py-3 text-white duration-500 hover:bg-white"
          >
            Track Delivery
          </Link>
        </div>
        <div className="bg-red rounded-lg p-2 md:hidden">
          <div>
            <LuMenuSquare
              className="cursor-pointer text-white"
              size={28}
              onClick={toggleOpen}
            />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }} // Initial position and opacity
                animate={{ x: 0, opacity: 1 }} // Target position and opacity
                exit={{ x: "100%", opacity: 0 }} // Exit position and opacity
                transition={{ duration: 0.5 }}
                className="fixed right-0 top-0 z-10 h-screen w-80 bg-white p-10 shadow-md"
              >
                <div className="mb-8">
                  <div className="bg-red w-[3.2rem] rounded-lg p-2">
                    <AiOutlineCloseSquare
                      onClick={toggleOpen}
                      size={30}
                      className="cursor-pointer text-white"
                    />
                  </div>
                </div>
                <div className={`${montserrat.className} flex flex-col items-end gap-y-5 font-semibold md:gap-y-10`}>
                  <Link
                    href="/services"
                    className="text-red text-lg duration-500 hover:underline md:text-xl lg:text-2xl"
                  >
                    Services
                  </Link>
                  <Link
                    href="/company"
                    className="text-skyBlue text-lg duration-500 hover:underline md:text-xl lg:text-2xl"
                  >
                    Company
                  </Link>
                  <Link
                    href="/faq"
                    className="text-[#e81c89] text-lg duration-500 hover:underline md:text-xl lg:text-2xl"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#e87b1c] text-lg duration-500 hover:underline md:text-xl lg:text-2xl"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
