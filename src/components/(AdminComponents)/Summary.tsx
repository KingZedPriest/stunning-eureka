//Import Needed Utilities
import { formatDate } from "@/lib/dateUtils";
//Import Needed Icons
import { PiPackageFill } from "react-icons/pi";
import { TbProgressDown } from "react-icons/tb";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Summary = () => {
    //For the Date
    const currentDate = new Date()
    const formattedDate = formatDate(currentDate)
    return ( 
        <main className="">
            <div className="flex justify-end">
               <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold">{formattedDate}.</p> 
            </div>
            <div className="flex gap-x-5 overflow-x-auto special mt-10 pb-4">
               <div className="w-1/4 min-w-[18rem] bg-[#4CB9E7] p-8 flex gap-x-5 rounded-md">
               <PiPackageFill className="text-white" size={40}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">0</p>
                        <p className="text-base">Total Packages</p>
                    </div>
                </div>
                <div className="w-1/4 min-w-[18rem] bg-[#FB8B24] p-8 flex gap-x-5 rounded-md">
                    <TbProgressDown className="text-white" size={40}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">0</p>
                        <p className="text-base">Packages In Progress</p>
                    </div>
                </div>
                <div className="w-1/4 min-w-[18rem] bg-[#65B741] p-8 flex gap-x-5 rounded-md">
                    <BsFillPatchCheckFill className="text-white" size={40}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">0</p>
                        <p className="text-base">Total Packages Delivered</p>
                    </div>
                </div> 
            </div>
            
        </main>
     );
}
 
export default Summary;