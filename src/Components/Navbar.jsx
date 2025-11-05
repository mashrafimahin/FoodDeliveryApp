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
import { AuthContext } from "../Contexts/AuthContext";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// main
function Navbar() {
  const { scroll } = useContext(ScrolledContext);
  const { userState } = useContext(AuthContext);

  return (
    <Nav $sc={scroll}>
      {/* Logo */}
      <TitleText
        style={{ fontWeight: "bold", cursor: "pointer" }}
        $color="#e74124"
        $size="2.5rem"
      >
        FoodieHub
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
      </div>
    </Nav>
  );
}

export default Navbar;
