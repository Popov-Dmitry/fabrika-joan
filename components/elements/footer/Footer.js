import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.title} href="#hero">
        Fabrika
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} href="example.com">
          Terms of Service
        </Link>
        <Link className={styles.link} href="example.com">
          {" "}
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
