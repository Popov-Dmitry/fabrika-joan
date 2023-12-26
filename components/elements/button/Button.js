import React from "react";
import styles from "./button.module.css";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";

const Button = ({ text, onClick, className, href }) => {
  if (href) {
    return (
      <Link className={joinClassNames(styles.button, className)} href={href}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={joinClassNames(styles.button, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
