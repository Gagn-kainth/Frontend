import { useEffect, useState } from "react";
import "../style/BookingGround.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import BookingGroundHero from "../components/BookingGroundHero";
import DateSelector from "../components/DateSelector";
import GroundCard from "../components/GroundCard";
import TimeSlotGrid from "../components/TimeSlotGrid";
import BookingSummary from "../components/BookingSummary";


function BookingGround() {
  const navigate = useNavigate();
  
  const [grounds, setGrounds] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  
  // Fetch grounds from MongoDB
  useEffect(() => {
    async function fetchGrounds() {
      try {
        const response = await axios.get(`${API_URL}/api/grounds`);

        setGrounds(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch grounds:",
          error.response?.data || error.message
        );
      }
    }

    fetchGrounds();
  }, []);

  const selectedGround = grounds.find((ground) => ground._id === selectedId);

  function handleSelectGround(id) {
    setSelectedId(id);
    setSelectedSlots([]);
  }

  function handleToggleSlot(slot) {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  }

  function handleContinue() {
    if (!selectedGround || !selectedDate || selectedSlots.length === 0) {
      return;
    }

    navigate("/BookingGround/details", {
      state: {
        groundId: selectedGround._id,
        date: selectedDate,
        selectedSlots,
      },
    });
  }

  return (
    <>
      <BookingGroundHero currentStep={0} />

      <DateSelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <div className="bc-booking-layout">
        {/* LEFT SIDE */}
        <div className="bc-booking-main">
          <div className="bc-ground-list">
            {grounds.map((ground) => (
              <GroundCard
                key={ground._id}
                ground={ground}
                isSelected={selectedId === ground._id}
                onSelect={handleSelectGround}
              />
            ))}
          </div>

          <TimeSlotGrid
            ground={selectedGround}
            selectedDate={selectedDate}
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
            onContinue={handleContinue}
          />
        </aside>
      </div>
    </>
  );
}

export default BookingGround;
