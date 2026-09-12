import { useLocation, useNavigate } from "react-router-dom";
import "../style/BookingPayment.css";
import BookingGroundHero from "./BookingGroundHero";
import { GROUNDS } from "./GroundCard";

const GST_RATE = 0.18;
const PAYMENT_METHODS = ["UPI", "Credit Card", "Debit Card", "Net Banking", "Wallets"];

function BookingPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { groundId, date, selectedSlots, form } = location.state || {};

  const ground = GROUNDS.find((g) => g.id === groundId);

  if (!ground || !selectedSlots?.length || !form) {
    navigate("/BookingGround", { replace: true });
    return null;
  }

  const hours = selectedSlots.length;
  const basePrice = ground.pricePerHour * hours;
  const gst = Math.round(basePrice * GST_RATE);
  const total = basePrice + gst;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  function handlePay() {
    // hook up Razorpay checkout here
    console.log("Paying", total, { ground, date, selectedSlots, form });
  }

  return (
    <>
      <BookingGroundHero currentStep={2} />
      <div className="bc-payment-page">
      <div className="bc-payment-layout">
        <div className="bc-payment-card">
          <h3 className="bc-payment-card-title">Booking Review</h3>

          <div className="bc-review-grid">
            <ReviewItem label="GROUND" value={ground.name} />
            <ReviewItem label="LOCATION" value={ground.location} />

            <ReviewItem label="DATE" value={formattedDate} />
            <ReviewItem label="TIME" value={selectedSlots.join(", ")} />

            <ReviewItem label="DURATION" value={`${hours} hour${hours > 1 ? "s" : ""}`} />
            <ReviewItem label="CUSTOMER" value={form.fullName} />

            <ReviewItem label="PHONE" value={form.phone} />
            <ReviewItem label="PLAYERS" value={form.players} />
          </div>
        </div>

        <div className="bc-payment-card">
          <h3 className="bc-payment-card-title">Payment Details</h3>

          <div className="bc-payment-row">
            <span>Ground Hire ({hours}hr × ₹{ground.pricePerHour.toLocaleString("en-IN")})</span>
            <span>₹{basePrice.toLocaleString("en-IN")}</span>
          </div>

          <div className="bc-payment-row">
            <span>GST ({GST_RATE * 100}%)</span>
            <span>₹{gst.toLocaleString("en-IN")}</span>
          </div>

          <div className="bc-payment-total-row">
            <span>Total Amount</span>
            <span className="bc-payment-total-value">₹{total.toLocaleString("en-IN")}</span>
          </div>

          <div className="bc-payment-methods">
            <div className="bc-payment-methods-label">ACCEPTED PAYMENT METHODS</div>
            <div className="bc-payment-methods-row">
              {PAYMENT_METHODS.map((m) => (
                <span key={m} className="bc-payment-method-tag">{m}</span>
              ))}
            </div>
          </div>

          <button className="bc-pay-btn" onClick={handlePay}>
            🔒 Pay ₹{total.toLocaleString("en-IN")} via Razorpay
          </button>

          <p className="bc-payment-secure-note">
            🔒 Secured by Razorpay · 256-bit SSL encryption
          </p>
        </div>

        <button className="bc-back-details-btn" onClick={() => navigate(-1)}>
          ← Back to Details
        </button>
      </div>
      </div>
    </>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="bc-review-item">
      <div className="bc-review-label">{label}</div>
      <div className="bc-review-value">{value}</div>
    </div>
  );
}

export default BookingPayment;