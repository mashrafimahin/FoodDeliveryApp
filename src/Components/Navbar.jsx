// styles
import { Nav, TitleText } from "../Style/Component.Style";
import classes from "../Module/Navbar.module.css";
const basic = {
  textDecoration: "none",
  color: "inherit",
};

// hooks
import { useContext, useState } from "react";

// router
import { NavLink } from "react-router";

// context
import ScrolledContext from "../Contexts/DataContext";
import { AuthContext } from "../Contexts/AuthContext";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// main
function Navbar() {
  const { scroll } = useContext(ScrolledContext);
  const { userState } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Nav $sc={scroll}>
        {/* Logo */}
        <TitleText
          style={{ fontWeight: "bold", cursor: "pointer" }}
          $color="#e74124"
          $size="2.5rem"
        >
          Foodie
        </TitleText>

        {/* Navigation Links */}
        <div className={classes.navbarContainer}>
          {/* list */}
          <ul className={classes.navbarLinks}>
            <NavLink to="/" style={basic}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/shop" style={basic}>
              <li>Shop</li>
            </NavLink>
            <NavLink to="/about" style={basic}>
              <li>About</li>
            </NavLink>
            <NavLink to="/blogs" style={basic}>
              <li>Blog</li>
            </NavLink>
            <NavLink to="/contact" style={basic}>
              <li>Contact</li>
            </NavLink>
          </ul>

          {/* button */}
          {userState ? (
            <NavLink to="/dashboard" style={basic}>
              <button className={classes.profileButton}>
                <FontAwesomeIcon icon={faUser} />
                Profile
              </button>
            </NavLink>
          ) : (
            <NavLink to="/login" style={basic}>
              <button className={classes.loginSignupButton}>
                <FontAwesomeIcon icon={faUser} />
                Login
              </button>
            </NavLink>
          )}

          {/* Hamburger Menu */}
          <div
            className={`${classes.hamburger} ${isMenuOpen ? classes.open : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Nav>

      {/* Overlay */}
      <div
        className={`${classes.overlay} ${isMenuOpen ? classes.open : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Side Menu */}
      <div className={`${classes.sideMenu} ${isMenuOpen ? classes.open : ""}`}>
        <ul className={classes.navbarLinks}>
          <NavLink to="/" style={basic} onClick={closeMenu}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/shop" style={basic} onClick={closeMenu}>
            <li>Shop</li>
          </NavLink>
          <NavLink to="/about" style={basic} onClick={closeMenu}>
            <li>About</li>
          </NavLink>
          <NavLink to="/blogs" style={basic} onClick={closeMenu}>
            <li>Blog</li>
          </NavLink>
          <NavLink to="/contact" style={basic} onClick={closeMenu}>
            <li>Contact</li>
          </NavLink>
        </ul>

        {/* Additional Navigation */}
        <div className={classes.sideNavSection}>
          <h4 className={classes.sideNavTitle}>Support</h4>
          <ul className={classes.sideNavLinks}>
            <NavLink to="/faq" style={basic} onClick={closeMenu}>
              <li>FAQ</li>
            </NavLink>
            <NavLink to="/help" style={basic} onClick={closeMenu}>
              <li>Help Center</li>
            </NavLink>
          </ul>
        </div>

        <div className={classes.sideNavSection}>
          <h4 className={classes.sideNavTitle}>Company</h4>
          <ul className={classes.sideNavLinks}>
            <NavLink to="/careers" style={basic} onClick={closeMenu}>
              <li>Careers</li>
            </NavLink>
            <NavLink to="/privacy" style={basic} onClick={closeMenu}>
              <li>Privacy Policy</li>
            </NavLink>
            <NavLink to="/terms" style={basic} onClick={closeMenu}>
              <li>Terms of Service</li>
            </NavLink>
          </ul>
        </div>

        {/* Mobile Button */}
        {userState ? (
          <NavLink to="/dashboard" style={basic} onClick={closeMenu}>
            <button className={classes.profileButton}>
              <FontAwesomeIcon icon={faUser} />
              Profile
            </button>
          </NavLink>
        ) : (
          <NavLink to="/login" style={basic} onClick={closeMenu}>
            <button className={classes.loginSignupButton}>
              <FontAwesomeIcon icon={faUser} />
              Login
            </button>
          </NavLink>
        )}
      </div>
    </>
  );
}

export default Navbar;
