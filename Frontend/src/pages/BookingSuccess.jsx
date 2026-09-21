import { useLocation, useNavigate } from "react-router-dom";
import "../style/BookingSuccess.css";

function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    booking,
    paymentId,
  } = location.state || {};

  if (!booking) {
    return (
      <div className="bc-success-page">
        <div className="bc-success-card">
          <h2>Booking not found</h2>
          <button onClick={() => navigate("/BookingGround")}>
            Back to Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bc-success-page">
      <div className="bc-success-card">

        <div className="bc-success-icon">
          ✓
        </div>

        <h1>Payment Successful!</h1>

        <p className="bc-success-message">
          Your ground booking has been confirmed successfully.
        </p>

        <div className="bc-booking-details">

          <div className="bc-detail-row">
            <span>Booking ID</span>
            <strong>{booking._id}</strong>
          </div>

          <div className="bc-detail-row">
            <span>Ground</span>
            <strong>{booking.ground?.name || "Ground"}</strong>
          </div>

          <div className="bc-detail-row">
            <span>Date</span>
            <strong>
              {new Date(booking.date).toLocaleDateString("en-IN")}
            </strong>
          </div>

          <div className="bc-detail-row">
            <span>Time Slots</span>
            <strong>{booking.slots?.join(", ")}</strong>
          </div>

          <div className="bc-detail-row">
            <span>Players</span>
            <strong>{booking.players}</strong>
          </div>

          <div className="bc-detail-row">
            <span>Total Paid</span>
            <strong>
              ₹{booking.total?.toLocaleString("en-IN")}
            </strong>
          </div>

          {paymentId && (
            <div className="bc-detail-row">
              <span>Payment ID</span>
              <strong>{paymentId}</strong>
            </div>
          )}

        </div>

        <div className="bc-success-actions">
          <button
            className="bc-home-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

          <button
            className="bc-book-btn"
            onClick={() => navigate("/BookingGround")}
          >
            Book Another Ground
          </button>
        </div>

      </div>
    </div>
  );
}

export default BookingSuccess;

