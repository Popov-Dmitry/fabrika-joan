import styles from "./index.module.css";
import Button from "@/components/elements/button/Button";
import Input from "@/components/elements/input/Input";
import Title from "@/components/elements/title";

const BeFirstToExperience = () => {
  return (
    <div className={styles.email}>
      <Title color="white">Be the First to Experience Joan</Title>
      <div className={styles.emailInputs}>
        <Input
          className={styles.emailInput}
          type="email"
          name="email"
          placeholder="Email"
        />
        <Button className={styles.joinWaitlistButton} text="Join waitlist" />
      </div>
    </div>
  );
};

export default BeFirstToExperience;
