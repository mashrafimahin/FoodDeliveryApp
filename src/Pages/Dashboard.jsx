// hooks
import { useState, useEffect, useContext } from "react";

// firebase
import app from "../Server/Firebase";
import { getAuth } from "firebase/auth";

// router
import { useNavigate } from "react-router-dom";

// style
import styles from "../Module/Dashboard.module.css";

// context
import { AuthContext } from "../Contexts/AuthContext";
import { FetchData, UpdateData, DeleteUser } from "../Server/DataBase";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({});
  const [editData, setEditData] = useState({ ...userData });
  const [userID, setUserID] = useState(null);

  // context
  const { signOut } = useContext(AuthContext);

  // Load user data from API
  useEffect(() => {
    let isMounted = true;
    const auth = getAuth(app);

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const actID = user.uid;
        setUserID(actID);

        try {
          const data = await FetchData(actID);
          if (isMounted) {
            setUserData(data);
            setEditData(data);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        navigate("/");
      }
    });

    return () => {
      isMounted = false;
      unsubscribe(); // Cleanup listener on unmount
    };
  }, [navigate]);

  // edit trigger handle
  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing - reset to original data
      setEditData({ ...userData });
    }
    setIsEditing(!isEditing);
  };

  // hanlde input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle save
  const handleSave = () => {
    setUserData({ ...editData });
    setIsEditing(false);
    UpdateData(userID, editData);
  };

  // handle sign out
  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  // handle change password
  const handleChangePassword = () => {
    // Navigate to change password page or show modal
    alert("Change password functionality would be implemented here");
  };

  // handle delete account
  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      DeleteUser(userID);
      navigate("/");
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Profile Header Section */}
      <div className={styles.profileHeader}>
        <div className={styles.profileCover}>
          <div className={styles.profileAvatarContainer}>
            <div className={styles.profileAvatar}>
              <span className={styles.avatarText}>
                {userData?.name
                  ? userData.name
                      .split(" ")
                      .map((elm) => elm[0])
                      .join("")
                      .toUpperCase()
                  : ""}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h1 className={styles.profileName}>
            {userData.name || "loading..."}
          </h1>
          <p className={styles.profileEmail}>
            {userData.email || "loading..."}
          </p>
          <div className={styles.profileActions}>
            <button
              className={styles.editProfileButton}
              onClick={handleEditToggle}
            >
              {isEditing ? "Cancel" : "✏️ Edit Profile"}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.dashboardContent}>
        {/* Profile Information Card */}
        <div className={styles.profileCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>About</h2>
          </div>

          {/* user data form */}
          <div className={styles.profileForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              ) : (
                <p className={styles.formValue}>{userData.name}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email Address</label>
              <p className={styles.formValue}>{userData.email}</p>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={editData.phone}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              ) : (
                <p className={styles.formValue}>{userData.phone}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Date of Birth</label>
              {isEditing ? (
                <input
                  type="date"
                  name="dateOfBirth"
                  value={editData.dateOfBirth}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              ) : (
                <p className={styles.formValue}>
                  {new Date(userData.dateOfBirth).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>

            {isEditing && (
              <div className={styles.buttonGroup}>
                <button className={styles.saveButton} onClick={handleSave}>
                  Save Changes
                </button>
                <button
                  className={styles.cancelButton}
                  onClick={handleEditToggle}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Account Actions Card */}
        <div className={styles.actionsCard}>
          <h2 className={styles.cardTitle}>Account Actions</h2>

          <div className={styles.actionsGrid}>
            <button
              className={styles.actionButton}
              onClick={handleChangePassword}
            >
              <span className={styles.actionIcon}>🔒</span>
              <span className={styles.actionText}>Change Password</span>
            </button>

            <button
              className={styles.actionButton}
              onClick={() => navigate("/contact")}
            >
              <span className={styles.actionIcon}>📞</span>
              <span className={styles.actionText}>Contact Support</span>
            </button>

            <button
              className={styles.actionButton}
              onClick={() => navigate("/about")}
            >
              <span className={styles.actionIcon}>ℹ️</span>
              <span className={styles.actionText}>About Us</span>
            </button>

            <button
              className={`${styles.actionButton} ${styles.dangerButton}`}
              onClick={handleDeleteAccount}
            >
              <span className={styles.actionIcon}>🗑️</span>
              <span className={styles.actionText}>Delete Account</span>
            </button>
          </div>
        </div>

        {/* Sign Out Section */}
        <div className={styles.signOutCard}>
          <h2 className={styles.cardTitle}>Sign Out</h2>
          <p className={styles.signOutText}>
            Sign out of your account. You'll need to sign in again to access
            your dashboard.
          </p>
          <button className={styles.signOutButton} onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
