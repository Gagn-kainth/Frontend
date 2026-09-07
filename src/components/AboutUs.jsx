import "./AboutUs.css";
import cricketground from '../img/cricket-ground.jpg'

function AboutUs() {
  return (
    <section className="about-us">

      <h1>ABOUT US</h1>

      <div className="about-content">

        <div className="about-text">
          <h2>Our Story</h2>

          <p>
            Cricket is more than just a sport — it's a passion that brings
            people together. At <strong>Boundary Club</strong>, we set out
            to create a place where that passion meets quality, energy,
            and a true love for the game.
          </p>

          <p>
            We've built a destination where every match feels special,
            whether you're here for a competitive game, a practice session,
            or simply to enjoy cricket with friends. From quality playing
            facilities to a welcoming atmosphere, Boundary Club is where
            players come to improve their skills, challenge themselves,
            connect with fellow cricket lovers, and create unforgettable
            memories.
          </p>
        </div>

        <div className="about-image">
          <img src={cricketground}alt="Boundary Club Cricket Ground" />
        </div>

      </div>

    </section>
  );
}

export default AboutUs;