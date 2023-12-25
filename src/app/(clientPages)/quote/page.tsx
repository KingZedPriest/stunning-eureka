//Import Needed Components
import CTA from "@/components/(LandingPageComponents)/CTA";
import QuoteForm from "@/components/(LandingPageComponents)/QuoteForm";

const page = () => {
    return ( 
        <main className="my-10">
            <QuoteForm />
            <CTA />
        </main>
     );
}
 
export default page;