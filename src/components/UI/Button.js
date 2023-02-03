import React from "react";

const Button = ({children,className, onClick}) => {
  return (
    <button className={`flex w-fit items-center border rounded-full px-4 py-1 font-bold border-transparent  ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
