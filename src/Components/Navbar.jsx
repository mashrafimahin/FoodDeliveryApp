// styles
import { Nav, TitleText } from "../Style/Component.Style";
import classes from "../Module/Navbar.module.css";
const basic = {
  textDecoration: "none",
  color: "inherit",
};

// hooks
import { useContext } from "react";

// router
import { NavLink } from "react-router";

// context
import ScrolledContext from "../Contexts/DataContext";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// main
function Navbar() {
  const { scroll } = useContext(ScrolledContext);

  return (
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
          <li>Blog</li>
          <NavLink to="/contact" style={basic}>
            <li>Contact</li>
          </NavLink>
        </ul>

        {/* button */}
        <button className={classes.loginSignupButton}>
          <FontAwesomeIcon icon={faUser} />
          Login
        </button>
      </div>
    </Nav>
  );
}

export default Navbar;
