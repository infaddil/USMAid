import React from "react";
import Button from "../UI/Button";
import flag from "../../assets/images/whiteflag.png";
import Image from "next/image";
import ListDetailsItem from "./ListDetailsItem";
import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";

const ListDetails = ({ data, setDetails,setLoginModal }) => {
  return (
    <div className="px-7">
      <div className="flex items-center gap-x-2">
        <Button
          className="bg-white text-xl justify-center  text-white h-12 w-12 shadow-lg"
          onClick={() => setDetails(false)}
        >
          <BottomArrowIcon className="text-white flex justify-center items-center w-7 h-7 p-1 border rounded-full bg-black text-sm " />
        </Button>
        <div className="flex items-center">
          <h1 className="text-lg font-bold">Need help</h1>
          <div>
            <Image src={flag} width={35} height={35} />
          </div>
        </div>
      </div>
      {data.map((dataItem) => (
        <ListDetailsItem data={dataItem} setLoginModal= {setLoginModal}/>
      ))}
    </div>
  );
};

export default ListDetails;
