const express = require("express");
const router = express.Router();

const {
  createBooking,
  getBookingById,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

router.use(protect);

router.post("/", createBooking);
router.get("/:id", getBookingById);

module.exports = router;
