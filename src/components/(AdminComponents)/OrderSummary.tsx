"use client"
import { useState } from "react";
//Import Needed Icons
import { PiPackageFill } from "react-icons/pi";
//Import Needed Components
import OrderCreation from "./OrderCreation";
import OrderDetails from "./OrderDetails";

const OrderSummary = () => {
    //Set States
    const [show, setShow] = useState<boolean>(true)
    const [create, setCreate] = useState<boolean>(false)
    const [packageId, setPackageId] = useState<string>("")
    // Function
    const toggleShow = () => {
        setShow((prevShow => !prevShow))
      }
    const toggleCreate = () => {
        setCreate((prevCreate => !prevCreate))
      }
    return ( 
        <>
            {show && <OrderDetails onClose={toggleShow}/> }
            {create && <OrderCreation onClose={toggleCreate}/> }
        <main className="mt-10 overflow-x-auto special">
            <div className="flex justify-between w-full min-w-[40rem]">
                <p className="text-lg lg:text-xl font-bold">Ongoing Shipments</p>
                <button onClick={toggleCreate} className="p-3 bg-orange text-white rounded-md font-semibold hover:bg-orange1 duration-500">Create New Order</button>
            </div>
            <div className="mt-10 w-full min-w-[40rem]">
               <div onClick={toggleShow} className="flex justify-between items-center mt-4 border-b border-gray-400 py-2 cursor-pointer">
                    <PiPackageFill className="text-orange" size={30}/>
                    <p className="text-lg lg:text-xl font-bold">UT-786901</p>
                    <p className="text-lg lg:text-xl font-bold">Newyork</p>
                    <p className="text-lg lg:text-xl font-bold">10, Aug 2023</p>
                    <p className="text-sm lg:text-base">Completed</p>
                </div>       
            </div>
        </main>
        </>
     );
}
 
export default OrderSummary;