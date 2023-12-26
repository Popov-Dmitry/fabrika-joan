import React from "react";
import Image from "next/image";
import styles from "./person-card.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const PersonCard = ({ src, name, title, className }) => {
  return (
    <div className={joinClassNames(styles.card, className)}>
      <Image
        className={styles.avatar}
        src={src}
        alt={name}
        width={96}
        height={96}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default PersonCard;
