import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "../style/BookingDetails.css";
import BookingGroundHero from "../components/BookingGroundHero";
import BookingSummary from "../components/BookingSummary";

function BookingDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { groundId, date, selectedSlots } = location.state || {};

  const [ground, setGround] = useState(null);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    players: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Fetch selected ground from MongoDB
  useEffect(() => {
    async function fetchGround() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/grounds/${groundId}`
        );

        setGround(response.data);
      } catch (error) {
        console.error(
          "Failed to fetch ground:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    }

    if (groundId) {
      fetchGround();
    } else {
      setLoading(false);
    }
  }, [groundId]);

  // Invalid booking state
  if (!groundId || !selectedSlots?.length) {
    navigate("/BookingGround", { replace: true });
    return null;
  }

  if (loading) {
    return <div>Loading ground...</div>;
  }

  if (!ground) {
    return <div>Ground not found.</div>;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  }

  function validate() {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!form.players.trim()) {
      newErrors.players = "Number of players is required";
    } else if (Number(form.players) <= 0) {
      newErrors.players = "Must be at least 1 player";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleProceed() {
    if (!validate()) return;

    navigate("/BookingGround/payment", {
      state: {
        groundId,
        date,
        selectedSlots,
        form,
      },
    });
  }

  return (
    <>
      <BookingGroundHero currentStep={1} />

      <div className="bc-details-layout">
        <div className="bc-details-main">
          <h2 className="bc-details-title">Your Information</h2>

          <label className="bc-field-label">FULL NAME *</label>

          <input
            className={`bc-field-input${errors.fullName ? " error" : ""}`}
            name="fullName"
            placeholder="Rohit Sharma"
            value={form.fullName}
            onChange={handleChange}
          />

          {errors.fullName && (
            <span className="bc-field-error">
              {errors.fullName}
            </span>
          )}

          <div className="bc-field-row">
            <div>
              <label className="bc-field-label">
                EMAIL ADDRESS *
              </label>

              <input
                className={`bc-field-input${errors.email ? " error" : ""}`}
                name="email"
                placeholder="rohit@example.com"
                value={form.email}
                onChange={handleChange}
              />

              {errors.email && (
                <span className="bc-field-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div>
              <label className="bc-field-label">
                PHONE NUMBER *
              </label>

              <input
                className={`bc-field-input${errors.phone ? " error" : ""}`}
                name="phone"
                placeholder="+91 9876543210"
                value={form.phone}
                onChange={handleChange}
              />

              {errors.phone && (
                <span className="bc-field-error">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <label className="bc-field-label">
            NUMBER OF PLAYERS *
          </label>

          <input
            className={`bc-field-input${errors.players ? " error" : ""}`}
            name="players"
            placeholder="11"
            value={form.players}
            onChange={handleChange}
          />

          {errors.players && (
            <span className="bc-field-error">
              {errors.players}
            </span>
          )}

          <label className="bc-field-label">
            ADDITIONAL NOTES (optional)
          </label>

          <textarea
            className="bc-field-textarea"
            name="notes"
            placeholder="Any special requirements, equipment needs, or notes for the groundskeeper..."
            value={form.notes}
            onChange={handleChange}
          />

          <div className="bc-details-actions">
            <button
              className="bc-back-btn"
              onClick={() => navigate(-1)}
            >
              ← Back to Ground Selection
            </button>

            <button
              className="bc-proceed-btn"
              onClick={handleProceed}
            >
              Proceed to Payment →
            </button>
          </div>
        </div>

        <aside className="bc-booking-sidebar">
          <BookingSummary
            ground={ground}
            date={date}
            selectedSlots={selectedSlots}
            showContinueButton={false}
          />
        </aside>
      </div>
    </>
  );
}

export default BookingDetails;