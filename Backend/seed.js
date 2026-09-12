const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Ground = require("./models/Ground");

dotenv.config();

const GROUNDS = [
  {
    name: "Boundary Ground 1",
    location: "Main Oval, North Wing",
    pricePerHour: 1500,
    tags: ["Floodlights", "Pavilion", "Scoreboards"],
    image: "booking1.jpg",
  },
  {
    name: "Boundary Ground 2",
    location: "North End, East Side",
    pricePerHour: 1000,
    tags: ["Pavilion", "Scoreboards"],
    image: "booking2.jpg",
  },
  {
    name: "Indoor Net Arena",
    location: "West Block, Level 1",
    pricePerHour: 800,
    tags: ["6 Lanes", "Bowling Machine", "Video Analysis"],
    image: "booking3.jpg",
  },
  {
    name: "Practice Ground",
    location: "East Wing, Ground Level",
    pricePerHour: 600,
    tags: ["Practice Nets", "Coaching Bay"],
    image: "booking4.jpg",
  },
];

async function seed() {
  await connectDB();

  await Ground.deleteMany();
  await Ground.insertMany(GROUNDS);

  console.log("Grounds seeded successfully");
  process.exit();
}

seed();
