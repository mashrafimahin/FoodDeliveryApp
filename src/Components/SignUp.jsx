// hooks
import { useContext, useState } from "react";

// router
import { useNavigate } from "react-router";

// styles
import classes from "../Module/SignUp.module.css";

// context
import { AuthContext } from "../Contexts/AuthContext";

// popup
import PopUp from "./PopUp";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    acceptTerms: false,
  });

  // auth context
  const { signUp, pop } = useContext(AuthContext);

  // onchange handler
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    signUp(
      formData.fullName,
      formData.email,
      formData.password,
      formData.phone,
      formData.dateOfBirth
    );
  };

  // go back handler
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className={classes.signupContainer}>
      {/* popup */}
      {pop && (
        <PopUp
          title={`Hello ${formData.fullName || "Guest"},`}
          description={
            "Your account has been created succefully. Now we need permission to save cookies for your better browsing experience. Do you want to allow?"
          }
          active={handleGoBack}
          show={true}
        />
      )}

      <div className={classes.signupCard}>
        <div className={classes.signupHeader}>
          <h1 className={classes.signupTitle}>Create Account</h1>
          <p className={classes.signupSubtitle}>
            Join Foodie and start your culinary journey
          </p>
        </div>

        <form className={classes.signupForm} onSubmit={handleSubmit}>
          <div className={classes.inputRow}>
            <div className={classes.inputGroup}>
              <label htmlFor="fullName" className={classes.inputLabel}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={classes.inputField}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className={classes.inputGroup}>
              <label htmlFor="email" className={classes.inputLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={classes.inputField}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className={classes.inputRow}>
            <div className={classes.inputGroup}>
              <label htmlFor="password" className={classes.inputLabel}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={classes.inputField}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className={classes.inputGroup}>
              <label htmlFor="phone" className={classes.inputLabel}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={classes.inputField}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className={`${classes.inputGroup} ${classes.fullWidth}`}>
            <label htmlFor="dateOfBirth" className={classes.inputLabel}>
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className={classes.inputField}
              required
            />
          </div>

          <div className={classes.checkboxGroup}>
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
              className={classes.checkbox}
              required
            />
            <label htmlFor="acceptTerms" className={classes.checkboxLabel}>
              I accept the{" "}
              <a href="#" className={classes.link}>
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className={classes.link}>
                Privacy Policy
              </a>
            </label>
          </div>

          <button type="submit" className={classes.signupButton}>
            Create Account
          </button>
        </form>

        <div className={classes.signupFooter}>
          <button onClick={handleGoBack} className={classes.backButton}>
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
