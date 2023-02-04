import React, { useState } from "react";
import Button from "./Button";

const Input = () => {
  const [selectSearchType, setSearchType] = useState(false);
  return (
    <div className="px-3 xl:px-7 py-6">
      <div className="relative">
        <div
          className="absolute top-2.5 left-3 flex  items-center gap-x-1 cursor-pointer"
          onClick={() => setSearchType(true)}
        >
          <span className="border-none font-semibold text-sm">Location</span>
          <i className="fa-solid fa-circle-chevron-down"></i>
          {selectSearchType && (
            <div className="flex flex-col gap-y-4 py-2 px-8 absolute top-8 border rounded-[24px] bg-[#F1F2F4] text-sm">
              <div className="flex gap-x-4 justify-st art items-center hover:bg-gray-300 py-2 px-12">
              <i class="fas fa-check-circle"></i>
                <span>Find a Location</span>
              </div>
              <div className="flex gap-x-4 justify-center items-center hover:bg-gray-300 py-2 px-6">
              <i class="fas fa-check-circle"></i>
                <span>Find ID</span>
              </div>
              <div className="flex gap-x-4 justify-center items-center hover:bg-gray-300 py-2 px-6">
              <i class="fas fa-check-circle"></i>
                <span>Find out</span>
              </div>
            </div>
          )}
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
