import { useState } from "react";
import "../style/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "ProShop", path: "/pro-shop" },
    { name: "Membership", path: "/membership" },
  ];

  const closeMenu = () => setIsOpen(false);

  async function handleLogout() {
    try {
      await logout();
      closeMenu();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

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

        {user ? (
          <button className="book-btn" onClick={() => navigate("/BookingGround")}>
            <span className="btn-dot"></span>
            Book Ground
          </button>
        ) : (
          <NavLink to="/login" className="book-btn">
            Login
          </NavLink>
        )}

        {isOpen ? (
          <IoClose className="Menu" onClick={() => setIsOpen(false)} />
        ) : (
          <IoMenu className="Menu" onClick={() => setIsOpen(true)} />
        )}

        <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path} onClick={closeMenu}>
                {link.name}
              </NavLink>
            </li>
          ))}

          <li>
            {user ? (
              <button className="book-btn-mobile" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="book-btn-mobile" onClick={closeMenu}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
