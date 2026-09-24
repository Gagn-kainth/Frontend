import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../api/axios";

import "../style/BookingPayment.css";
import BookingGroundHero from "./BookingGroundHero";

const GST_RATE = 0.18;

const PAYMENT_METHODS = [
  "UPI",
  "Credit Card",
  "Debit Card",
  "Net Banking",
  "Wallets",
];

function BookingPayment() {
  const location = useLocation();
  const navigate = useNavigate();

  const { groundId, date, selectedSlots, form } = location.state || {};
const [ground, setGround] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);

  // Fetch selected ground from MongoDB
  useEffect(() => {
    async function fetchGround() {
      try {
        const response = await api.get(
          `/api/grounds/${groundId}`
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

  if (!groundId || !selectedSlots?.length || !form) {
    navigate("/BookingGround", { replace: true });
    return null;
  }

  if (loading) {
    return <div>Loading payment details...</div>;
  }

  if (!ground) {
    return <div>Ground not found.</div>;
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

  async function handlePay() {
    if (paying) return;

    try {
      setPaying(true);

      console.log("STEP 1: Creating booking...");

      // 1. Create booking in MongoDB
      const bookingResponse = await api.post(
        `/api/bookings`,
        {
          groundId,
          date,
          slots: selectedSlots,
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          players: form.players,
          notes: form.notes || "",
        }
      );

      const booking = bookingResponse.data;

      console.log("STEP 2: Booking created:", booking);
      console.log("Booking ID:", booking._id);

      // 2. Create Razorpay order
      const orderResponse = await api.post(
        `/api/payments/create-order`,
        {
          bookingId: booking._id,
        }
      );

      const order = orderResponse.data;

      console.log("STEP 3: Razorpay order created:", order);

      // 3. Check Razorpay SDK
      if (!window.Razorpay) {
        console.error("Razorpay SDK not loaded");
        setPaying(false);
        return;
      }

      // 4. Razorpay Checkout
      const options = {
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,

        name: "Boundary Club",
        description: "Ground Booking",

        order_id: order.orderId,

        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.phone,
        },

        handler: async function (response) {
          try {
            console.log("STEP 4: Payment successful:", response);

            const verifyResponse = await api.post(
              `/api/payments/verify`,
              {
                bookingId: booking._id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            console.log("STEP 5: Payment verified:", verifyResponse.data);

            navigate("/BookingGround/success", {
              state: {
                booking: verifyResponse.data.booking,
                paymentId: response.razorpay_payment_id,
              },
            });
          } catch (error) {
            console.error(
              "Payment verification failed:",
              error.response?.data || error.message
            );
          }
        },
        modal: {
          ondismiss: function () {
            console.log("Razorpay checkout closed");
            setPaying(false);
          },
        },

        theme: {
          color: "#a10d0d",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error.response?.data || error.message);

      setPaying(false);
    }
  }

  return (
    <>
      <BookingGroundHero currentStep={2} />

      <div className="bc-payment-page">
        <div className="bc-payment-layout">
          {/* BOOKING REVIEW */}
          <div className="bc-payment-card">
            <h3 className="bc-payment-card-title">Booking Review</h3>

            <div className="bc-review-grid">
              <ReviewItem label="GROUND" value={ground.name} />

              <ReviewItem label="LOCATION" value={ground.location} />

              <ReviewItem label="DATE" value={formattedDate} />

              <ReviewItem label="TIME" value={selectedSlots.join(", ")} />

              <ReviewItem
                label="DURATION"
                value={`${hours} hour${hours > 1 ? "s" : ""}`}
              />

              <ReviewItem label="CUSTOMER" value={form.fullName} />

              <ReviewItem label="PHONE" value={form.phone} />

              <ReviewItem label="PLAYERS" value={form.players} />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bc-payment-card">
            <h3 className="bc-payment-card-title">Payment Details</h3>

            <div className="bc-payment-row">
              <span>
                Ground Hire ({hours}hr × ₹
                {ground.pricePerHour.toLocaleString("en-IN")})
              </span>

              <span>₹{basePrice.toLocaleString("en-IN")}</span>
            </div>

            <div className="bc-payment-row">
              <span>GST ({GST_RATE * 100}%)</span>

              <span>₹{gst.toLocaleString("en-IN")}</span>
            </div>

            <div className="bc-payment-total-row">
              <span>Total Amount</span>

              <span className="bc-payment-total-value">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="bc-payment-methods">
              <div className="bc-payment-methods-label">
                ACCEPTED PAYMENT METHODS
              </div>

              <div className="bc-payment-methods-row">
                {PAYMENT_METHODS.map((method) => (
                  <span key={method} className="bc-payment-method-tag">
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <button
              className="bc-pay-btn"
              onClick={handlePay}
              disabled={paying}
            >
              {paying
                ? "Processing..."
                : `🔒 Pay ₹${total.toLocaleString("en-IN")} via Razorpay`}
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
