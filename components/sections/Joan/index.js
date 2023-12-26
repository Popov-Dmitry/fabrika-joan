import Title from "@/components/elements/title";
import styles from "./index.module.css";

const Joan = () => {
  return (
    <div className={styles.joan}>
      <div id="joan" className={styles.joanAnchor} />
      <Title>Tell Joan what you are buidling</Title>
      <div className={styles.joanSubtitle}>
        Share what you’re creating, and Joan will analyze the competitive field
        to provide you with insights.
      </div>
      <div className={styles.demoImage} />
      <div className={styles.demo}>
        <iframe src="https://gradio-chatinterface-streaming-echo.hf.space" />
      </div>
    </div>
  );
};

export default Joan;
