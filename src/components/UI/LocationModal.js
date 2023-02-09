import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import flag1 from "../../assets/images/icon-help-cadbury.png"
import flag2 from "../../assets/images/icon-helper-cadbury.png"

const LocationModal = ({setLocationModal}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center  bg-black bg-opacity-50 absolute z-[22] dark:text-black">
      <div className="flex flex-col gap-y-6 justify-center items-center  border rounded-[32px] ] w-[440px] bg-white px-8 py-7 shadow-lg">
        <div className="flex">
          <div>
            <Image
              src={flag1}
              width={80}
              height={88}
              alt="img"
            />
          </div>
          <div>
            <Image
              src={flag2}
              width={80}
              height={88}
              alt="img"
            />
          </div>
        </div>
        <h1 className="text-lg font-extrabold">Enable Location Services</h1>
        <p className="text-center text-base">
          By activating this location service, it allows kitajaga.co to use your
          device's location, such as GPS information, to display the exact
          location of the pin.
        </p>
        <Link href={"#"} className="text-[#39005F] font-extrabold dark:text-[#8DA5B4] underline text-sm">
          Click here for a tutorial on how to enable location
        </Link>
        <Button className="border-[#cccccc] w-full py-3 hover:bg-black hover:text-white" onClick={() => setLocationModal(false)}>I agree</Button>
      </div>
    </div>
  );
};

export default LocationModal;
