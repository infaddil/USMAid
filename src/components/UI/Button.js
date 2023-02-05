import React from "react";
import styles from "../../styles/Button.module.css";

const Button = ({ children, className, name, onClick }) => {
  return (
    <button
      className={`dark:bg-[#292929] dark:hover:bg-[#292929] dark:text-white flex items-center border justify-center rounded-full font-bold border-transparent  transition-all ${
        name == "campaign" ? styles.campaignBtn : styles.button
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
