//Import Needed Utilities
import { formatDate } from "@/lib/dateUtils";
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
               <div className="w-1/4 min-w-[18rem] bg-[#4CB9E7] h-40 rounded-md">

            </div>
            <div className="w-1/4 min-w-[18rem] bg-[#FB8B24] h-40 rounded-md">

            </div>
            <div className="w-1/4 min-w-[18rem] bg-[#65B741] h-40 rounded-md">

            </div> 
            </div>
            
        </main>
     );
}
 
export default Summary;