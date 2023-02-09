import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const LoginModal = ({ setLoginModal }) => {
  return (
    <>

    <div className="w-full h-screen flex justify-start  bg-black bg-opacity-50 items-start absolute z-[22] dark:text-black  " >

      <div className="flex flex-col gap-y-2 md:gap-y-3 border rounded-[32px]  w-full md:max-w-[368px] mx-4 md:mx-0  bg-white px-4 py-5 md:px-8 md:py-10 shadow-lg relative top-24 md:left-6">
        <div className="flex justify-end">
          <Button
            className="bg-white text-xl justify-end  text-white h-12 w-12 shadow-lg"
            onClick={() => setLoginModal(false)}
          >
            <i
              className="fa fa-times text-black flex justify-center text-2xl "
              aria-hidden="true"
            ></i>
          </Button>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-small-logo-only.svg"
            width={60}
            height={68} 
            alt="img"
          />
        </div>
        <h1 className="text-sm md:text-lg font-extrabold text-center">Login Kitajaga</h1>
        <div>
          <span className="text-[#808080] font-bold text-sm">Phone number</span>
          <input
            type="text"
            placeholder="6013231321"
            className="border rounded-full py-2 px-2 md:py-3 md:px-4 dark:bg-white   outline-[#1c4ba9] w-full"
          />
        </div>
        <Button
          className="bg-[#808080] text-white text-sm w-full py-3"
          onClick={() => setLoginModal(false)}
        >
          Next
        </Button>
        <Button
          className="text-black border-[#DDDDD] border-2 text-sm w-full py-3"
          onClick={() => setLoginModal(false)}
        >
          Login through the magic link
        </Button>
      </div>
    </div>
    </>
  );
};

export default LoginModal;
