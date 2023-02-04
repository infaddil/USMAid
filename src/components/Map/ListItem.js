import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import flag from "../../assets/images/whiteflag.png";
import Button from "../UI/Button";

const ListItem = ({ data,setDetails }) => {
  return (
    <div
      className="flex flex-col gap-y-2 hover:bg-[#F1F2F4] cursor-pointer px-7 py-4"
      onClick={() => setDetails(true)}
    >
      <div className="flex gap-x-1 justify-between items-center font-extrabold text-xs text-[#D55161]">
        <div className="flex items-center">
          <h1 className="text-sm">Need help</h1>
          <div>
            <Image src={flag} width={20} height={20} />
          </div>
        </div>
        <span>{data.distance}Km</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">{data.name}</span>
        <span className="text-sm text-gray-500">
          {data.text.substring(0, 132)}...
        </span>
      </div>
      <div className="flex  gap-x-2 gap-y-2 flex-wrap">
        {data.tags.map((tag) => {
          return (
            <div key={tag.id}>
              <Button className="bg-gray-100 border-transparent hover:bg-gray-200 text-xs py-1.5 px-3">
                {tag.tagName}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItem;
