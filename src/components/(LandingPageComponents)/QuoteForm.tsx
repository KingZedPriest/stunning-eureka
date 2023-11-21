//Import Needed Modals
import StatusModal from "./StatusModal";
export default function QuoteForm(){
    return(
        <>
        <StatusModal status=""/>
        <div className="bg-white px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:w-[80%] md:w-[90%] lg:w-[60%] mx-auto">
            <p className="text-orange font-bold">Personal Data</p>
            <form className="mt-8">
                <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:justify-between md:gap-x-3">
                   <div className="w-full md:w-1/3">
                    <input required type="text" name="fullName" className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown  px-4 py-2"/> 
                    <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Full Name</p>
                   </div>
                   <div className="w-full md:w-1/3">
                    <input type="email" name="email" className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown  px-4 py-2"/> 
                    <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Email</p>
                    <p className="text-xs text-orange relative -top-4 font-bold invisible peer-invalid:visible">Invalid Email</p>
                   </div>
                   <div className="w-full md:w-1/3">
                      <input required type="tel" name="phoneNumber" className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Phone Number</p>
                   </div>
                </div>
                <p className="text-orange font-bold mt-4">Package Information</p>
                <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row md:justify-between md:gap-x-3 mt-8">
                    <div className="w-full md:w-1/3">
                      <input required type="text" name="pickupLocation" className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Pickup Location</p>
                    </div>
                    <div className="w-full md:w-1/3">
                      <input required type="text" name="deliveryLocation" className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-2"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Delivery Location</p>
                   </div>
                   <div className="w-full md:w-1/3">
                      <input required type="datetime-local" name="date" className="w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-[0.425rem] cursor-pointer"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[3rem] peer-focus:-top-[3.5rem] duration-500">Date and Time</p>
                   </div>
                </div>
                <div className="w-full mt-8">
                      <textarea required name="details" className="resize-none w-full peer focus:outline-none border-b focus:border-orange border-footerBrown px-4 py-[0.425rem] cursor-pointer"/> 
                      <p className="text-xs md:text-sm font-bold relative -top-[6rem] peer-focus:-top-[6.5rem] duration-500">Important Details</p>
                      <p className="text-xs font-bold relative -top-[1.4rem]">Please provide all relevant dimensions, weight, instructions etc</p>
                </div>
                <input type="submit" value="Submit" className="w-full text-center py-2 md:py-3 bg-orange text-white mt-4 hover:bg-blue duration-500 cursor-pointer" />
            </form>
        </div>
        </>
    )
}