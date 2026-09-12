const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    ground: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ground",
      required: true,
    },
    date: { type: Date, required: true },
    slots: [{ type: String, required: true }], // e.g. ["4:00 PM"]

    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    players: { type: Number, required: true },
    notes: { type: String },

    basePrice: { type: Number, required: true },
    gst: { type: Number, required: true },
    total: { type: Number, required: true },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    razorpayOrderId: { type: String },
    razorpayPaymentId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
