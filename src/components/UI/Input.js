import React from "react";
import Button from "./Button";

const Input = () => {
return (
    <div className="px-7 py-6">
      <div className="relative">
        <div className="absolute top-2.5 left-3 flex  items-center gap-x-1 cursor-pointer">
          <span className="border-none font-semibold text-sm">Location</span>
          <i className="fa-solid fa-circle-chevron-down"></i>
        </div>
        <input
          type="text"
          placeholder="Find a Location"
          className="border border-gray-200 px-2 py-2 rounded-full text-sm pl-[5.8rem] outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
