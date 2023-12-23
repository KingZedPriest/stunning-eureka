"use client"
import { ChangeEvent, useState } from "react"
//Import Needed Components
import Tracking from "./Tracking"
//Import Needed Modals
export default function TrackingForm(){
    const [trackingID, setTrackingID] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)
    //Functions
    const handleHideModal = () => {
        return setShow((prev) => !prev);
       };
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTrackingID(e.target.value);
      };
      console.log(trackingID)
    return(
        <>
        {show && <Tracking packageID={trackingID} onHideModal={handleHideModal}/> }
        <div className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-8 w-[90%] sm:w-[80%] md:w-[90%] lg:w-[60%] mx-auto">
            <p className="text-orange font-bold">Tracking Details</p>
            <div className="mt-8">
                <div className="w-full">
                    <input required type="text" name="trackingNumber" onChange={handleInputChange} className="text-xs sm:text-sm md:text-base font-semibold w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                    <p className="text-xs md:text-sm font-bold relative -top-[3.5rem] peer-focus:-top-[4rem] duration-500">Tracking Number</p>
                </div>
                <button type="button" onClick={handleHideModal} className="w-full text-center py-2 md:py-3 bg-orange text-white mt-4 hover:bg-blue duration-500 cursor-pointer">Track</button>
            </div>
        </div></>
    )
}