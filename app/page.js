import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import BeFirstToExperience from "@/components/sections/BeFirstToExperience";
import Joan from "@/components/sections/Joan";

const infoCards = [
  {
    src: "/bank-note.svg",
    title: "Identify Competitors",
    description: "Describe your product; Joan shows your competition."
  },
  {
    src: "/line-chart-up.svg",
    title: "Understand Rivals",
    description: "Get a snapshot of your competitors’ strengths and weaknesses."
  },
  {
    src: "/lightbulb.svg",
    title: "Strategize Smartly",
    description: "Leverage Joan’s insights for your market strategy."
  }
];

const teamCards = [
  {
    src: "/artemii.jpg",
    name: "Artemii Novoselov, CEO",
    title: "AI Research @ Stanford"
  },
  {
    src: "/james.jpg",
    name: "James Liao, COO",
    title: "Some title"
  },
  {
    src: "/vladimir.jpg",
    name: "Vladimir Cernavskis, Adviser",
    title: "Senior Partner @ McKinsey"
  },
  {
    src: "/tigran.jpg",
    name: "Tigran Tumasov, UI Lead",
    title: "Something cool"
  }
];

const qna = [
  {
    title: "How is Joan different from traditional market research methods?",
    description:
      "Unlike traditional methods that often involve high costs and complex processes, Joan offers a cost-effective alternative. It eliminates the need for extensive budgets while providing sophisticated analytics."
  },
  {
    title: "Who is Joan designed for?",
    description:
      "Joan is tailored for tech-savvy, efficiency-seeking, and data-driven professionals who value smart solutions. Decision-makers and influencers in various fields will find Fabrika beneficial for gaining reliable, scalable, and user-friendly market insights."
  },
  {
    title: "Is Joan suitable for smaller teams?",
    description:
      "Absolutely! Joan is specifically designed to empower smaller teams by offering the same level of sophisticated analytics that were once reserved for larger enterprises. It's user-friendly and eliminates the complexity associated with traditional market research."
  },
  {
    title: "What is Joan's commitment to user privacy?",
    description:
      "We take user privacy seriously. Joan adheres to strict privacy policies and ensures that user data is handled with the utmost care and security. You can review our Privacy Policy for more details."
  }
];

export const metadata = {
  metadataBase: new URL("https://tryfabrika.com"),
  openGraph: {
    title: "Ask Joan about your competitors",
    description: "The AI-Powered Assistant for Smart Insights.",
    url: "https://tryfabrika.com",
    images: [
      {
        url: "https://tryfabrika.com/opengraph-image.png",
        width: 1200,
        height: 630
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <About infoCards={infoCards} />
      <Joan />
      <Team team={teamCards} />
      <BeFirstToExperience />
      <FAQ list={qna} />
    </>
  );
}
