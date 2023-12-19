"use client";
import { FormEvent, useState } from "react";
import generateRandomNumber from "@/lib/GenerateTrackingNumber";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";
//Import Icons
import { RxCross1 } from "react-icons/rx";

//Types
type OrderDetailsProps = {
  onClose: () => void;
};
type InitialProps = {
  trackingNumber: string;
  originPort: string;
  destinationPort: string;
  transportationMode: string;
  pieces: number;
  length: number;
  weight: number;
  width: number;
  height: number;
  deliveryRequiredDate: string;
  statusChanges: object;
  estimatedDeliveryDate: string;
};

const initialState: InitialProps = {
  trackingNumber: "",
  originPort: "",
  destinationPort: "",
  transportationMode: "",
  pieces: 0,
  length: 0.0,
  weight: 0.0,
  width: 0.0,
  height: 0.0,
  deliveryRequiredDate: "",
  statusChanges: {},
  estimatedDeliveryDate: "",
};

const OrderCreation = ({ onClose }: OrderDetailsProps) => {
  const router = useRouter();
  //Form State
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  //Tracking Code State and Function
  const [trackingCode, setTrackingCode] = useState<string>("");

  const handleGenerateCode = () => {
    const newTrackingCode = generateRandomNumber();
    setTrackingCode(newTrackingCode);
  };

  //Function for the State Changing
  const handleChange = (event: any) => {
    const { name, value } = event.target;

    // Check if the property is one of the numeric fields
    const isNumericField = [
      "pieces",
      "length",
      "weight",
      "width",
      "height",
    ].includes(name);

    // If it's a numeric field, parse the value as a number
    const updatedValue = isNumericField ? parseFloat(value) : value;

    setState({ ...state, [name]: updatedValue });
  };

  //Close Function
  const closeToggle = () => {
    onClose();
  };
  //Function for the Form Reset
  const handleFormReset = () => {
    setState(initialState);
  };
  //Submit function
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    makeApiRequest("/packages", "post", state, {
      onSuccess: () => {
        // Handle success
        handleFormReset()
        setLoading(false);
        toast.success("The Package was created successfully.");
        router.refresh();
      },
      onError: (error: any) => {
        // Handle error
        handleFormReset()
        setLoading(false);
        if (error) {
          if (error === "Missing Fields") {
            toast.error("Please Fill In All The Details");
          } else {
            toast.error("Package Wasn't Created, Please Try Again Later");
          }
        }
      },
    });
  };
  return (
    <main
      className={`fixed left-0 top-0 z-[70] flex h-screen w-full items-center justify-center bg-black bg-opacity-50`}
    >
      <div className="special h-[40rem] w-80 overflow-y-auto bg-bgWhite p-4 sm:w-96 md:w-[30rem] lg:w-[40rem]">
        <div className="flex justify-end">
          <RxCross1
            size={24}
            className="cursor-pointer"
            onClick={closeToggle}
          />
        </div>
        <p className="mt-4 text-center text-xs font-bold sm:text-sm md:text-base">
          Fill In The Details of The New Package
        </p>
        <form className="mt-4 text-xs md:text-sm" onSubmit={onSubmit}>
          <div className="w-full">
            <label htmlFor="trackingNumber" className="block cursor-pointer">
              Tracking Number
            </label>
            <input
              required
              value={state.trackingNumber}
              onChange={handleChange}
              type="text"
              name="trackingNumber"
              id="trackingNumber"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black focus:outline-orange md:p-3"
            />
          </div>
          <div className="mt-2 flex items-center gap-x-3 md:gap-x-5">
            <p className="w-[70%] text-xs md:text-sm">{trackingCode}</p>
            <button
              type="button"
              onClick={handleGenerateCode}
              className="w-[30%] rounded-md bg-orange py-2 text-center text-xs text-white duration-500 hover:bg-orange1 sm:text-sm md:py-3 md:text-base"
            >
              Generate
            </button>
          </div>
          <div className="mt-2">
            <label htmlFor="originPort" className="block cursor-pointer">
              Origin Port
            </label>
            <input
              required
              onChange={handleChange}
              value={state.originPort}
              type="text"
              name="originPort"
              id="originPort"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black placeholder:text-xs focus:outline-orange md:p-3 md:placeholder:text-sm"
              placeholder="Origin Port"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="destinationPort" className="block cursor-pointer">
              Destination Port
            </label>
            <input
              required
              onChange={handleChange}
              value={state.destinationPort}
              type="text"
              name="destinationPort"
              id="destinationPort"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black placeholder:text-xs focus:outline-orange md:p-3 md:placeholder:text-sm"
              placeholder="Destination Port"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="transportationMode"
              className="block cursor-pointer"
            >
              Mode Of Transport
            </label>
            <select
              onChange={handleChange}
              value={state.transportationMode}
              required
              name="transportationMode"
              id="transportationMode"
              className="mt-2 w-full cursor-pointer rounded-md border border-black bg-white p-3 text-xs text-black focus:outline-orange md:text-sm"
            >
              <option value="">Mode of Transportation</option>
              <option value="Flight">Flight</option>
              <option value="Ship">Ship</option>
              <option value="Road">Road</option>
              <option value="Rail">Rail</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="pieces" className="block cursor-pointer">
              Quantity
            </label>
            <input
              required
              onChange={handleChange}
              value={state.pieces}
              type="number"
              name="pieces"
              id="pieces"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black placeholder:text-xs focus:outline-orange md:p-3 md:placeholder:text-sm"
              placeholder="How Many Pieces(Quantity)"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="weight" className="block cursor-pointer">
              Weight
            </label>
            <input
              required
              onChange={handleChange}
              value={state.weight}
              type="number"
              name="weight"
              id="weight"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black placeholder:text-xs focus:outline-orange md:p-3 md:placeholder:text-sm"
              placeholder="The Weight in KG"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="length" className="block cursor-pointer">
              Length
            </label>
            <input
              required
              onChange={handleChange}
              value={state.length}
              type="number"
              name="length"
              id="length"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black placeholder:text-xs focus:outline-orange md:p-3 md:placeholder:text-sm"
              placeholder="The Length in CM"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="width" className="block cursor-pointer">
              Width
            </label>
            <input
              required
              onChange={handleChange}
              value={state.width}
              type="number"
              name="width"
              id="width"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black placeholder:text-xs focus:outline-orange md:p-3 md:placeholder:text-sm"
              placeholder="The Width in CM"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="height" className="block cursor-pointer">
              Height
            </label>
            <input
              required
              onChange={handleChange}
              value={state.height}
              type="number"
              name="height"
              id="height"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black placeholder:text-xs focus:outline-orange md:p-3 md:placeholder:text-sm"
              placeholder="The height in CM"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="deliveryRequiredDate"
              className="block cursor-pointer"
            >
              Delivery Required Date and Time
            </label>
            <input
              required
              onChange={handleChange}
              type="datetime-local"
              name="deliveryRequiredDate"
              id="deliveryRequiredDate"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black focus:outline-orange md:p-3"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="estimatedDeliveryDate"
              className="block cursor-pointer"
            >
              Estimated Time and Date
            </label>
            <input
              required
              onChange={handleChange}
              type="datetime-local"
              name="estimatedDeliveryDate"
              id="estimatedDeliveryDate"
              className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black focus:outline-orange md:p-3"
            />
          </div>
          <div className="mt-8">
            <input
              type="submit"
              value={loading ? "Creating Your Package..." : "Create Package"}
              className="w-full cursor-pointer rounded-md bg-orange font-semibold text-white duration-500 hover:bg-orange1 p-3"
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default OrderCreation;
