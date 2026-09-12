const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


const groundRoutes = require("./routes/groundRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );

  app.use(express.json());

app.use("/api/grounds", groundRoutes);
app.use("/api/bookings", bookingRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      message: err.message || "Something went wrong",
    });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));