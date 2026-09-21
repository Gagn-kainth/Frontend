import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CafeSection from "../components/CafeSection";
import WellnessSection from "../components/WellnessSection";
import RecoverySection from "../components/RecoverySection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

function Home() {
  const sections = [
    AboutSection,
    CafeSection,
    WellnessSection,
    RecoverySection,
    GallerySection,
  ];

  return (
    <>
      <main>
        <HeroSection />

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

export default Home;