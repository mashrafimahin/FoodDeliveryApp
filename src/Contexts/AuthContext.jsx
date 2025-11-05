// hooks
import React, { useEffect, useState } from "react";

// firebase initialization
import app from "../Server/Firebase";

// firebase hooks
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = React.createContext(null);

// firestore database to save user data
import { Storage } from "../Server/DataBase";

// Provider component
const AuthProvider = (props) => {
  // states
  const [userState, setUserState] = useState(false);
  const [pop, setPop] = useState(false);

  // auth
  const auth = getAuth(app);

  // sign up function
  const signUp = async (name, email, password, phone, dateOfBirth) => {
    try {
      // authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // save data
      await Storage(user.uid, name, email, password, phone, dateOfBirth);

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
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Sign in failed. Please check your credentials and try again.");
      console.error("Error signing in:", error);
    }
  };

  // sign out
  const signOutUser = async () => {
    signOut(auth).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  // check sign in/not
  useEffect(() => {
    const fn = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserState(true);
      } else {
        setUserState(false);
      }
    });

    return () => fn();
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ signUp, signIn, signOut: signOutUser, pop, userState }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
