import Link from "next/link";
//Import Needed Icons
import { PiPackageFill } from "react-icons/pi";

const Transaction = () => {
    return ( 
        <main className="mt-10 overflow-x-auto special">
            <div className="flex justify-between w-full min-w-[40rem]">
                <p className="text-lg lg:text-xl font-bold">Ongoing Shipments</p>
                <p className="text-gray-500">Your Last 7 Shipments</p>
            </div>
            <div className="mt-10 w-full min-w-[40rem]">
               <div className="flex justify-between items-center mt-4 border-b border-gray-400 py-2">
                    <PiPackageFill className="text-orange" size={30}/>
                    <p className="text-lg lg:text-xl font-bold">UT-786901</p>
                    <p className="text-lg lg:text-xl font-bold">Newyork</p>
                    <p className="text-lg lg:text-xl font-bold">10, Aug 2023</p>
                    <p className="text-sm lg:text-base">Completed</p>
                </div>       
            </div>
            <div className="flex justify-end my-10">
                <Link href="/admin/orders" className="p-3 bg-orange text-white rounded-md font-semibold hover:bg-orange1 duration-500">Create New Order</Link>
            </div>
        </main>
     );
}
 
export default Transaction;