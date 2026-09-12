import FeatureSection from "../pagelayouts/FeatureSection";
import vision from "../img/vision.jpg";
import community from "../img/community.jpg";

function Vision() {
  return (
    <>
    <FeatureSection
  image={vision}
  imageAlt="Cricket players"
  label='Bounday .Club'
  title="Our Vision"
  paragraphs={[
    "To redefine padel by building a culture of competitive, world-class play, supported by premium facilities and a community that thrives on passion and performance.",
  ]}
  imagePosition="left"
/>
    <FeatureSection
  image={community}
  imageAlt="Cricket players"
  
  title="Our Join The Boundary Club Community"
  paragraphs={[
    "Whether you're here to book your next match, recharge at our café, or restore balance with yoga and sound therapy, Boundary Club is more than just a cricket ground — it's a movement for modern players who live for the game.",
  ]}
  imagePosition="right"
/>

</>
  )
}

export default Vision
