import Image from "next/image";
import React from "react";
import flag from "../../assets/images/whiteflag.png";
import Button from "../UI/Button";

const MapFooter = ({ openDrawer }) => {
  return (
    <div className="w-full absolute bottom-20 px-6">
      <div className="flex justify-center items-center gap-x-2">
        <Button className="bg-[#CE3245] text-white w-full text-xs sm:text-base lg:text-lg md:w-1/3 py-2 sm:py-2.5">
          I need help
          <div>
            <Image src={flag} width={22} height={22} alt="img" />
          </div>
        </Button>
        <Button className="bg-[#1c4ba9] text-white w-full text-xs sm:text-base lg:text-lg md:w-1/3 py-2 sm:py-2.5">
          I want to help 🍱
        </Button>
      </div>
      <div className="absolute right-8 bottom-12 sm:bottom-16 md:bottom-1">
        <Button className="shadow-2xl bg-white p-1 px-2 rounded-full">
          <i className="fa-solid fa-location-arrow text-lg md:text-2xl text-center"></i>
        </Button>
      </div>
    </div>
  );
};

export default MapFooter;
