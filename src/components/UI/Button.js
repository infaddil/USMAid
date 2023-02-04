import React from "react";
import styles from "../../styles/Button.module.css";

const Button = ({ children, className, name, onClick }) => {
  return (
    <button
      className={`flex items-center border justify-center rounded-full font-bold  transition-all ${
        name == "campaign" ? styles.campaignBtn : styles.button
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
