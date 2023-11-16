import { FiTruck } from "react-icons/fi";
import { LiaShipSolid } from "react-icons/lia";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiPlanet } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiDeliveryDrone } from "react-icons/gi";
import { LuMonitorCheck } from "react-icons/lu";
import { BsCreditCard, BsClipboardData } from "react-icons/bs";


export default function FourthSection(){
    return(
        <main className="py-[8rem] px-4 sm:px-10 md:px-12 lg:px-14 bg-white">
            <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">The Best Services We Provide.</h1>
            <p className="text-center font-semibold text-gray-600 mt-2 text-sm md:text-base">Explore a world of unparalleled courier services with us - The Best Services We Provide</p>
            <div className="mt-8">
             <div className="flex gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8">
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <FiTruck size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Local Delivery</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs">Swift and reliable parcel services within your community.</p>
                </div>
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <LiaShipSolid size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Global Shipping</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs"> Seamless shipping solutions for global destinations.</p>
                </div>
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <HiOutlineBriefcase size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Corporate Delivery</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs">Tailored courier services catering to corporate needs.</p>
                </div>
             </div>
             <div className="flex gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <BiPlanet size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Remote Shipping</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs">Secure and timely deliveries for distant locations.</p>
                </div>
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <TbTruckDelivery size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Instant Courier</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs">Immediate dispatch for time-sensitive shipments.</p>
                </div>
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <GiDeliveryDrone size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Direct Delivery</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs">Direct-to-door services ensuring convenience and speed.</p>
                </div>
             </div>
             <div className="flex gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <LuMonitorCheck size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Track Monitoring</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs">Real-time tracking for complete shipment visibility.</p>
                </div>
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <BsCreditCard size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Easy Payment</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs">Simplified and secure payment options for your convenience.</p>
                </div>
                <div className="group w-1/3 text-center font-bold shadow-md bg-bgWhite h-36 flex flex-col py-4 px-2 items-center justify-center hover:bg-blue duration-500">
                    <BsClipboardData size={32} className="text-orange group-hover:text-white"/>
                    <p className="mt-2 group-hover:text-white duration-500 text-sm sm:text-base md:text-lg lg:text-xl">Data App Control</p>
                    <p className="mt-2 hidden md:block group-hover:text-white text-xs">Efficient app-based management of your courier data.</p>
                </div>
             </div>
            </div>
        </main>
    )
}