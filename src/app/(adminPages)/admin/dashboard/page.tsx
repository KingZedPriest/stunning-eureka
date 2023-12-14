//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import Summary from "@/components/(AdminComponents)/Summary";
import LastDelivery from "@/components/(AdminComponents)/Transaction";

const page = () => {
    return ( 
        <main>
         <div className="px-4 py-4 lg:px-10">
            <AdminHeading route="home" coloredRoute="dashboard"/>
         </div>
          <div className="bg-bgWhite px-4 py-6 lg:px-10 h-screen">
            <Summary />
            <LastDelivery />
           </div> 
        </main>
     );
}
 
export default page;