"use client"
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { LuMenuSquare } from "react-icons/lu";

const Sidebar = () => {
    //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
    return ( 
        <main>
            <div className="hidden lg:block fixed left-0 top-0 z-50 h-screen w-80 bg-bgWhite p-10 shadow-md">
            <div className={`flex flex-col gap-y-5 font-semibold`}>
                <Link
                    href="/admin/dashboard"
                    prefetch
                    className={`duration-500 hover:underline text-sm md:text-base hover:translate-x-2 bg-orange p-4 rounded-md hover:-translate-y-2 hover:text-white active:text-white focus:text-white focus:-translate-y-2 focus:translate-x-2`}
                  >
                    Dasboard
                  </Link>
                <Link
                    href="/admin/orders"
                    prefetch
                    className={`duration-500 hover:underline text-sm md:text-base hover:translate-x-2 bg-orange p-4 rounded-md hover:-translate-y-2 hover:text-white active:text-white focus:text-white focus:-translate-y-2 focus:translate-x-2`}
                  >
                    Orders
                  </Link>
                  <Link
                    href="/admin/tracking"
                    prefetch
                    className={`duration-500 hover:underline text-sm md:text-base hover:translate-x-2 bg-orange p-4 rounded-md hover:-translate-y-2 hover:text-white active:text-white focus:text-white focus:-translate-y-2 focus:translate-x-2`}
                  >
                    Tracking
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
                className="lg:hidden fixed left-0 top-0 z-50 h-screen w-80 bg-bgWhite p-10 shadow-md"
              >
                    <AiOutlineCloseSquare
                      onClick={toggleOpen}
                      size={40}
                      className="cursor-pointer text-orange mb-10"
                    />
                <div className={`flex flex-col gap-y-5 font-semibold`}>
                <Link
                    href="/admin/dashboard"
                    prefetch
                    className={`duration-500 hover:underline text-sm hover:translate-x-2 bg-orange p-4 rounded-md hover:-translate-y-2 hover:text-white active:text-white focus:text-white focus:-translate-y-2 focus:translate-x-2`}
                  >
                    Dasboard
                  </Link>
                <Link
                    href="/admin/orders"
                    prefetch
                    className={`duration-500 hover:underline text-sm hover:translate-x-2 bg-orange p-4 rounded-md hover:-translate-y-2 hover:text-white active:text-white focus:text-white focus:-translate-y-2 focus:translate-x-2`}
                  >
                    Orders
                  </Link>
                  <Link
                    href="/admin/tracking"
                    prefetch
                    className={`duration-500 hover:underline text-sm hover:translate-x-2 bg-orange p-4 rounded-md hover:-translate-y-2 hover:text-white active:text-white focus:text-white focus:-translate-y-2 focus:translate-x-2`}
                  >
                    Tracking
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
     );
}
 
export default Sidebar;