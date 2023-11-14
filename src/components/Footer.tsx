//Needed Images
import logo from "../../public/images/logo.png";
//Deafult Mechanism
import Image from "next/image";
import Link from "next/link";
export default function Footer(){
    return(
        <main className="py-10 px-4 sm:px-10 md:px-12 lg:px-14 bg-footerBrown text-white text-xs sm:text-sm md:text-base">
            <div className="text-white flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between">
            <div className="flex flex-col">
                <h4 className="font-bold text-orange">Quick Actions</h4>
                <Link href="" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Tracking And Trace</Link>
                <Link href="" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Same Day Delivery</Link>
                <Link href="" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Request A Quote</Link>
                <Link href="" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Support</Link>
                <Link href="" className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2">Legal</Link>
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold text-orange">Company</h4>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/">Privacy Statement</Link>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/">Partner With Us</Link>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/">Services</Link>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/">Why Us?</Link>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/">Career</Link>
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold text-orange">Contact Us</h4>
            <p className="mt-2">General Inquiries: contactus@unitedtraverse.com</p>
            <p className="mt-2">Support: support@unitedtraverse.com</p>
            <Link className="mt-2 hover:bg-orange duration-500 hover:px-2 rounded-md py-2" href="/">FAQ</Link>         
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold text-orange">Newsletter</h4>
                <p className="mt-2 capitalize">Join our community and be the first to know of any update.</p>
                <div className="mt-8 flex flex-row items-center">
                    <input className="w-56 sm:w-60 py-3 px-4 focus:outline-blue text-black caret-orange placeholder:text-sm rounded-md" type="email" name="email" id="email" placeholder="Enter Your Email..." />
                    <button className="font-semibold md:w-40 bg-orange border-r-4 border-orange px-2 py-3 rounded-md hover:bg-white hover:text-blue duration-500" ><Link href="/">Subscribe</Link></button>
                </div>
            </div>
        </div>
        <div className="mt-16 flex flex-row justify-between border-y border-white py-4">
            <div className="flex flex-row items-center">
                <div className="border-r border-white pr-4">
                    <div className="p-4 bg-orange">
                        <Image src={logo} alt="United Traverse Logo" className="w-20 md:w-10"/>  
                    </div>
                </div>
               <div className="ml-4">
               <p className="headingFont text-white text-xs md:text-sm lg:text-base">Most Reliable Courier Company.</p>
               </div>
            </div>
            <div className="flex items-center">
                <p className="text-xs md:text-sm">Connecting Continents, Delivering Dreams.</p>
            </div>
            
        </div>
        </main>
    )
}


