// styles
import classes from "../Module/Footer.module.css";
const basic = {
  textDecoration: "none",
  color: "inherit",
};

// router
import { NavLink } from "react-router";

// main
function Footer() {
  // main
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        {/* names */}
        <div className={classes.footerSection}>
          <h3>FoodieHub</h3>
          <p>Delivering happiness with every meal</p>
        </div>

        {/* links */}
        <div className={classes.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <NavLink to="/about" style={basic}>
              <li>About Us</li>
            </NavLink>
            <NavLink to="/shop" style={basic}>
              <li>Menu</li>
            </NavLink>
            <NavLink to="/contact" style={basic}>
              <li>Contact</li>
            </NavLink>
            <NavLink to="/career" style={basic}>
              <li>Careers</li>
            </NavLink>
          </ul>
        </div>

        {/* support */}
        <div className={classes.footerSection}>
          <h4>Support</h4>
          <ul>
            <NavLink to="/help" style={basic}>
              <li>Help Center</li>
            </NavLink>
            <NavLink to="/terms&policy" style={basic}>
              <li>Terms of Service</li>
            </NavLink>
            <NavLink to="/privacypolicy" style={basic}>
              <li>Privacy Policy</li>
            </NavLink>
            <NavLink to="/faq" style={basic}>
              <li>FAQs</li>
            </NavLink>
          </ul>
        </div>

        {/* contact info */}
        <div className={classes.footerSection}>
          <h4>Contact Us</h4>
          <p>Email: info@foodie.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* copyright */}
      <div className={classes.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} Foodie. Created by{" "}
          <a
            href="https://mahiin.netlify.app"
            target="_blank"
            style={{
              color: "pink",
              letterSpacing: "2px",
              background: "rgb(255,255,255,0.05)",
              borderRadius: "10px",
              padding: "6px 10px",
            }}
          >
            Mahin
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
