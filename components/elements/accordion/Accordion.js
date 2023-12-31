"use client";

import React, { useState } from "react";
import IconButton from "@/components/elements/icon-button/IconButton";
import styles from "./accordion.module.css";

const Accordion = ({ title, description, className }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={className || ""}>
      <div className={styles.accordionContent}>
        <div className={styles.accordionHeader}>
          <div className={styles.accordionTitle}>{title}</div>
          <IconButton
            src={opened ? "/minus-circle.svg" : "/plus-circle.svg"}
            onClick={() => setOpened((prevState) => !prevState)}
          />
        </div>
        {opened && (
          <div className={styles.accordionDescription}>{description}</div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Accordion;
