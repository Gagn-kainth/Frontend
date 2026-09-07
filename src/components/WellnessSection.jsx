import "./WellnessSection.css";
import wellness from "../img/wellness.jpg"

function WellnessSection() {
  return (
    <section className="wellness-section">

      <div className="wellness-content">
        <span className="wellness-title">
          Wellness At Boundary Club
        </span>

        <h2>
          Balance Your Game. Balance Your Mind.
        </h2>

        <p>
          At Boundary Club, performance isn’t just about competition—it’s
          also about recovery, focus, and inner strength.
        </p>

        <p>
          Our Wellness Zone offers activities designed to recharge your body
          and mind, helping you stay at your best both on and off the pitch.
        </p>
      </div>

      <div className="wellness-image">
        <img
          src={wellness}
          alt="Boundary Club Wellness"
        />
      </div>

    </section>
  );
}

export default WellnessSection;