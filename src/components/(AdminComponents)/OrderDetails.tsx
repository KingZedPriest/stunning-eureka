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
            <p className="text-xs sm:text-sm md:text-base font-bold mt-4">Package Details</p>
            <div className="flex flex-col gap-y-3">

            </div>
        </div>
    </main>
)
};

export default OrderDetails;
