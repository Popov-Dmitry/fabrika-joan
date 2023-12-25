import Image from 'next/image'
import styles from './page.module.css'
import PersonCard from "@/components/person-card/PersonCard";
import Button from "@/components/button/Button";
import InfoCard from "@/components/info-card/InfoCard";
import Input from "@/components/input/Input";
import Accordion from "@/components/accordion/Accordion";

const infoCards = [
  {
    src: "/bank-note.svg",
    title: "Cost efficiency",
    description: "Fabrika redefines market research by providing cost-effective solutions."
  },
  {
    src: "/line-chart-up.svg",
    title: "Scalability",
    description: "From small teams to large enterprises, Fabrika adapts to your scale effortlessly."
  },
  {
    src: "/lightbulb.svg",
    title: "Comprehensive insights",
    description: "Unlock the power of comprehensive insights through advanced analytics."
  },
];

const teamCards = [
  {
    src: "/Cat1.png",
    name: "Jeff Bezos",
    description: "Fabrika redefines market research by providing cost-effective solutions, eliminating the need for expensive research agencies."
  },
  {
    src: "/Cat2.png",
    name: "Tigran Tumasov",
    description: "Fabrika redefines market research by providing cost-effective solutions, eliminating the need for expensive research agencies."
  },
  {
    src: "/Cat3.png",
    name: "Ozzy Osbourne",
    description: "Fabrika redefines market research by providing cost-effective solutions, eliminating the need for expensive research agencies."
  },
];

const qna = [
  {
    title: "How is Fabrika different from traditional market research methods?",
    description: "Unlike traditional methods that often involve high costs and complex processes, Fabrika offers a cost-effective alternative. It eliminates the need for extensive budgets while providing sophisticated analytics."
  },
  {
    title: "Who is Fabrika designed for?",
    description: ""
  },
  {
    title: "Is Fabrika suitable for smaller teams?",
    description: ""
  },
  {
    title: "What is Fabrika's commitment to user privacy?",
    description: ""
  },
  {
    title: "How can I stay updated on Fabrika's latest developments?",
    description: ""
  },
];

export default function Home() {
  return (
    <div>
      <div className={styles.ask}>
        <div className={styles.askLeftSide}>
          <div className={styles.askTitle}>Ask Joan about your competitors</div>
          <div className={styles.askDescription}>The AI-Powered Assistant for Smart Insights.</div>
        </div>
        <div className={styles.askRightSide}>
          <Image src="/Layer_6.svg" alt="" width={380} height={362} />
          <Button className={styles.talkToJoanButton} text="Talk to Joan" />
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.aboutTitle}>About Joan</div>
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
        <Button className={styles.tryItYourselfButton} text="Try it yourself" />
        <Image className={styles.aboutLeftImage} src="/Layer_5.svg" alt="" width={549} height={500} />
        <Image className={styles.aboutRightImage} src="/Layer_1.svg" alt="" width={549} height={414} />
      </div>
      <div className={styles.team}>
        <div>
          <div className={styles.teamTitle}>Team</div>
          <div className={styles.teamCards}>
            {teamCards.map((card) => (
              <PersonCard
                key={card.name}
                className={styles.teamCard}
                src={card.src}
                name={card.name}
                description={card.description}
              />
            ))}
            <Image className={styles.teamLeftImage} src="/Layer_6.svg" alt="" width={380} height={362} />
            <Image className={styles.teamRightImage} src="/Layer_5_1.svg" alt="" width={380} height={362} />
          </div>
        </div>
        <Button className={styles.getInTouchButton} text="Get in touch" />
      </div>
      <div className={styles.email}>
        <div className={styles.emailTitle}>Be the First to Experience Fabrika</div>
        <div className={styles.emailInputs}>
          <Input className={styles.emailInput} type="email" name="email" placeholder="Email" />
          <Button className={styles.joinWaitlistButton} text="Join waitlist" />
        </div>
      </div>
      <div className={styles.questions}>
        <div className={styles.questionsTitle}>Frequently Asked Questions</div>
        <div className={styles.accordions}>
          {qna.map((item) => (
            <Accordion key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
        <Image className={styles.questionsLeftImage} src="/Layer_1_1.svg" alt="" width={588} height={430} />
        <Image className={styles.questionsRightImage} src="/Layer_5_2.svg" alt="" width={580} height={580} />
      </div>
    </div>
  )
}
