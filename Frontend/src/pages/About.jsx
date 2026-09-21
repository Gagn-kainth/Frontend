import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import About_Hero from "../components/About_Hero";
import AboutCardsHor from "../components/AboutCardsHor";
import Vision from "../components/Vision";
import ScrollReveal from "../components/ScrollReveal";

function About() {
  const sections = [
    AboutUs,
    About_Hero,
    AboutCardsHor,
    Vision,
  ];

  return (
    <>
      <main>
        {sections.map((Section, index) => (
          <ScrollReveal key={index}>
            <Section />
          </ScrollReveal>
        ))}
      </main>

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}

export default About;