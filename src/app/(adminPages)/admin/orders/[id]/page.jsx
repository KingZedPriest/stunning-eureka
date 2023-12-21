import getIndividualPackage from "@/app/actions/getIndividualPackage";
import getStatus from "@/app/actions/getStatus"
import { formatDateTime } from "@/lib/dateTimeUtils";
import { formatDate } from "@/lib/dateUtils";

//Import Needed Components
import StatusChange from "@/components/(AdminComponents)/StatusChange";
const Page = async ({ params }) => {
    const packageId = params.id

    const thePackageArray = await getIndividualPackage(packageId)
    const packageStatus = await getStatus(packageId)
    
    const thePackage = thePackageArray[0];
    const theStatus = packageStatus[0]
    return ( 
        <main>
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-20">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mt-4 text-center">Package Details</p>
            <div className="flex flex-col gap-y-3 mt-10">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Tracking Code <span className="text-orange">{thePackage.trackingNumber}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Origin Port <span className="text-orange">{thePackage.originPort}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Destination Port <span className="text-orange">{thePackage.destinationPort}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Transportation Mode <span className="text-orange">{thePackage.transportationMode}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Pieces(Quantity) <span className="text-orange">{thePackage.pieces}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Weight (KG) <span className="text-orange">{thePackage.weight} KG</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Length (CM)<span className="text-orange">{thePackage.length} CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Width (CM)<span className="text-orange">{thePackage.width} CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Height (CM)<span className="text-orange">{thePackage.height} CM</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Delivery Required Date and Time<span className="text-orange text-right">{formatDateTime(thePackage.deliveryRequiredDate)}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Current Status<span className="text-orange">{theStatus ? theStatus.status : "No Status Yet"}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Estimated Delivery Date and Time<span className="text-orange text-right">{formatDateTime(thePackage.estimatedDeliveryDate)}</span></p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold flex justify-between gap-x-5">Package Date Created<span className="text-orange text-right">{formatDate(thePackage.dateCreated)}</span></p>
                <div className="border-b border-black my-4"></div>
                <p className="text-xs sm:text-sm md:text-base font-bold mt-4 text-center">Update Package Status</p>
                <StatusChange thePackageID={packageId}/>
            </div>
        </div>
    </main>
 );
}
 
export default Page;