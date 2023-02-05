import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";
import React, { useState } from "react";
import Button from "./Button";

const Input = ({setOpenDrawer}) => {
  const [dropdown, setDropdown]= useState(false);
  const [selectSearch, setSelectSearch] = useState({
    location: true,
    FindId: false,
    FindOut: false,
  })
  const [selectSearchValue, setSelectSearchValue] = useState('Find a Location')
  return (
    <div className="px-3 xl:px-7 py-1 md:py-6 ">
              <Button
          className="md:hidden bg-white text-xl justify-center  text-white h-12 w-12 shadow-lg mb-6"
          onClick={() => setOpenDrawer(false)}
        >
          <BottomArrowIcon className="text-white flex justify-center items-center w-7 h-7 p-1 border rounded-full bg-black text-sm " />
        </Button>
      <div className="relative">
        <div
          className="absolute top-2.5 left-3 flex  items-center gap-x-1 cursor-pointer"
          onClick={()=> setDropdown(true)}
        >
          <span className="border-none font-semibold text-sm">Location</span>
           <i className="fa-solid fa-circle-chevron-down" ></i>
    
        </div>
        {dropdown && <div>
          <div className="bg-[#E8E8E8] dark:bg-transparent  w-fit py-4 px-8 absolute top-10 border dark:border-[gray] rounded-[24px] flex flex-col gap-y-2 z-[222]">
            <div className="flex gap-x-2 justify-start items-center dark:bg-[#292929]  hover:bg-[#F1F2F4] py-1 px-4 text-sm  rounded-[0px] w-full cursor-pointer" onClick={()=> {setDropdown(false), setSelectSearch({location:true}), setSelectSearchValue("Find a Location")}}>
            <div className="w-6 h-6 flex justify-center items-center  border-[1px] border-[#d9ddd2] rounded-full">
               {selectSearch.location && <i class="fa-sharp fa-solid fa-circle-check text-2xl"></i>}

              </div>
            <span>Find a location</span>
            </div>
            <div className="flex gap-x-2 justify-start items-center dark:bg-[#292929] hover:bg-[#F1F2F4] py-1 px-4 text-sm  rounded-[0px] w-full cursor-pointer" onClick={()=> {setDropdown(false), setSelectSearch({FindId:true}), setSelectSearchValue("Find ID")}}>
              <div className="w-6 h-6 flex justify-center items-center  border-[1px] border-[#d9ddd2] rounded-full">
               {selectSearch.FindId && <i class="fa-sharp fa-solid fa-circle-check text-2xl"></i>}
              </div>
            <span>Find ID</span>
            </div>
            <div className="flex gap-x-2 justify-start items-center dark:bg-[#292929]  hover:bg-[#F1F2F4] py-1 px-4 text-sm  rounded-[0px] w-full cursor-pointer" onClick={()=> {setDropdown(false), setSelectSearch({FindOut:true}), setSelectSearchValue("Find Out")}}>
            <div className="w-6 h-6 flex justify-center items-center  border-[1px] border-[#d9ddd2] rounded-full">
               {selectSearch.FindOut && <i class="fa-sharp fa-solid fa-circle-check text-2xl"></i>}
              </div>
            <span>Find out</span>
            </div>
          
          </div>
        </div>
}
        <input
          type="text"
          placeholder={selectSearchValue}
          className="border border-gray-200 px-2 py-2 rounded-full text-sm pl-[5.8rem] w-full outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
