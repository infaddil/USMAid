import React from "react";

const Button = ({children,className, onClick}) => {
  return (
    <button className={`flex w-fit items-center border justify-center rounded-full font-bold border-transparent  ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
