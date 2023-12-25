import React from "react";
import styles from "./button.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const Button = ({ text, onClick, className }) => {
  return (
    <input type="button" className={joinClassNames(styles.button, className)} value={text} onClick={onClick} />
  );
};

export default Button;