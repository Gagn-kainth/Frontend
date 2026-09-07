import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import ProShop from "./pages/ProShop";
import Membership from "./pages/Membership";
import BookingGround from "./pages/BookingGround";

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
        <Route path="/BookingGround" element={< BookingGround/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;