//Import Needed Icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

type Location = {
    route: string,
    coloredRoute: string
}
const AdminHeading = ({route, coloredRoute}: Location) => {
    return ( 
        <main className="flex gap-x-2 items-center my-4">
            <MdKeyboardDoubleArrowRight className="text-xl sm:text-2xl md:text-3xl"/>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg font-semibold uppercase">{route}/ <span className="text-orange">{coloredRoute}</span></p>
        </main>
     );
}
 
export default AdminHeading;