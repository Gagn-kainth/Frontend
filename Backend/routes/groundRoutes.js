const express = require("express");
const router = express.Router();
const {
  getGrounds,
  getGroundById,
  getGroundAvailability,
} = require("../controllers/groundController");

router.get("/", getGrounds);
router.get("/:id", getGroundById);
router.get("/:id/availability", getGroundAvailability);

module.exports = router;
