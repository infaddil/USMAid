import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const LoginModal = ({ setLoginModal }) => {
  return (
    <div className="w-full h-screen flex justify-start items-center bg-black bg-opacity-50 absolute z-[22]">
      <div className="flex flex-col gap-y-3 border rounded-[32px] w-[368px] bg-white px-8 py-10 shadow-lg relative bottom-16 left-6">
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
        <h1 className="text-lg font-extrabold text-center">Login Kitajaga</h1>
        <div>
          <span className="text-[#808080] font-bold text-sm">Phone number</span>
          <input
            type="text"
            placeholder="6013231321"
            className="border rounded-full py-3 px-4  outline-[#1c4ba9] w-full"
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
  );
};

export default LoginModal;
