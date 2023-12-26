import React from "react";
import styles from "./input.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const Input = ({ type, name, placeholder, className }) => {
  return (
    <input
      className={joinClassNames(styles.input, className)}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;