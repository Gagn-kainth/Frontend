import { useState } from "react";
import "./BookingGround.css";
import BookingGroundHero from "../components/BookingGroundHero";
import DateSelector from "../components/DateSelector";
import GroundCard, { GROUNDS } from "../components/GroundCard";
import TimeSlotGrid from "../components/TimeSlotGrid";
import BookingSummary from "../components/BookingSummary";

function BookingGround() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const selectedGround = GROUNDS.find((g) => g.id === selectedId);

  function handleSelectGround(id) {
    setSelectedId(id);
    setSelectedSlots([]);
  }

  function handleToggleSlot(slot) {
    setSelectedSlots((prev) =>
      prev.includes(slot)
        ? prev.filter((s) => s !== slot)
        : [...prev, slot]
    );
  }

  return (
    <>
      <BookingGroundHero />
  
      <DateSelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
  
      <div className="bc-booking-layout">
  
        {/* LEFT SIDE */}
        <div className="bc-booking-main">
  
          <div
            className="bc-ground-list"
            
          >
            {GROUNDS.map((ground) => (
              <GroundCard
                key={ground.id}
                ground={ground}
                isSelected={selectedId === ground.id}
                onSelect={handleSelectGround}
              />
            ))}
          </div>
  
          <TimeSlotGrid
            ground={selectedGround}
            selectedSlots={selectedSlots}
            onToggleSlot={handleToggleSlot}
          />
  
        </div>
  
        {/* RIGHT SIDE */}
        <aside className="bc-booking-sidebar">
  
          <BookingSummary
            ground={selectedGround}
            date={selectedDate}
            selectedSlots={selectedSlots}
          />
  
        </aside>
  
      </div>
    </>
  );
}

export default BookingGround;