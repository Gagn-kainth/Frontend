const Booking = require("../models/Booking");
const Ground = require("../models/Ground");

const GST_RATE = 0.18;

async function createBooking(req, res, next) {
  try {
    const { groundId, date, slots, fullName, email, phone, players, notes } =
      req.body;

    if (!groundId || !date || !Array.isArray(slots) || slots.length === 0) {
      return res
        .status(400)
        .json({ message: "groundId, date and at least one slot are required" });
    }

    if (!fullName || !email || !phone || !players) {
      return res
        .status(400)
        .json({ message: "fullName, email, phone and players are required" });
    }

    const ground = await Ground.findById(groundId);

    if (!ground) {
      return res.status(404).json({ message: "Ground not found" });
    }

    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0);

    const dayEnd = new Date(date);
    dayEnd.setHours(23, 59, 59, 999);

    const existingBookings = await Booking.find({
      ground: groundId,
      date: { $gte: dayStart, $lte: dayEnd },
      paymentStatus: { $ne: "failed" },
    });

    const alreadyBooked = existingBookings.flatMap((b) => b.slots);
    const conflict = slots.find((s) => alreadyBooked.includes(s));

    if (conflict) {
      return res.status(409).json({
        message: `Slot ${conflict} is already booked for this ground and date`,
      });
    }

    const basePrice = ground.pricePerHour * slots.length;
    const gst = Math.round(basePrice * GST_RATE);
    const total = basePrice + gst;

    const booking = await Booking.create({
      user: req.user._id,
      ground: groundId,
      date,
      slots,
      fullName,
      email: email.toLowerCase(),
      phone,
      players,
      notes,
      basePrice,
      gst,
      total,
      paymentStatus: "pending",
    });

    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
}

async function getBookingById(req, res, next) {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate("ground");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(booking);
  } catch (err) {
    next(err);
  }
}

module.exports = { createBooking, getBookingById };
