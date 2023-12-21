"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import Link from "next/link";

type InitialStateProps = {
  packageID: string;
  statusChanges: string;
};
const initialState: InitialStateProps = {
  packageID: "",
  statusChanges: "",
};
const StatusChange = ({ thePackageID }: { thePackageID: string }) => {
    const router = useRouter()
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  //OnChange Function
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  //Function for the Form Reset
  const handleFormReset = () => {
    setState(initialState);
  };
  //For the Function Submit
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true)
    const formData = { ...state, packageID: thePackageID }
    console.log(formData)
    makeApiRequest("/statusChange", "post", formData, {
      onSuccess: () => {
        // Handle success
        handleFormReset();
        setLoading(false)
        toast.success("The Package Status Was Updated Successfully.");
        router.refresh();
      },
      onError: (error: any) => {
        // Handle error
        handleFormReset();
        setLoading(false)
        if (error) {
         if (error === "Missing Fields") {
            toast.error("Please Fill In All The Details");
          } else {
            toast.error("The Package Status Wasn't Updated. Please try again.");
          }
        }
      },
    });
  };
  return (
    <main className="w-full">
      <form onSubmit={onSubmit}>
        <label
          htmlFor="statusChanges"
          className="block cursor-pointer text-xs font-bold md:text-sm"
        >
          Status
        </label>
        <select
          required
          onChange={handleChange}
          value={state.statusChanges}
          name="statusChanges"
          id="statusChanges"
          className="mt-2 w-full cursor-pointer rounded-md border border-black bg-white p-3 text-xs font-bold text-black focus:outline-orange md:text-sm"
        >
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
          <input
            type="submit"
            value={
              loading ? "Updating Package Status..." : "Update Package Status"
            }
            className="w-full cursor-pointer rounded-md bg-orange p-2 text-xs font-semibold text-white duration-500 hover:bg-orange1 md:p-3 md:text-sm"
          />
        </div>
      </form>
      <div className="my-4 text-center">
      <Link className="text-[0.6rem] sm:text-xs md:text-sm hover:underline duration-500 font-semibold" href="/tracking" target="_blank">Confused about the package status? Kindly Check it here.</Link>
      </div>
    </main>
  );
};

export default StatusChange;
