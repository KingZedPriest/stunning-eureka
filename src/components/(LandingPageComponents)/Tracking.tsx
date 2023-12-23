"use client"
import { useState, useEffect } from "react";
import getPackageWithStatusChanges from "@/app/actions/getIndividualStatus";

type trackingProps = {
    packageID : string,
    onHideModal: () => void
}
const Tracking = ({packageID, onHideModal }: trackingProps) => {
    
    const [packageStatus, setPackageStatus] = useState<any | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const statusData = await getPackageWithStatusChanges(packageID);
            setPackageStatus(statusData);
          } catch (error) {
            console.error('Error fetching package status:', error);
          }
        };
    
        fetchData();
      }, [packageID]);
 
    console.log(packageStatus)
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-50 flex items-center justify-center z-[70] top-0 left-0">
            <div className="w-80 h-80 md:h-96 md:w-96 bg-bgWhite p-4">
                
            </div>
        </main>
     );
}
 
export default Tracking;