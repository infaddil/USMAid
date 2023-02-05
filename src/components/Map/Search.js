import BottomArrowIcon from "@/assets/icons/BottomArrowIcon";
import React, { useState } from "react";
import Button from "../UI/Button";
import Categories from "./Categories";

const CATEGORIES = [
  { id: "c1", name: "🏠 Household Goods" },
  { id: "c2", name: "🍎 Groceries" },
  { id: "c3", name: "🐱 Pets" },
  { id: "c4", name: "📦 Others" },
  { id: "c5", name: "👕 Clothing" },
  { id: "c6", name: "📚 PdPR" },
  { id: "c7", name: "👶 Baby Care" },
  { id: "c8", name: "😷 Hygiene care" },
  { id: "c9", name: "😷 Hygiene care" },
  { id: "c10", name: "💊 Medicines" },
  { id: "c11", name: "💡 Utilities" },
];

const Search = ({ setIsSearch }) => {
  const [activeBtn, setActiveBtn] = useState({
    btn1: false,
    btn2: true,
    btn3: false,
    btn4: false,
  });
  const [selectedCategory, setSelectedCategory] = useState([]);
  return (
    <div className="px-7 flex flex-col gap-y-6">
      <div className="flex items-center gap-x-4">
        <Button
          className="bg-white text-xl justify-center  text-white h-12 w-12 shadow-lg"
          onClick={() => setIsSearch(false)}
        >
          <BottomArrowIcon className="text-white flex justify-center items-center w-7 h-7 p-1 border rounded-full bg-black text-sm " />
        </Button>
        <span className="text-lg font-bold">Search</span>
      </div>
      <div className="flex flex-col  gap-y-2">
        <span className="text-base font-bold">Search radius (kilometers)</span>
        <div className="flex flex-wrap gap-y-2 gap-x-2">
          <Button
            className={`${
              activeBtn.btn1 ? "bg-black text-white" : "bg-[#DDDDDD] text-white"
            } py-1.5 px-3 text-sm hover:bg-black`}
            onClick={() => setActiveBtn({ btn1: true })}
          >
            5 km
          </Button>
          <Button
            className={`${
              activeBtn.btn2 ? "bg-black text-white" : "bg-[#DDDDDD] text-white"
            } py-1.5 px-3 text-sm hover:bg-black`}
            onClick={() => setActiveBtn({ btn2: true })}
          >
            10 km
          </Button>
          <Button
            className={`${
              activeBtn.btn3 ? "bg-black text-white" : "bg-[#DDDDDD] text-white"
            } py-1.5 px-3 text-sm hover:bg-black`}
            onClick={() => setActiveBtn({ btn3: true })}
          >
            15 km
          </Button>
          <Button
            className={`${
              activeBtn.btn4 ? "bg-black text-white" : "bg-[#DDDDDD] text-white"
            } py-1.5 px-3 text-sm hover:bg-black`}
            onClick={() => setActiveBtn({ btn4: true })}
          >
            100 km
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-2">
        <span className="font-bold text-base">Category</span>
        <Categories
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <Button
        className="bg-black  text-white p-2.5 px-2 rounded-full"
        onClick={() => setIsSearch(false)}
      >
        Find
      </Button>
      <Button
        className="bg-white text-black hover:bg-black hover:text-white p-2.5 px-2 rounded-full mb-32"
        onClick={() => setIsSearch(false)}
      >
        Reset
      </Button>
    </div>
  );
};

export default Search;
