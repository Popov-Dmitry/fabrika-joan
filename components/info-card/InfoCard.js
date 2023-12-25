import React from "react";
import Image from "next/image";
import styles from "./info-card.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const InfoCard = ({ src, title, description, className }) => {
  return (
    <div className={joinClassNames(styles.infoCard, className)}>
      <div className={styles.iconWrapper}>
        <Image src={src} alt={title} width={31} height={31} />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;