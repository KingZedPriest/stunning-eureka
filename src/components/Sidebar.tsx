"use client"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { LuMenuSquare } from "react-icons/lu";
//Import Icons
import { GoHomeFill } from "react-icons/go";
import { FaTruck } from "react-icons/fa";
import { MdReceiptLong } from "react-icons/md";

const Sidebar = () => {
    //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
    return ( 
        <main>
            <div className="hidden lg:block fixed left-0 top-0 z-50 h-screen w-80 bg-black p-10">
            <div className={`flex flex-col gap-y-5 font-semibold mt-20`}>
                <Link
                    href="/admin/dashboard"
                    prefetch
                    className={`flex gap-x-3 items-center duration-500 hover:underline text-sm md:text-base hover:translate-x-2 p-4 rounded-md hover:-translate-y-2 text-white hover:text-orange active:text-orange focus:text-orange focus:-translate-y-2 focus:translate-x-2`}
                  >
                    <GoHomeFill size={24}/> Dasboard
                  </Link>
                <Link
                    href="/admin/orders"
                    prefetch
                    className={`flex gap-x-3 items-center duration-500 hover:underline text-sm md:text-base hover:translate-x-2 p-4 rounded-md hover:-translate-y-2 text-white hover:text-orange active:text-orange focus:text-orange focus:-translate-y-2 focus:translate-x-2`}
                  >
                    <MdReceiptLong size={24}/> Orders
                  </Link>
                  <Link
                    href="/admin/tracking"
                    prefetch
                    className={`flex gap-x-3 items-center duration-500 hover:underline text-sm md:text-base hover:translate-x-2 p-4 rounded-md hover:-translate-y-2 text-white hover:text-orange active:text-orange focus:text-orange focus:-translate-y-2 focus:translate-x-2`}
                  >
                    <FaTruck size={24}/> Tracking
                  </Link>
                </div>
            </div>
            <LuMenuSquare
              className="md:hidden cursor-pointer text-orange focus:text-blue mt-2 relative top-4 left-4"
              size={40}
              onClick={toggleOpen}
            />
            <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden fixed left-0 top-0 z-50 h-screen w-80 bg-black p-10"
              >
                    <AiOutlineCloseSquare
                      onClick={toggleOpen}
                      size={40}
                      className="cursor-pointer text-orange mb-10"
                    />
                <div className={`flex flex-col gap-y-5 font-semibold mt-20`}>
                <Link
                    href="/admin/dashboard"
                    prefetch
                    className={`flex gap-x-3 items-center duration-500 hover:underline text-sm hover:translate-x-2 p-4 rounded-md hover:-translate-y-2 text-white hover:text-orange active:text-orange focus:text-orange focus:-translate-y-2 focus:translate-x-2`}
                  >
                    <GoHomeFill size={24}/> Dasboard
                  </Link>
                <Link
                    href="/admin/orders"
                    prefetch
                    className={`flex gap-x-3 items-center duration-500 hover:underline text-sm hover:translate-x-2 p-4 rounded-md hover:-translate-y-2 text-white hover:text-orange active:text-orange focus:text-orange focus:-translate-y-2 focus:translate-x-2`}
                  >
                    <MdReceiptLong size={24}/> Orders
                  </Link>
                  <Link
                    href="/admin/tracking"
                    prefetch
                    className={`flex gap-x-3 items-center duration-500 hover:underline text-sm hover:translate-x-2 p-4 rounded-md hover:-translate-y-2 text-white hover:text-orange active:text-orange focus:text-orange focus:-translate-y-2 focus:translate-x-2`}
                  >
                    <FaTruck size={24}/> Tracking
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
     );
}
 
export default Sidebar;