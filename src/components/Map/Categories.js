import React, { use, useState } from "react";
import Button from "../UI/Button";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  const selectedCategoryHandler = (id) => {
    if (selectedCategory.includes(id)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== id));
    } else {
      setSelectedCategory([...selectedCategory, id]);
    }
  };

  return (
    <div className="flex gap-x-2 gap-y-3 flex-wrap">
      {categories.map((category) => (
        <Button
        className={` ${selectedCategory.includes(category.id) ? "bg-black text-white" : ""} px-4 py-2 text-xs  md:hover:bg-[#1C4BA9] md:hover:text-white`}

          onClick={() => selectedCategoryHandler(category.id)}

          >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
