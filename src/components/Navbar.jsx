import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "ProShop", path: "/pro-shop" },
    { name: "Membership", path: "/membership" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="logo">
          <span className="logo-dot"></span>
          BOUNDARY<span>.CLUB</span>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/BookingGround" className="book-btn">
          <span className="btn-dot"></span>
          Book Ground
        </NavLink>

        {isOpen ? (
          <IoClose className="Menu" onClick={() => setIsOpen(false)} />
        ) : (
          <IoMenu className="Menu" onClick={() => setIsOpen(true)} />
        )}

        {/* Mobile dropdown */}
        <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} onClick={closeMenu}>
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/BookingGround"
              className="book-btn-mobile"
              onClick={closeMenu}
            >
              Book Ground
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
