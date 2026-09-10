import "../style/AboutSection.css";
import vrImage from "../img/vr.jpg";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-content">
        <h1>
          <span className="about-BC">Boundary  .Club </span>  
          <br />
          Where Every Over Finds Its Ground
        </h1>

        <p>
          At Boundary Club, we’ve redefined the cricket experience with quality
          grounds, professional facilities, and a thriving community of
          passionate players. Whether you’re stepping onto the pitch for a
          competitive match, sharpening your skills in the nets, or simply
          enjoying the game with friends, Boundary Club is your destination for
          an exciting and unforgettable cricket experience.
        </p>
      </div>

      <div className="about-image">
        <img src={vrImage} alt="Cricket at Boundary Club" />
      </div>

    </section>
  );
}

export default AboutSection;