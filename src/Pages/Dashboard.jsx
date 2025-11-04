import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Module/Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-01-01",
  });

  const [editData, setEditData] = useState({ ...userData });

  // Load user data from localStorage or API
  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUserData(parsedUser);
      setEditData(parsedUser);
    }
  }, []);

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing - reset to original data
      setEditData({ ...userData });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData({ ...editData });
    localStorage.setItem("userData", JSON.stringify(editData));
    setIsEditing(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleChangePassword = () => {
    // Navigate to change password page or show modal
    alert("Change password functionality would be implemented here");
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      localStorage.removeItem("userData");
      localStorage.removeItem("isLoggedIn");
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
                {userData.fullName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </span>
            </div>
            <button className={styles.changePhotoButton}>
              <span>📷</span> Change Photo
            </button>
          </div>
        </div>
        <div className={styles.profileInfo}>
          <h1 className={styles.profileName}>{userData.fullName}</h1>
          <p className={styles.profileEmail}>{userData.email}</p>
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

          <div className={styles.profileForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={editData.fullName}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              ) : (
                <p className={styles.formValue}>{userData.fullName}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              ) : (
                <p className={styles.formValue}>{userData.email}</p>
              )}
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
