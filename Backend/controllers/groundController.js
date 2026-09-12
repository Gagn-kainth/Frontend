const Ground = require("../models/Ground");
const Booking = require("../models/Booking");

async function getGrounds(req, res, next) {
  try {
    const grounds = await Ground.find();
    res.json(grounds);
  } catch (err) {
    next(err);
  }
}

async function getGroundById(req, res, next) {
  try {
    const ground = await Ground.findById(req.params.id);
    if (!ground) {
      return res.status(404).json({ message: "Ground not found" });
    }
    res.json(ground);
  } catch (err) {
    next(err);
  }
}

async function getGroundAvailability(req, res, next) {
  try {
    const { date } = req.query;
    if (!date) {
      return res.status(400).json({ message: "date query param is required" });
    }

    const dayStart = new Date(date);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(date);
    dayEnd.setHours(23, 59, 59, 999);

    const bookings = await Booking.find({
      ground: req.params.id,
      date: { $gte: dayStart, $lte: dayEnd },
      paymentStatus: { $ne: "failed" },
    });

    const bookedSlots = bookings.flatMap((b) => b.slots);

    res.json({ bookedSlots });
  } catch (err) {
    next(err);
  }
}

module.exports = { getGrounds, getGroundById, getGroundAvailability };
