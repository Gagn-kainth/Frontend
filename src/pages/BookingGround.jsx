import { useState } from "react";
import BookingGroundHero from "../components/BookingGroundHero";
import DateSelector from "../components/DateSelector";
import GroundCard, { GROUNDS } from "../components/GroundCard";

function BookingGround() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <BookingGroundHero />
      <DateSelector />
      <div className="bc-ground-list"  style={{
            backgroundImage: `linear-gradient(to top, #000000`}}>
        {GROUNDS.map((ground) => (
          <GroundCard
            key={ground.id}
            ground={ground}
            isSelected={selectedId === ground.id}
            onSelect={setSelectedId}
          />
        ))}
      </div>
    </>
  );
}

export default BookingGround;