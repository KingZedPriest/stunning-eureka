//Import Icons
import { RxCross1 } from "react-icons/rx";


type OrderDetailsProps = {
  onClose: () => void;
}
const OrderDetails = ({onClose}: OrderDetailsProps) => {
  //Close Function
  const closeToggle = () => {
    onClose()
  };
  return (
    <main className={`fixed left-0 top-0 z-[70] flex h-screen w-full items-center justify-center bg-black bg-opacity-50`}>
        <div className="h-[40rem] w-80 sm:w-96 bg-bgWhite p-4 md:w-[30rem] lg:w-[40rem] overflow-y-auto special">
            <div className="flex justify-end">
                <RxCross1 size={24} className="cursor-pointer" onClick={closeToggle} />
            </div>
            <p className="text-xs sm:text-sm md:text-base font-bold mt-4 text-center">Package Details</p>
            <div className="flex flex-col gap-y-3 mt-10">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Tracking Code <span className="text-orange">UT-768934</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Origin Port <span className="text-orange">United States</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Destination Port <span className="text-orange">Algeria</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Transportation Mode <span className="text-orange">Rail</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Pieces(Quantity) <span className="text-orange">4</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Weight (KG) <span className="text-orange">10KG</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Length (CM)<span className="text-orange">10CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Width (CM)<span className="text-orange">10CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Height (CM)<span className="text-orange">10CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Delivery Required Date and Time<span className="text-orange">10 August 2023, 10:00 AM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Status<span className="text-orange">In Transit</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Estimated Delivery Date and Time<span className="text-orange">12 August 2023, 10:00 AM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Package Time Creation<span className="text-orange">4:58 PM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Package Date Created<span className="text-orange">14 August 2023</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between">Time Created<span className="text-orange">4:58 PM</span></p>
                <div className="border-b border-black my-4"></div>
                <p className="text-xs sm:text-sm md:text-base font-bold mt-4 text-center">Update Package Status</p>
                <form className="">
                  <label htmlFor="statusChanges" className="text-xs md:text-sm block cursor-pointer font-bold">Status</label>
                  <select required name="statusChanges" id="statusChanges" className="cursor-pointer font-bold mt-2 w-full rounded-md text-xs md:text-sm p-3 bg-white text-black focus:outline-orange border border-black">
                    <option value="PickedUp">Picked Up</option>
                    <option value="PackageReceived">Package Received</option>
                    <option value="InTransitRoad">In Transit (Road)</option>
                    <option value="InFlight">In Flight (Flight)</option>
                    <option value="InShip">In Ship</option>
                    <option value="InFlight">In Flight (Flight)</option>
                  </select>
                  <div className="mt-8">
                  <input type="submit" value="Create Package" className="w-full p-2 md:p-3 cursor-pointer bg-orange text-white rounded-md font-semibold hover:bg-orange1 duration-500"/>
                </div>
                </form>
            </div>
        </div>
    </main>
)
};

export default OrderDetails;
