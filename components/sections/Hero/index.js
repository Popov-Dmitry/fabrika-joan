import Image from "next/image";
import styles from "./index.module.css";
import Button from "@/components/elements/button/Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div id="hero" className={styles.heroAnchor} />
      <div className={styles.heroLeftSide}>
        <div className={styles.heroTitle}>Ask Joan about your competitors</div>
        <div className={styles.heroDescription}>
          The AI-Powered Assistant for Smart Insights.
        </div>
      </div>
      <div className={styles.heroRightSide}>
        <Image src="/Layer_6.svg" alt="" width={380} height={362} />
        <Button
          className={styles.talkToJoanButton}
          text="Talk to Joan"
          href="#joan"
        />
      </div>
    </div>
  );
};

export default Hero;
