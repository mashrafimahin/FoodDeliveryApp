// styles
import classes from "../Module/Footer.module.css";

// main
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        {/* names */}
        <div className={classes.footerSection}>
          <h3>Foodie</h3>
          <p>Delivering happiness with every meal</p>
        </div>

        {/* links */}
        <div className={classes.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Menu</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* support */}
        <div className={classes.footerSection}>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
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
            style={{ color: "pink", letterSpacing: "2px" }}
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
