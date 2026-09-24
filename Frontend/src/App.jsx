import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import ProShop from "./pages/ProShop";
import Membership from "./pages/Membership";
import BookingGround from "./pages/BookingGround";
import BookingDetails from "./components/BookingDetails";
import BookingPayment from "./components/BookingPayment";
import BookingSuccess from "./pages/BookingSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/pro-shop" element={<ProShop />} />
        <Route path="/membership" element={<Membership />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/BookingGround"
          element={
            <ProtectedRoute>
              <BookingGround />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BookingGround/details"
          element={
            <ProtectedRoute>
              <BookingDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BookingGround/payment"
          element={
            <ProtectedRoute>
              <BookingPayment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BookingGround/success"
          element={
            <ProtectedRoute>
              <BookingSuccess />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
