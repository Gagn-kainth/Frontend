const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://frontend-git-main-gagn-s-projects.vercel.app",  "https://boundaryclub.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("CORS request from:", origin);

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS origin not allowed"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const authRoutes = require("./routes/authRoutes");
const groundRoutes = require("./routes/groundRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/grounds", groundRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Boundary Club API is running" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
  });
});

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
