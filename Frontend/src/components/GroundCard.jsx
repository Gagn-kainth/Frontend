import "../style/GroundCard.css";

import ground1 from "../img/booking1.jpg";
import ground2 from "../img/booking2.jpg";
import ground3 from "../img/booking3.jpg";
import ground4 from "../img/booking4.jpg";

const GROUND_IMAGES = {
  "Boundary Ground 1": ground1,
  "Boundary Ground 2": ground2,
  "Indoor Net Arena": ground3,
  "Practice Ground": ground4,
};

function GroundCard({ ground, isSelected, onSelect }) {
  const image = GROUND_IMAGES[ground.name];

  return (
    <div
      className={`bc-ground-card${isSelected ? " selected" : ""}`}
      onClick={() => onSelect(ground._id)}
    >
      <div
        className="bc-ground-card-bg"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.15)), url(${image})`,
        }}
      >
        <div className="bc-badge-row">
          <span className="bc-badge available">Available</span>

          {isSelected && (
            <span className="bc-badge selected">✓ Selected</span>
          )}
        </div>

        <div className="bc-ground-footer">
          <div>
            <h3 className="bc-ground-name">{ground.name}</h3>

            <p className="bc-ground-location">
              📍 {ground.location}
            </p>

            <div className="bc-tag-row">
              {ground.tags.map((tag) => (
                <span key={tag} className="bc-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bc-price-block">
            <div className="bc-price-label">PER HOUR</div>

            <div className="bc-price-value">
              ₹{ground.pricePerHour.toLocaleString("en-IN")}
            </div>

            <button
              className={`bc-select-btn${isSelected ? " selected" : ""}`}
            >
              {isSelected ? "✓ Selected" : "Select"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroundCard;