import Image from "next/image";
import React from "react";
import Button from "../UI/Button";

const MapHeader = ({
  isSearch,
  setIsSearch,
  setLoginModal,
  openDrawer,
  setOpenDrawer,
}) => {
  return (
    <div className="w-full absolute top-5 px-3 lg:px-6 ">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <Button
            className="bg-white shadow-2xl w-fit px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-extrabold"
            name="campaign"
          >
            <div className="flex justify-center items-center ">
              <div>
                <Image
                  src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-small-logo-only.svg"
                  width={24}
                  height={24}
                  className="hidden sm:block"
                />
              </div>
              <span> kitajaga campaign</span>
            </div>
          </Button>
          <Button
            className="bg-white shadow-2xl w-fit px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-extrabold gap-x-2"
            onClick={() => setLoginModal(true)}
          >
            <i className="fa fa-user text-sm sm:text-lg" aria-hidden="true"></i>
            <span className="hidden sm:block">Profile</span>
          </Button>
        </div>
        <div className="flex gap-x-2">
          <Button className="shadow-2xl w-fit px-3 lg:px-4 py-1.5 text-xs lg:text-sm  font-extrabold bg-black">
            <i className="fa-brands text-sm sm:text-xl text-white fa-rocketchat"></i>
          </Button>
          <Button
            className={`${
              isSearch ? "bg-black text-white" : "bg-white text-black"
            } shadow-2xl w-fit px-4 py-1.5 text-sm font-extrabold gap-x-2 `}
            onClick={() => {setIsSearch(!isSearch), setOpenDrawer(!openDrawer)}}
          >
            <i
              className={`fa-sharp fa-solid fa-sort text-sm sm:text-lg ${
                isSearch ? "text-white" : "text-black"
              }`}
            ></i>
            <span className="hidden sm:block">Search</span>
          </Button>
          <Button
            className={`shadow-2xl w-fit px-3 lg:px-4 py-1.5 text-xs lg:text-sm  font-extrabold ${
              openDrawer ? "bg-black text-white" : "bg-white text-black"
            } `}
            onClick={() => {setOpenDrawer(!openDrawer)}}
          >
            <i className="fa-solid text-sm sm:text-xl fa-bars"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapHeader;
