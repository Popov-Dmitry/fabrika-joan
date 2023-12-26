import Image from "next/image";
import styles from "./index.module.css";
import PersonCard from "@/components/elements/person-card/PersonCard";
import Button from "@/components/elements/button/Button";
import Title from "@/components/elements/title";

const Team = (props) => {
  const { team } = props;
  return (
    <div className={styles.team}>
      <div id="team" className={styles.teamAnchor} />
      <Title>Team</Title>
      <div className={styles.teamCards}>
        {team.map((card) => (
          <PersonCard
            key={card.name}
            className={styles.teamCard}
            src={card.src}
            name={card.name}
            title={card.title}
          />
        ))}
        <Image
          className={styles.teamLeftImage}
          src="/Layer_6.svg"
          alt=""
          width={380}
          height={362}
        />
        <Image
          className={styles.teamCenterImage}
          src="/Layer_1.svg"
          alt=""
          width={380}
          height={362}
        />
        <Image
          className={styles.teamRightImage}
          src="/Layer_5_1.svg"
          alt=""
          width={380}
          height={362}
        />
      </div>
      <Button
        className={styles.getInTouchButton}
        text="Get in touch"
        href="example.com"
      />
    </div>
  );
};

export default Team;
