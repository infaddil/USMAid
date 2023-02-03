import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import Button from "./Button";

const PopupModal = ({setIsShowModal}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#7F7F7F] bg-opacity-75 absolute">
      <div className="flex flex-col gap-y-6 justify-center items-center border rounded-[32px] w-[440px] bg-white px-8 py-7 shadow-lg">
        <div className="flex">
          <div>
            <Image
              src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/img/icon-help-cadbury.png"
              width={80}
              height={88}
              alt="img"
            />
          </div>
          <div>
            <Image
              src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/img/icon-helper-cadbury.png"
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
        <Link href={"#"} className="text-[#39005F] font-extrabold underline text-sm">
          Click here for a tutorial on how to enable location
        </Link>
        <Button className="border-[#cccccc] w-full py-3 hover:bg-black hover:text-white" onClick={() => setIsShowModal(false)}>I agree</Button>
      </div>
    </div>
  );
};

export default PopupModal;
