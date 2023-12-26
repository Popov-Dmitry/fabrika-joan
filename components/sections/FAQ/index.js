import Image from "next/image";
import styles from "./index.module.css";
import Accordion from "@/components/elements/accordion/Accordion";
import Title from "@/components/elements/title";

const FAQ = (props) => {
  const { list } = props;
  return (
    <div className={styles.questions}>
      <div id="faq" className={styles.questionsAnchor} />
      <Title>Frequently Asked Questions</Title>
      <div className={styles.accordions}>
        {list.map((item) => (
          <Accordion
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <Image
        className={styles.questionsLeftImage}
        src="/Layer_1_1.svg"
        alt=""
        width={588}
        height={430}
      />
      <Image
        className={styles.questionsRightImage}
        src="/Layer_5_2.svg"
        alt=""
        width={580}
        height={580}
      />
    </div>
  );
};

export default FAQ;
