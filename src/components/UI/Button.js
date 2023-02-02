import React from "react";

const Button = ({children,className}) => {
  return (
    <button className={`${className} flex w-fit items-center border rounded-full px-4 py-1 font-bold border-transparent bg-gray-100`}>
      {children}
    </button>
  );
};

export default Button;
