import getIndividualPackage from "@/app/actions/getIndividualPackage";
import { formatDateTime } from "@/lib/dateTimeUtils";
import { formatDate } from "@/lib/dateUtils";

const Page = async ({ params }: { params: { id: string } }) => {

    const packageId = params.id
    console.log(packageId)

    const thePackageArray = await getIndividualPackage(packageId)

    const thePackage = thePackageArray[0];
    
        const {
            trackingNumber,
            originPort,
            destinationPort,
            transportationMode,
            pieces,
            length,
            weight,
            width,
            height,
            deliveryRequiredDate,
            estimatedDeliveryDate,
            dateCreated
        } = thePackage

    return ( 
        <main>
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-20">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-4 text-center">Package Details</p>
            <div className="flex flex-col gap-y-3 mt-10">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Tracking Code <span className="text-orange">{trackingNumber}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Origin Port <span className="text-orange">{originPort}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Destination Port <span className="text-orange">{destinationPort}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Transportation Mode <span className="text-orange">{transportationMode}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Pieces(Quantity) <span className="text-orange">{pieces}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Weight (KG) <span className="text-orange">{weight} KG</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Length (CM)<span className="text-orange">{length} CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Width (CM)<span className="text-orange">{width} CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Height (CM)<span className="text-orange">{height} CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Delivery Required Date and Time<span className="text-orange text-end">{formatDateTime(deliveryRequiredDate)}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Estimated Delivery Date and Time<span className="text-orange text-end">{formatDateTime(estimatedDeliveryDate)}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Package Date Created<span className="text-orange text-endd">{formatDate(dateCreated)}</span></p>
                <div className="border-b border-black my-4"></div>
                <p className="text-xs sm:text-sm md:text-base font-bold mt-4 text-center">Update Package Status</p>
                <form>
                  <label htmlFor="statusChanges" className="text-xs md:text-sm block cursor-pointer font-bold">Status</label>
                  <select required name="statusChanges" id="statusChanges" className="cursor-pointer font-bold mt-2 w-full rounded-md text-xs md:text-sm p-3 bg-white text-black focus:outline-orange border border-black">
                    <option value="">Update Package Status</option>
                    <option value="PickedUp">Picked Up</option>
                    <option value="PackageReceived">Package Received</option>
                    <option value="InTransitRoad">In Transit (Road)</option>
                    <option value="InFlight">In Flight (Flight)</option>
                    <option value="InShip">In Ship</option>
                    <option value="InRail">In Rail (Rail)</option>
                    <option value="Arrived">Package Arrived</option>
                    <option value="OutForDelivery">Out For Delivery</option>
                    <option value="Delivered">Package Delivered</option>
                  </select>
                  <div className="mt-8">
                  <input type="submit" value={"Update Package Status"} className="text-xs md:text-sm w-full p-2 md:p-3 cursor-pointer bg-orange text-white rounded-md font-semibold hover:bg-orange1 duration-500"/>
                </div>
                </form>
            </div>
        </div>
    </main>
 );
}
 
export default Page;