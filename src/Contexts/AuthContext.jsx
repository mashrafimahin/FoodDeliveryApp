// hooks
import React, { useEffect, useState } from "react";

// context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = React.createContext(null);

// Provider component
const AuthProvider = (props) => {
  // states
  const [userState, setUserState] = useState(false);
  const [pop, setPop] = useState(false);

  // sign up function
  const signUp = async (name, email, password, phone, dateOfBirth) => {
    try {
      // save data locally
      const userData = {
        name,
        email,
        password,
        phone,
        dateOfBirth,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setUserState(true);

      // change state
      setTimeout(() => {
        setPop(true);
      }, 500);
    } catch (error) {
      alert("Sign up failed. Please try again.");
      console.error("Error signing up:", error);
    }
  };

  // sign in
  const signIn = async (email, password) => {
    try {
      const userData = JSON.parse(localStorage.getItem("user") || "{}");
      if (userData.email === email && userData.password === password) {
        setUserState(true);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      alert("Sign in failed. Please check your credentials and try again.");
      console.error("Error signing in:", error);
    }
  };

  // sign out
  const signOutUser = async () => {
    setUserState(false);
    localStorage.removeItem("user");
  };

  // check sign in/not
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (userData.email) {
      setUserState(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, signIn, signOut: signOutUser, pop, userState }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
