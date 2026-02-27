import React, { useState } from 'react';
import styles from './Profile.module.css';
import { Eye, EyeOff } from 'lucide-react';
import Button from '../Button';

const Profile = ({ onLogout }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const [profileData, setProfileData] = useState({
        firstName: "Employee",
        lastName: "Name",
        email: "employeeemail@gmail.com",
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    });

    const [password, setPassword] = useState("password123");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
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
                            name="firstName"
                            className={styles.input}
                            value={profileData.firstName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Last Name</label>
                    <div className={`${styles.inputWrapper} ${!isEditing ? styles.disabled : ''}`}>
                        <input
                            type="text"
                            name="lastName"
                            className={styles.input}
                            value={profileData.lastName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <div className={`${styles.inputWrapper} ${!isEditing ? styles.disabled : ''}`}>
                        <input
                            type="email"
                            name="email"
                            className={styles.input}
                            value={profileData.email}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <div className={`${styles.inputWrapper} ${!isEditing ? styles.disabled : ''}`}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
