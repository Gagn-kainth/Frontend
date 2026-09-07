import "./Footer.css";

function Footer() {
  const footerLinks = [
    "Home",
    "Events",
    "About Us",
    "Contact Us",
    "Shop",
    "Membership Program",
    "Book A Ground",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (
    <footer className="footer">

      <div className="footer-top">

      
        <div className="footer-community">
          <div className="footer-logo">
            Boundary<span>.Club</span>
          </div>

          <h3>Join The Community</h3>

          <p>
            Subscribe Now For The Latest News And Insights.
          </p>

          <div className="subscribe">
            <input
              type="text"
              placeholder="Enter Your Number"
            />

            <button>Join Now</button>
          </div>
        </div>

        {/* Address */}
        <div className="footer-info">
          <h4>Address</h4>

          <p>
            Bounday .Club,<br />
            Next to Tata Tower,<br />
            Gill Avenue, Kansal<br />
            SAS Nagar, Punjab
          </p>
        </div>

        {/* Contact */}
        <div className="footer-info">
          <h4>Contact Info</h4>

          <p>
            +91 123456789
          </p>

          <p>
            letsplay@Boundary.club
          </p>
        </div>

      </div>

      <div className="footer-line"></div>

      <div className="designer">
        Designed by Gagan Design
      </div>

      <div className="footer-links">
        {footerLinks.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>

      <div className="footer-bottom-line"></div>

      <div className="copyright">
        © 2026 Bounday .Club. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;