//Import Needed Components
import AdminHeading from "@/components/(AdminComponents)/AdminHeading";
import OrderSummary from "@/components/(AdminComponents)/OrderSummary";

const page = () => {
    return ( 
        <main>
            <div className="px-4 py-4 lg:px-10">
                <AdminHeading route="home" coloredRoute="orders"/>
            </div>
            <div className="bg-bgWhite px-4 py-6 lg:px-10 h-screen">
                <OrderSummary />
            </div>
        </main>
     );
}
 
export default page;