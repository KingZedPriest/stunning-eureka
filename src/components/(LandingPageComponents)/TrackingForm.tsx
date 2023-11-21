//Import Needed Modals
import StatusModal from "./StatusModal";
export default function TrackingForm(){
    return(
        <div className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-8 w-[90%] sm:w-[80%] md:w-[90%] lg:w-[60%] mx-auto">
            <p className="text-orange font-bold">Tracking Details</p>
            <form className="mt-8">
                <div className="w-full">
                    <input required type="text" name="trackingNumber" className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                    <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Tracking Number</p>
                </div>
                <input type="submit" value="Track" className="w-full text-center py-2 md:py-3 bg-orange text-white mt-4 hover:bg-blue duration-500 cursor-pointer" />
            </form>
        </div>
    )
}