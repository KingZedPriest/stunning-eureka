"use client"
import { useState } from "react";
//import Icons
import { FaHandshake, FaFaceSadTear } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

export default function Modal({status}: {status: string}){
    //Close State
    const [close, setClose] = useState<boolean>(true)
    //Close Function
    const closeToggle = () => {
        return setClose((prevClose) => !prevClose)
    }
    return(
        <main className={`${close ? "hidden" : ""} fixed h-screen w-full bg-black bg-opacity-50 flex items-center justify-center z-50 top-0 left-0`}>
            <div className="w-80 h-80 md:h-96 md:w-96 bg-bgWhite p-4">
                <div className="flex flex-col items-end">
                    <RxCross1 size={24} className="cursor-pointer" onClick={closeToggle}/>
                    <p className="text-xs font-bold">close</p>
                </div>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-10 rounded-[50%] p-3">
                       <div className="rounded-[50%] bg-white border border-gray-300 w-[7rem] h-[7rem] flex items-center justify-center shadow-lg">
                           {status === "success" && <FaHandshake size={60} className="text-green-700"/>} 
                           {status === "failure" && <FaFaceSadTear size={60} className="text-red-700"/>}
                       </div> 
                    </div>
                </div>
                <div className="text-center font-semibold mt-8 text-sm md:text-base">
                    {status === "success" && <> <p>Your Quote Was Submitted Successfully!</p>
                   <p>Our service agent will contact you soon via your email.</p> </>}

                   {status === "failure" && <> <p>Your Quote Submission Failed!</p>
                    <p>Please, try again later Thank You.</p> </>}
                </div>
            </div>
        </main>
    )
}