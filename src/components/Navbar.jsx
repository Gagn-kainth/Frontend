import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";



function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "ProShop", path: "/pro-shop" },
    { name: "Membership", path: "/membership" }
  ];


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
            <NavLink to={link.path}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>


      <NavLink to="/BookingGround" className="book-btn">
          <span className="btn-dot"></span>
          Book Ground
        </NavLink>
      <IoMenu className="Menu" />

      </nav>
    </header>
  );
}

export default Navbar;