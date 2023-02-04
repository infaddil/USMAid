import React, { use, useState } from "react";
import Button from "../UI/Button";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  const selectedCategoryHandler = (catId) => {
    setSelectedCategory((prev) => ({ ...prev, catId: !selectedCategory }));
  };

  return (
    <div className="flex gap-x-2 gap-y-3 flex-wrap">
      {categories.map((category) => (
        <Button
          className={`${
            selectedCategory.c1 && "bg-black"
          } px-4 py-2 text-xs hover:bg-[#1C4BA9] hover:text-white `}
          onClick={() => selectedCategoryHandler(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
