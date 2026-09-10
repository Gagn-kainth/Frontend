import { useState } from "react";
import BookingGroundHero from "../components/BookingGroundHero";
import DateSelector from "../components/DateSelector";
import GroundCard, { GROUNDS } from "../components/GroundCard";
import TimeSlotGrid from "../components/TimeSlotGrid";

function BookingGround() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);

  const selectedGround = GROUNDS.find((g) => g.id === selectedId);

  function handleSelectGround(id) {
    setSelectedId(id);
    setSelectedSlots([]); // reset slots when switching grounds
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
      <DateSelector />
      <div
        className="bc-ground-list"
        style={{ backgroundImage: `linear-gradient( #000000)` }}
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
    </>
  );
}

export default BookingGround;