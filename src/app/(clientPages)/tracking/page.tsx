//Import Needed Components
import Consult from "@/components/(AboutUsComponents)/Consult";
import CTA from "@/components/(LandingPageComponents)/CTA";
import TrackingForm from "@/components/(LandingPageComponents)/TrackingForm";
const page = () => {
    return ( 
        <main className="mt-10">
            <div className="mb-10">
                <TrackingForm />
            </div>
            
            <Consult />
            <CTA />
        </main>
     );
}
 
export default page;