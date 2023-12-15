"use client"
import { useState } from "react";
import generateRandomNumber from "@/lib/GenerateTrackingNumber";
//Import Icons
import { RxCross1 } from "react-icons/rx";

type OrderDetailsProps = {
  onClose: () => void;
}

const OrderCreation = ({onClose}: OrderDetailsProps) => {
  //Tracking Code State and Function
  const [trackingCode, setTrackingCode] = useState<string>('');

  const handleGenerateCode = () => {
    const newTrackingCode = generateRandomNumber();
    setTrackingCode(newTrackingCode);
  };

  //Close Function
  const closeToggle = () => {
    onClose();
  };
  return (
    <main className={`fixed left-0 top-0 z-[70] flex h-screen w-full items-center justify-center bg-black bg-opacity-50`}>
        <div className="h-[40rem] w-80 sm:w-96 bg-bgWhite p-4 md:w-[30rem] lg:w-[40rem] overflow-y-auto special">
            <div className="flex justify-end">
                <RxCross1 size={24} className="cursor-pointer" onClick={closeToggle} />
            </div>
            <p className="text-xs sm:text-sm md:text-base font-bold mt-4 text-center">Fill In The Details of The New Package</p>
            <form className="mt-4">
                <div className="flex gap-x-3 md:gap-x-5 items-end">
                    <div className="w-[70%]">
                      <label htmlFor="trackingCode" className="text-xs md:text-sm block cursor-pointer">Tracking Code</label>
                      <input required value={trackingCode} onChange={(e) => setTrackingCode(e.target.value)} type="text" name="trackingCode" id="trackingCode" className="mt-2 w-full rounded-md p-2 md:p-3 bg-white text-black focus:outline-orange border border-black"/>
                    </div>
                    <button type="button" onClick={handleGenerateCode} className="w-[30%] text-center py-2 md:py-3 bg-orange text-white hover:bg-orange1 duration-500 text-xs sm:text-sm md:text-base rounded-md">Generate</button>
                </div>
                <div className="mt-4">
                  <label htmlFor="originPort" className="text-xs md:text-sm block cursor-pointer">Origin Port</label>
                  <input required value="" type="text" name="origin" id="originPort" className="mt-2 w-full rounded-md placeholder:text-xs md:placeholder:text-sm p-2 md:p-3 bg-white text-black focus:outline-orange border border-black" placeholder="Origin Port"/>
                </div>
                <div className="mt-4">
                  <label htmlFor="destinationPort" className="text-xs md:text-sm block cursor-pointer">Destination Port</label>
                  <input required value="" type="text" name="destination" id="destinationPort" className="mt-2 w-full rounded-md placeholder:text-xs md:placeholder:text-sm p-2 md:p-3 bg-white text-black focus:outline-orange border border-black" placeholder="Destination Port"/>            
                </div>
                <div className="mt-4">
                <label htmlFor="transportationMode" className="text-xs md:text-sm block cursor-pointer">Mode Of Transport</label>
                  <select required name="transportationMode" id="transportationMode" className="cursor-pointer mt-2 w-full rounded-md text-xs md:text-sm p-3 bg-white text-black focus:outline-orange border border-black">
                    <option value="Flight">Flight</option>
                    <option value="Ship">Ship</option>
                    <option value="Road">Road</option>
                    <option value="Rail">Rail</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="pieces" className="text-xs md:text-sm block cursor-pointer">Quantity</label>
                  <input required value="" type="number" name="pieces" id="pieces" className="mt-2 w-full rounded-md placeholder:text-xs md:placeholder:text-sm p-2 md:p-3 bg-white text-black focus:outline-orange border border-black" placeholder="How Many Pieces(Quantity)"/>                        
                </div>
                <div className="mt-4">
                  <label htmlFor="weight" className="text-xs md:text-sm block cursor-pointer">Weight</label>
                  <input required value="" type="number" name="weight" id="weight" className="mt-2 w-full rounded-md placeholder:text-xs md:placeholder:text-sm p-2 md:p-3 bg-white text-black focus:outline-orange border border-black" placeholder="The Weight in KG"/>                        
                </div>
                <div className="mt-4">
                  <label htmlFor="length" className="text-xs md:text-sm block cursor-pointer">Length</label>
                  <input required value="" type="number" name="length" id="length" className="mt-2 w-full rounded-md placeholder:text-xs md:placeholder:text-sm p-2 md:p-3 bg-white text-black focus:outline-orange border border-black" placeholder="The Length in CM"/>                        
                </div>
                <div className="mt-4">
                    <label htmlFor="width" className="text-xs md:text-sm block cursor-pointer">Width</label>
                    <input required value="" type="number" name="width" id="width" className="mt-2 w-full rounded-md placeholder:text-xs md:placeholder:text-sm p-2 md:p-3 bg-white text-black focus:outline-orange border border-black" placeholder="The Width in CM"/> 
                </div>
                <div className="mt-4">
                  <label htmlFor="height" className="text-xs md:text-sm block cursor-pointer">Height</label>
                  <input required value="" type="number" name="height" id="height" className="mt-2 w-full rounded-md placeholder:text-xs md:placeholder:text-sm p-2 md:p-3 bg-white text-black focus:outline-orange border border-black" placeholder="The height in CM"/> 
                </div>
                <div className="mt-4">
                    <label htmlFor="deliveryRequiredDate&Time" className="text-xs md:text-sm block cursor-pointer">Delivery Required Date and Time</label>
                    <input required type="datetime-local" name="deliveryRequiredDate&Time" id="deliveryRequiredDate&Time" className="mt-2 w-full rounded-md p-2 md:p-3 bg-white text-black focus:outline-orange border border-black"/>
                </div>
                <div className="mt-4">
                  <label htmlFor="statusChanges" className="text-xs md:text-sm block cursor-pointer">Status</label>
                  <select required name="statusChanges" id="statusChanges" className="cursor-pointer mt-2 w-full rounded-md text-xs md:text-sm p-3 bg-white text-black focus:outline-orange border border-black">
                    <option value="PickedUp">Picked Up</option>
                    <option value="PackageReceived">Package Received</option>
                    <option value="InTransitRoad">In Transit (Road)</option>
                    <option value="InFlight">In Flight (Flight)</option>
                    <option value="InShip">In Ship</option>
                    <option value="InFlight">In Flight (Flight)</option>
                  </select>
                </div>
                <div className="mt-4">
                    <label htmlFor="estimatedDeliveryDate&Time" className="text-xs md:text-sm block cursor-pointer">Estimated Time and Date</label>
                    <input required type="datetime-local" name="estimatedDeliveryDate&Time" id="estimatedDeliveryDate&Time" className="mt-2 w-full rounded-md p-2 md:p-3 bg-white text-black focus:outline-orange border border-black"/>
                </div>
                <div className="mt-8">
                  <input type="submit" value="Create Package" className="w-full p-2 md:p-3 cursor-pointer bg-orange text-white rounded-md font-semibold hover:bg-orange1 duration-500"/>
                </div>
            </form>
        </div>
    </main>
  )
};

export default OrderCreation;
