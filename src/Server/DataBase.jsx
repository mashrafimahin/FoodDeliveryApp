// src/Server/DataBase
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";

// firebase app import
import app from "./Firebase";

// initialize firebase app
const db = getFirestore(app);

// initialize user auth
const auth = getAuth(app);

// Firestore configuration
export const Storage = async (uid, name, email, password, phone, dOb) => {
  try {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: name,
      email: email,
      password: password,
      phone: phone,
      dateOfBirth: dOb,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// fetch data from firestore
export const FetchData = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    // checkpoint
    if (docSnap.exists()) return docSnap.data();
  } catch (e) {
    console.log("Error", e);
  }
};

// update database
export const UpdateData = async (userId, newUserData) => {
  try {
    // Update Firestore database
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, newUserData);
    alert("Document updated successfully!");
  } catch (error) {
    alert("Document update failed!");
    console.error("Error updating document:", error);
  }
};

// Delete the authenticated user
export const DeleteUser = async (uid) => {
  const user = auth.currentUser;
  try {
    await deleteUser(user);
    await deleteDoc(doc(db, "users", uid));
    alert("Account deleted successfully from Firebase Auth");
  } catch (error) {
    console.error("Error deleting user:", error);
    alert("You must reauthenticate before deleting your account.");
  }
};
