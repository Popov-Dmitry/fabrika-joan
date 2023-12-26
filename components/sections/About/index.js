import Image from "next/image";
import styles from "./index.module.css";
import Button from "@/components/elements/button/Button";
import InfoCard from "@/components/elements/info-card/InfoCard";
import Title from "@/components/elements/title";

const About = (props) => {
  const { infoCards } = props;

  return (
    <div className={styles.about}>
      <div id="about" className={styles.aboutAnchor} />
      <Title>About Joan</Title>
      <div className={styles.infoCards}>
        {infoCards.map((card) => (
          <InfoCard
            key={card.title}
            src={card.src}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <Button
        className={styles.tryItYourselfButton}
        href="#joan"
        text="Try it yourself"
      />
      <Image
        className={styles.aboutLeftImage}
        src="/Layer_5.svg"
        alt=""
        width={549}
        height={500}
      />
      <Image
        className={styles.aboutRightImage}
        src="/Layer_1.svg"
        alt=""
        width={549}
        height={414}
      />
    </div>
  );
};

export default About;
