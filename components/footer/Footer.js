import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.title} href="/">Fabrika</Link>
      <div className={styles.links}>
        <Link className={styles.link} href="/">Terms of Service</Link>
        <Link className={styles.link} href="/"> Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;