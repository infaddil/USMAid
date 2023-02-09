import React, { useState } from "react";
import Button from "../UI/Button";
import MapUI from "../UI/MapUI";

const ListDetailsItem = ({ data,setLoginModal }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-y-3 mt-4" key={data.id}>
        <MapUI className="small-map" />
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">{data.location}</span>
          <Button className="shadow-2xl h-8 w-8 bg-white p-1 px-2 rounded-full ">
            <i className="fa-solid fa-location-dot text-lg text-center "></i>
          </Button>
        </div>
        <div className="bg-gray-100  p-1.5 rounded-[4px]">
          <span className="text-sm">{data.address}</span>
        </div>
        <span className="font-bold text-lg">{data.name}</span>
        <span className="text-base">
          {showMore ? data.text : `${data.text.substring(0, 80)}...`}
        </span>
        <span
          className="underline text-xs text-[#1C4ba9] font-bold cursor-pointer"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "View Less" : "View More"}
        </span>
      </div>

      <div className="flex gap-x-2 gap-y-2 flex-wrap mt-3">
        {data?.tags?.map((tag) => {
          return (
            <div key={tag.id}>
              <Button className="bg-gray-100 border-transparent hover:bg-gray-200 text-xs py-1.5 px-3">
                {tag.tagName}
              </Button>
            </div>
          );
        })}
        <div className="flex gap-x-2 items-center">
          <Button className="bg-gray-100 border-transparent hover:bg-gray-200 text-xs py-1.5 px-3">
            {data.id}
          </Button>
          <span className="text-xs font-bold text-[#828589]">
            30 Jan 2023 – 05:50 PM
          </span>
        </div>
        <span className="text-xs text-[#828589]">
          This phone number has been used <strong>3</strong> times.
        </span>
        <div className="mt-8 text-center flex flex-col gap-y-2">
          <span className="text-sm font-bold ">
            You need to log in first to see the user information of this flag.
          </span>
          <Button className="bg-black  text-white w-full p-2.5 px-2 rounded-full mb-32" onClick={() => setLoginModal(true)}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default ListDetailsItem;
