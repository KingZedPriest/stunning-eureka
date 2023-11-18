"use client"
import { useState, ChangeEvent } from "react";
//Import Icons
import { MdMarkEmailRead, MdContactSupport }  from "react-icons/md";
const Contact = () => {
    //Copying of the emails states and variables
    const supportEmail = 'Support@unitedtraverse.com';
    const partnershipEmail = "Partnership@unitedtraverse.com";
    const [supportCopied, setSupportCopied] = useState<boolean>(false);
    const [partnershipCopied, setPartnershipCopied] = useState<boolean>(false);
    //Function
    const handleCopySupport = async () => {
      try {
        await navigator.clipboard.writeText(supportEmail);
        setSupportCopied(true);
      } catch (error) {
        console.error('Unable to copy to clipboard', error);
      }
    };
    const handleCopyPartnership = async () => {
      try {
        await navigator.clipboard.writeText(partnershipEmail);
        setPartnershipCopied(true);
      } catch (error) {
        console.error('Unable to copy to clipboard', error);
      }
    };
    //Text State
    const [text, setText] = useState<string>('');
    //Maximum Length
    const maxLength = 200;
    //Length Function
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
    }
  };
  return (
    <main className="relative bg-[url('../../public/images/contact.jpeg')] bg-cover bg-center object-center py-[8rem] text-white">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative px-4 sm:px-10 md:px-12 lg:px-14">
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Get In Touch.
        </h1>
        <div className="flex items-center justify-center flex-col-reverse gap-y-5 md:gap-y-0 md:flex-row md:gap-x-10 mt-20">
            <div className="w-80 md:w-96 h-96 bg-white duration-500 text-black">
                <form className="p-4">
                    <div className="w-full flex justify-between">
                        <div className="w-[49%]">
                            <label htmlFor="firstName" className="text-xs md:text-sm">First Name</label>
                            <input required type="text" name="firstName" id="firstName" placeholder="Enter Your First Name" className="text-sm placeholder:text-xs outline-none mt-2 w-full border border-black p-2 focus:border-orange"/>
                        </div>
                        <div className="w-[49%]">
                            <label htmlFor="firstName" className="text-xs md:text-sm">Last Name</label>
                            <input required type="text" name="lastName" id="lastName" placeholder="Enter Your Last Name" className="text-sm placeholder:text-xs outline-none mt-2 w-full border border-black p-2 focus:border-orange"/>
                        </div>
                    </div>
                    <div className="mt-4"> 
                        <label htmlFor="email" className="text-xs md:text-sm">Email</label>
                        <input required type="text" name="email" id="email" placeholder="Enter Your Email Address" className="text-sm placeholder:text-xs outline-none mt-2 w-full border border-black p-2 focus:border-orange"/>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="body" className="text-xs md:text-sm">Body <span className="text-xs">({maxLength - text.length}/{maxLength})</span></label>
                        <textarea required onChange={handleChange} name="body" id="body" maxLength={200} placeholder="Enter Your Message" className="py-4 text-sm resize-none placeholder:text-xs outline-none mt-2 w-full border border-black p-2 focus:border-orange"/>
                    </div>
                    <input className="mt-4 bg-orange border border-orange text-white hover:bg-white duration-500 hover:text-orange py-2 cursor-pointer w-full text-center" type="submit" value="Submit" />
                </form>
            </div>
            <div className="w-80 md:w-96 h-60 bg-orange text-white flex flex-col px-4 md:px-8 justify-center">
              <p className="font-semibold text-xs md:text-sm">For Partnership Contact</p>
              <div className="flex gap-x-2 mt-2 items-center">
                <div className="p-2 bg-bgWhite rounded-[50%] group">
                  <MdMarkEmailRead size={24} className="text-orange group-hover:text-blue"/>
                </div>
                <div>
                  <h1 className="text-base md:text-lg font-bold cursor-grabbing" onClick={handleCopySupport}>Partnership@unitedtraverse.com</h1>
                  {supportCopied && <p className="text-xs">Copied to clipboard!</p>}
                </div>
                
              </div>
              <p className="font-semibold text-xs md:text-sm mt-8">For Support Contact</p>
              <div className="flex gap-x-2 mt-2 items-center">
              <div className="p-2 bg-bgWhite rounded-[50%] group">
                  <MdContactSupport size={24} className="text-orange group-hover:text-blue"/>
                </div>
                <div>
                  <h1 className="text-base md:text-lg font-bold cursor-grabbing" onClick={handleCopyPartnership}>Support@unitedtraverse.com</h1>
                  {partnershipCopied && <p className="text-xs">Copied to clipboard!</p>}
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
