import React from "react";
import Button from "../UI/Button";

const MapFooter = () => {
  return (
    <div className="w-full flex justify-between items-center absolute bottom-20 px-6">
        <div className="flex justify-center gap-x-2">
          <Button className="bg-[#CE3245] text-white px-52 py-3">
            I need help
          </Button>
          <Button className="bg-[#1c4ba9] text-white px-52 py-3">
            I want to help
          </Button>
        </div>
        <i className="fa fa-user text-lg" aria-hidden="true"></i>

        <div>
      </div>
    </div>
  );
};

export default MapFooter;
