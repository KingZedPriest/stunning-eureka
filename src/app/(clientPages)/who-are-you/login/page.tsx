"use client";
import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";

//Import Icons
import { MdEmail } from "react-icons/md";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaMehRollingEyes } from "react-icons/fa";

type InitialStateProps = {
  email: string,
  password: string,
}
const initialState:InitialStateProps = {
  email: "",
  password: ""
}
export default function Login() {
  //Input State, For the Password
  const [inputType, setInputType] = useState<"text" | "password">("password");
  //State for the inputs
  const [state, setState] = useState(initialState)
  //Ref Hook for the Password field
  const inputRef = useRef<HTMLInputElement | null>(null);
  //Function for the Input type toggle
  const toggleInputType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  //Function for the State Changing
  const handleChange = (event: any) => {
      setState({...state, [event.target.name]: event.target.value})
  }
  //Function for the Form Reset
  const handleFormReset = () => {
    setState(initialState);
  };
  //For the Submit Function
  const onSubmit = (event: FormEvent) => {
  event.preventDefault();

  const formData = state;

    makeApiRequest('/login', 'post', formData, {
    onSuccess: () => {
      // Handle success
      handleFormReset();
      toast.success("Account was created successfully.");
    },
    onError: () => {
      // Handle error
      toast.error("Account was not created try again later.");
    },
 });
};

  return (
    <main className="h-screen flex items-center justify-center overflow-hidden">
      <div className="mt-14 p-5 md:py-10 md:px-10 xl:px-20 flex flex-col items-center md:items-start">
        <div className="flex items-baseline gap-x-0.5">
          <h1 className="font-semibold mt-4 text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
            Login To Your Account
          </h1>
          <div className="h-2 w-2 rounded-[50%] bg-orange"></div>
        </div>
        <p className="text-sm md:text-base mt-4 text-orange">
          Not A Member?{" "}
          <span className="text-orange cursor-pointer hover:text-orange1 duration-500">
            <Link href="/who-are-you/register">Create Account</Link>
          </span>
        </p>
          <form className="mt-10 w-full">
              
            <div className="relative mt-4 w-[20rem] md:w-[30rem]">
              <input
                className="text-sm focus:border-2 focus:border-orange border border-slate-700 bg-bgWhite px-2 py-3 w-full outline-none rounded-md placeholder:text-xs"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <MdEmail size={18} className="absolute top-4 right-2" />
            </div>
            
            <div className="relative mt-4 w-[20rem] md:w-[30rem]">
              <input
                ref={inputRef}
                className="text-sm focus:border-2 focus:border-orange border border-slate-700 bg-bgWhite px-2 py-3 w-full outline-none rounded-md placeholder:text-xs"
                type={inputType}
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <BsEmojiHeartEyesFill
                size={18}
                className={`${
                  inputType === "text" ? "hidden" : ""
                } cursor-pointer absolute top-4 right-2`}
                onClick={toggleInputType}
              />
              <FaMehRollingEyes
                size={18}
                className={`${
                  inputType === "password" ? "hidden" : ""
                } cursor-pointer absolute top-4 right-2`}
                onClick={toggleInputType}
              />
            </div>
            <div className="flex w-[20rem] md:w-[30rem] mt-8 justify-between">
              <button
                className="w-full py-4 text-center text-xs md:text-sm rounded-md text-white bg-orange hover:text-orange hover:bg-[#EDEDEE] duration-500 hover:font-semibold"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          </div>
    </main>
  );
}
