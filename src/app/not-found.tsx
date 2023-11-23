import Link from "next/link"
export default function Error(){
    return(
        <main className="relative bg-[url('../../public/images/bg404.jpg')] w-full h-screen flex items-center justify-center bg-cover object-center bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative text-center px-4">
            <h1 className="hollowText text-[10rem] sm:text-[12rem] md:text-[14rem] lg:text-[16rem] xl:text-[18rem]">404</h1>
            <p className="capitalize font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white">Sorry, we couldn&apos;t find the page you are looking for.</p>
            <div className="mt-20 transform hover:translate-x-2 hover:-translate-y-2 duration-500">
            <Link href="/" className="px-10 text-center py-2 md:py-3 bg-orange hover:bg-blue text-white text-sm md:text-base">Back To Home</Link>
            </div>
        </div>
    </main>
    )
}