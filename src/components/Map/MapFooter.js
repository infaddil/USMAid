import React from "react";
import Button from "../UI/Button";

const MapFooter = () => {
  return (
    <div className="w-full absolute bottom-20 px-6">
      <div className="flex justify-center items-center gap-x-2">
        <Button className="bg-[#CE3245] text-white px-48 py-2.5">
          I need help
        </Button>
        <Button className="bg-[#1c4ba9] text-white px-48 py-2.5">
          I want to help
        </Button>
      </div>
      <div className="absolute right-8 bottom-1">
        <Button className="shadow-2xl bg-white p-1 px-2 rounded-full">
          <i class="fa-solid fa-location-arrow text-2xl text-center"></i>
        </Button>
      </div>
    </div>
  );
};

export default MapFooter;
