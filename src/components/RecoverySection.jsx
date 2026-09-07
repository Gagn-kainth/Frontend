import "./RecoverySection.css";
import recovery from '../img/recovery.jpg'
function RecoverySection() {
  return (
    <section className="recovery-section">

      <div className="recovery-image">
        <img
          src={recovery}
          alt="Boundary Club Recovery Zone"
        />
      </div>

      <div className="recovery-content">
        <span className="recovery-title">
          Recovery At Boundary Club
        </span>

        <h2>
          Fuel Your Comeback. Restore Your Strength.
        </h2>

        <p>
          At Boundary Club, true performance goes beyond training—it’s about
          how well you recover. Our Recovery Zone is designed to help you
          heal, rebuild, and return stronger.
        </p>

        <p>
          From muscle recovery to mental recharge, we provide the tools and
          support you need to stay resilient and game-ready.
        </p>
      </div>

    </section>
  );
}

export default RecoverySection;