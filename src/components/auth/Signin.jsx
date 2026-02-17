import React, { useState } from 'react';
import styles from './Signin.module.css';
import { Eye, EyeOff } from 'lucide-react';
import AuthLeftPanel from './AuthLeftPanel';

const Signin = ({ onSignin, onNavigate }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, validate and authenticate here
        if (onSignin) onSignin();
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.ellipseTopLeft}></div>
            <div className={styles.ellipseTopRight}></div>
            <div className={styles.ellipseBottomRight}></div>
            <div className={styles.container}>
                {/* Left Panel */}
                <AuthLeftPanel />

                {/* Right Panel - Form */}
                <div className={styles.rightPanel}>
                    <div className={styles.mobileBrand}>Khushatech ERP System</div>
                    <h1 className={styles.formTitle}>Sign In Account</h1>
                    <p className={styles.formSubtitle}>Enter your personal data to create account.</p>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Enter First Name"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Enter Last Name"
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup} style={{ marginBottom: '20px' }}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Enter Email"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Password</label>
                            <div className={styles.passwordWrapper}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={styles.passwordInput}
                                    placeholder="Enter Password"
                                />
                                <button
                                    type="button"
                                    className={styles.passwordToggle}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Sign In
                        </button>

                        <p className={styles.footerText}>
                            Don't have an account?
                            <button
                                type="button"
                                onClick={() => onNavigate('signup')}
                                className={styles.link}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                            >
                                Create free account
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
