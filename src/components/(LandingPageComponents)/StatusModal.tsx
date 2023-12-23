
//import Icons
import { FaHandshake, FaFaceSadTear } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

type statusProps = {
    theStatus: string,
    onHideModal: () => void
}

export default function Modal({theStatus, onHideModal}: statusProps){
    
    return(
        <main className={`fixed h-screen w-full bg-black bg-opacity-50 flex items-center justify-center z-[70] top-0 left-0`}>
            <div className="w-80 h-80 md:h-96 md:w-96 bg-bgWhite p-4">
                <div className="flex flex-col items-end">
                    <RxCross1 size={24} className="cursor-pointer" onClick={onHideModal}/>
                    <p className="text-xs font-bold">close</p>
                </div>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-10 rounded-[50%] p-3">
                       <div className="rounded-[50%] bg-white border border-gray-300 w-[7rem] h-[7rem] flex items-center justify-center shadow-lg">
                           {theStatus === "success" && <FaHandshake size={60} className="text-green-700"/>} 
                           {theStatus === "failure" && <FaFaceSadTear size={60} className="text-red-700"/>}
                       </div> 
                    </div>
                </div>
                <div className="text-center font-semibold mt-8 text-sm md:text-base">
                    {theStatus === "success" && <> <p>Your Quote Was Submitted Successfully!</p>
                   <p>Our service agent will contact you soon via your email.</p> </>}

                   {theStatus === "failure" && <> <p>Your Quote Submission Failed!</p>
                    <p>Please, try again later Thank You.</p> </>}
                </div>
            </div>
        </main>
    )
}