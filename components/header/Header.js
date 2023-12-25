import React from "react";
import styles from './header.module.css'
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.title} href="/">Fabrika</Link>
      <div className={styles.links}>
        <Link className={styles.link} href="/">About</Link>
        <Link className={styles.link} href="/">Key Features</Link>
        <Link className={styles.link} href="/">Reviews</Link>
        <Link className={styles.link} href="/">FAQ</Link>
      </div>
    </header>
  );
};

export default Header;