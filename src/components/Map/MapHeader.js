import React from "react";
import { Image } from "react-bootstrap";
import Button from "../UI/Button";

const MapHeader = () => {
  return (
    <div className="w-full absolute top-5 px-6 ">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <Button className="bg-white shadow-2xl w-fit px-4 py-1.5 text-sm font-extrabold" name="campaign">
            <div className="flex justify-center items-center">
              <div>
                <Image
                  src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-small-logo-only.svg"
                  width={24}
                  height={24}
                />
              </div>
              <span> kitajaga campaign</span>
            </div>
          </Button>
          <Button className="bg-white shadow-2xl w-fit px-4 py-1.5 text-sm font-extrabold gap-x-2">
            <i className="fa fa-user text-lg" aria-hidden="true"></i>
            Profile
          </Button>
        </div>
        <div className="flex gap-x-2">
          <Button className="shadow-2xl w-fit px-3 py-1.5 text-sm  font-extrabold bg-black">
            <i className="fa-brands text-xl text-white fa-rocketchat"></i>
          </Button>
          <Button className="bg-black shadow-2xl w-fit px-4 py-1.5 text-sm font-extrabold gap-x-2 text-white">
          <i class="fa-sharp fa-solid fa-sort text-lg text-white"></i>Search
          </Button>
          <Button className="shadow-2xl w-fit px-3 py-1.5 text-sm  font-extrabold bg-black">
            <i className="fa-solid text-xl text-white fa-bars"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapHeader;
