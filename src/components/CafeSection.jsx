import "../style/CafeSection.css";
import cafe from "../img/cafe.jpg";

function CafeSection() {
  return (
    <section className="cafe-section">
      <div className="cafe-image">
        <img src={cafe} alt="Boundary Club Cafe" />
      </div>

      <div className="cafe-content">
        <h2 className="cafe-title">Boundary Club</h2>

        <h3>Refuel Between Innings.</h3>

        <p>
          At Boundary Club, the game doesn’t stop when you leave the pitch.
          Our café is the perfect place to relax, recharge, and refuel after
          an intense game of cricket. From fresh pizzas and quick bites to
          refreshing drinks, we’ve got everything you need to recover, unwind,
          and get ready for your next innings.
        </p>
      </div>
    </section>
  );
}

export default CafeSection;