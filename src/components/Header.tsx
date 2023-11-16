"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
//Import the fonts

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
    <main className="bg-bgWhite px-4 py-2 sm:px-10 md:px-4 md:py-4 lg:px-14">
          <div className="flex items-center justify-between font-semibold">
              <h1 className="font-bold text-xl tracking-tight md:tracking-[-0.1rem] sm:text-2xl md:text-3xl lg:text-4xl">United <span className="tracking-tight text-orange">Traverse</span><span className="text-4xl">.</span></h1>
            <div className="hidden md:flex md:gap-x-2 lg:gap-x-8">
            <Link
                href="/about"
                className="transform hover:-translate-y-1 hover:text-orange md:text-sm lg:text-base hover:translate-x-2 focus:text-orange active:text-orange duration-500"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="transform hover:-translate-y-1 hover:text-orange md:text-sm lg:text-base hover:translate-x-2 focus:text-orange active:text-orange duration-500"
              >
                Services
              </Link>
              <Link
                href="/company"
                className="transform hover:-translate-y-1 hover:text-orange md:text-sm lg:text-base hover:translate-x-2 focus:text-orange active:text-orange duration-500"
              >
                Why Choose Us
              </Link>
              <Link
                href="/faq"
                className="transform hover:-translate-y-1 hover:text-orange md:text-sm lg:text-base hover:translate-x-2 focus:text-orange active:text-orange duration-500"
              >
                FAQs
              </Link>
              <Link
                href="/contact"
                className="transform hover:-translate-y-1 hover:text-orange md:text-sm lg:text-base hover:translate-x-2 focus:text-orange active:text-orange duration-500"
              >
                Contact Us
              </Link>
            </div>
            <div className={`hidden md:block duration-500 transform hover:-translate-y-2`}>
              <Link href="" className="bg-orange border-orange hover:text-orange border-2 px-4 py-3 text-white duration-500 hover:bg-white">
                Track Delivery
              </Link>
            </div>
            <LuMenuSquare
              className="md:hidden cursor-pointer text-orange focus:text-blue mt-2"
              size={30}
              onClick={toggleOpen}
            />
      </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="md:hidden fixed right-0 top-0 z-50 h-screen w-80 bg-bgWhite p-10 shadow-md"
              >
                    <AiOutlineCloseSquare
                      onClick={toggleOpen}
                      size={30}
                      className="cursor-pointer text-orange mb-10"
                    />
                <div className={`flex flex-col gap-y-5 font-semibold`}>
                <Link
                    href="/about"
                    className="duration-500 hover:underline text-sm hover:translate-x-2 hover:-translate-y-2 hover:text-orange active:text-orange focus:text-orange"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    className="duration-500 hover:underline text-sm hover:translate-x-2 hover:-translate-y-2 hover:text-orange active:text-orange focus:text-orange"
                  >
                    Services
                  </Link>
                  <Link
                    href="/company"
                    className="duration-500 hover:underline text-sm hover:translate-x-2 hover:-translate-y-2 hover:text-orange active:text-orange focus:text-orange"
                  >
                    Why Choose Us
                  </Link>
                  <Link
                    href="/faq"
                    className="duration-500 hover:underline text-sm hover:translate-x-2 hover:-translate-y-2 hover:text-orange active:text-orange focus:text-orange"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/contact"
                    className="duration-500 hover:underline text-sm hover:translate-x-2 hover:-translate-y-2 hover:text-orange active:text-orange focus:text-orange"
                  >
                    Contact Us
                  </Link>
                    <Link href="" className="mt-4 w-32 text-sm bg-orange border-orange hover:text-orange border-2 px-3 py-2 text-white duration-500 hover:bg-white">
                      Track Delivery
                    </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
    </main>
  );
}
