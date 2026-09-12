import '../style/GroundCard.css';
import ground1 from "../img/booking1.jpg";
import ground2 from "../img/booking2.jpg";
import ground3 from "../img/booking3.jpg";
import ground4 from "../img/booking4.jpg";
export const GROUNDS = [
    {
      id: "ground-1",
      name: "Boundary Ground 1",
      location: "Main Oval, North Wing",
      pricePerHour: 1500,
      tags: ["Floodlights", "Pavilion", "Scoreboards"],
      image:ground1,
      bookedSlots: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
    },
    {
      id: "ground-2",
      name: "Boundary Ground 2",
      location: "North End, East Side",
      pricePerHour: 1000,
      tags: ["Pavilion", "Scoreboards"],
      image:ground2,
      bookedSlots: ["6:00 AM", "7:00 AM", "6:00 PM"],
    },
    {
      id: "indoor-net-arena",
      name: "In-door Net Arena",
      location: "West Block, Level 1",
      pricePerHour: 800,
      tags: ["6 Lanes", "Bowling Machine", "Video Analysis"],
      image:ground3,

      bookedSlots: ["8:00 AM", "9:00 AM"],
    },
    {
      id: "practice-ground",
      name: "Practice Ground",
      location: "East Wing, Ground Level",
      pricePerHour: 600,
      tags: ["Practice Nets", "Coaching Bay"],
      image:ground4,

      bookedSlots: [],
    },
  ];


  function GroundCard({ ground, isSelected, onSelect }) {
    return (
      <div
        className={`bc-ground-card${isSelected ? " selected" : ""}`}
        onClick={() => onSelect(ground.id)}
      >
        <div
          className="bc-ground-card-bg"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.15)), url(${ground.image})`,
          }}
        >
          <div className="bc-badge-row">
            <span className="bc-badge available">Available</span>
            {isSelected && <span className="bc-badge selected">✓ Selected</span>}
          </div>
  
          <div className="bc-ground-footer">
            <div>
              <h3 className="bc-ground-name">{ground.name}</h3>
              <p className="bc-ground-location">📍 {ground.location}</p>
              <div className="bc-tag-row">
                {ground.tags.map((tag) => (
                  <span key={tag} className="bc-tag">{tag}</span>
                ))}
              </div>
            </div>
  
            <div className="bc-price-block">
              <div className="bc-price-label">PER HOUR</div>
              <div className="bc-price-value">
                ₹{ground.pricePerHour.toLocaleString("en-IN")}
              </div>
              <button className={`bc-select-btn${isSelected ? " selected" : ""}`}>
                {isSelected ? "✓ Selected" : "Select"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default GroundCard ;