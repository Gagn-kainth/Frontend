
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CafeSection from "../components/CafeSection";
import WellnessSection from "../components/WellnessSection";
import RecoverySection from "../components/RecoverySection";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      

      <main>
        <HeroSection />
        <AboutSection />
        <CafeSection />
        <WellnessSection />
        <RecoverySection />
        <GallerySection />
      </main>

      <Footer />
    </>
  );
}

export default Home;