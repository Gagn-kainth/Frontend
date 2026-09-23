import { useEffect, useState } from "react";
import axios from "axios";
import "../style/TimeSlotGrid.css";

const TIME_SLOTS = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

function LegendDot({ color, label }) {
  return (
    <div className="bc-legend-item">
      <span className={`bc-legend-dot ${color}`} />
      <span className="bc-legend-label">{label}</span>
    </div>
  );
}

function TimeSlotGrid({
  ground,
  selectedDate,
  selectedSlots,
  onToggleSlot,
}) {
  const [bookedSlots, setBookedSlots] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    async function fetchAvailability() {
      if (!ground?._id || !selectedDate) {
        setBookedSlots([]);
        return;
      }

      try {
        const date = new Date(selectedDate);

        const dateParam = `${date.getFullYear()}-${String(
          date.getMonth() + 1
        ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

        const response = await axios.get(
          `${API_URL}/api/grounds/${ground._id}/availability?date=${dateParam}`
        );

        setBookedSlots(response.data.bookedSlots || []);
      } catch (error) {
        console.error(
          "Failed to fetch slot availability:",
          error.response?.data || error.message
        );

        setBookedSlots([]);
      }
    }

    fetchAvailability();
  }, [ground?._id, selectedDate]);

  if (!ground) return null;

  if (!selectedDate) {
    return (
      <div className="bc-slots-wrap">
        <div className="bc-slots-title">
          SELECT TIME SLOTS — {ground.name.toUpperCase()}
        </div>

        <div className="bc-slots-subtitle">
          Please select a date first
        </div>
      </div>
    );
  }

  return (
    <div className="bc-slots-wrap">
      <div className="bc-slots-title">
        SELECT TIME SLOTS — {ground.name.toUpperCase()}
      </div>

      <div className="bc-slots-subtitle">
        Select one or more hours
      </div>

      <div className="bc-slots-grid">
        {TIME_SLOTS.map((slot) => {
          const isBooked = bookedSlots.includes(slot);
          const isSelected = selectedSlots.includes(slot);

          const cls = isBooked
            ? "booked"
            : isSelected
            ? "selected"
            : "";

          return (
            <button
              key={slot}
              disabled={isBooked}
              onClick={() => onToggleSlot(slot)}
              className={`bc-slot-btn${cls ? " " + cls : ""}`}
            >
              {slot}
            </button>
          );
        })}
      </div>

      <div className="bc-legend-row">
        <LegendDot color="available" label="Available" />
        <LegendDot color="selected" label="Selected" />
        <LegendDot color="booked" label="Booked" />
      </div>
    </div>
  );
}

export default TimeSlotGrid;