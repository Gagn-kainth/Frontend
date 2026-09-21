import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import ProShop from "./pages/ProShop";
import Membership from "./pages/Membership";
import BookingGround from "./pages/BookingGround";
import BookingDetails from "./components/BookingDetails";
import BookingPayment from "./components/BookingPayment";
import BookingSuccess from "./pages/BookingSuccess";
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
        <Route path="/BookingGround" element={<BookingGround />} />
        <Route path="/BookingGround/details" element={<BookingDetails />} />
        <Route path="/BookingGround/payment" element={<BookingPayment />} />
        <Route path="/BookingGround/success" element={<BookingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
