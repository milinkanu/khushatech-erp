import React, { useState } from 'react';
import styles from './Profile.module.css';
import { Eye, EyeOff } from 'lucide-react';

const Profile = ({ onLogout }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // Hardcoded information from screenshot as requested
    // Ignoring the passed 'user' prop for now to ensure these exact details show up
    const profileData = {
        firstName: "Khushboo",
        lastName: "Bharati",
        email: "khushboobharati18@gmail.com",
        role: "CEO & Founder",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <div className={styles.avatarContainer}>
                        <img src={profileData.avatar} alt="Profile" className={styles.avatar} />
                    </div>
                    <div className={styles.userDetails}>
                        <h2>{profileData.firstName} {profileData.lastName}</h2>
                        <p>{profileData.role}</p>
                    </div>
                </div>
                <button
                    className={styles.editButton}
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
            </div>

            <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>First Name</label>
                    <div className={`${styles.inputWrapper} ${!isEditing ? styles.disabled : ''}`}>
                        <input
                            type="text"
                            className={styles.input}
                            defaultValue={profileData.firstName}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Last Name</label>
                    <div className={`${styles.inputWrapper} ${!isEditing ? styles.disabled : ''}`}>
                        <input
                            type="text"
                            className={styles.input}
                            defaultValue={profileData.lastName}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <div className={`${styles.inputWrapper} ${!isEditing ? styles.disabled : ''}`}>
                        <input
                            type="email"
                            className={styles.input}
                            defaultValue={profileData.email}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <div className={`${styles.inputWrapper} ${!isEditing ? styles.disabled : ''}`}>
                        <input
                            type={showPassword ? "text" : "password"}
                            className={styles.input}
                            defaultValue="password123"
                            disabled={!isEditing}
                        />
                        <button
                            className={styles.passwordToggle}
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={!isEditing}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            <button className={styles.logoutButton} onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};

export default Profile;
