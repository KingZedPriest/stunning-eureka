"use client"
import { useState } from "react";

export default function Forms(){
 //The Form States
  const [quoteForm, setQuoteForm] = useState<boolean>(true)
 //Toggling Function
  const toggleForm = () => {
    return setQuoteForm((PrevQuoteForm) => !PrevQuoteForm)
  }
    return(
        <main className="px-4 sm:px-10 md:px-12 lg:px-14">
            <div className="bg-bgWhite relative z-10 mx-auto -top-[5rem] px-4 py-8"> 
                <h1 className="capitalize text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">on the spot freight quotations and tracking</h1>
                <div className="flex justify-center mt-10">
                    <button onClick={toggleForm} className={`border-2 border-orange text-orange font-bold text-sm md:text-base px-2 sm:px-4 md:px-6 lg:px-8 py-2`}>Request a Quote</button>
                    <button onClick={toggleForm} className={`border-2 border-l-0 border-orange text-orange font-bold text-sm md:text-base px-2 sm:px-4 md:px-6 lg:px-8 py-2`}>Track and Trace</button>
                </div>
            </div>
        </main>
        
    )
}