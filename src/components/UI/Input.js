import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";
import React, { useState } from "react";
import Button from "./Button";

const Input = ({setOpenDrawer}) => {
  return (
    <div className="px-3 xl:px-7 py-1 md:py-6">
              <Button
          className="md:hidden bg-white text-xl justify-center  text-white h-12 w-12 shadow-lg mb-6"
          onClick={() => setOpenDrawer(false)}
        >
          <BottomArrowIcon className="text-white flex justify-center items-center w-7 h-7 p-1 border rounded-full bg-black text-sm " />
        </Button>
      <div className="relative">
        <div
          className="absolute top-2.5 left-3 flex  items-center gap-x-1 cursor-pointer"
        >
          <span className="border-none font-semibold text-sm">Location</span>
          <i className="fa-solid fa-circle-chevron-down"></i>
    
        </div>
        <input
          type="text"
          placeholder="Find a Location"
          className="border border-gray-200 px-2 py-2 rounded-full text-sm pl-[5.8rem] w-full outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
