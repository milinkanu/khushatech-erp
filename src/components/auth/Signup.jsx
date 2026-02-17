import React, { useState } from 'react';
import styles from './Signin.module.css';
import { Eye, EyeOff } from 'lucide-react';
import AuthLeftPanel from './AuthLeftPanel';

const Signup = ({ onNavigate, onSignin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input
        if (element.nextSibling && element.value !== "") {
            element.nextSibling.focus();
        }
    };

    const handleGetOtp = () => {
        // In a real app, validate form and send OTP
        setShowOtp(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!showOtp) {
            handleGetOtp();
        } else {
            // Verify OTP and complete signup
            if (onSignin) onSignin();
        }
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
                    <h1 className={styles.formTitle}>Sign Up Account</h1>
                    <p className={styles.formSubtitle}>Enter your personal data to create account.</p>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Enter First Name"
                                    required
                                    disabled={showOtp}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Enter Last Name"
                                    required
                                    disabled={showOtp}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup} style={{ marginBottom: '20px' }}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Enter Email"
                                required
                                disabled={showOtp}
                            />
                        </div>

                        <div className={styles.formGroup} style={{ marginBottom: showOtp ? '20px' : '0px' }}>
                            <label className={styles.label}>Password</label>
                            <div className={styles.passwordWrapper}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={styles.passwordInput}
                                    placeholder="Enter Password"
                                    required
                                    disabled={showOtp}
                                />
                                <button
                                    type="button"
                                    className={styles.passwordToggle}
                                    onClick={() => setShowPassword(!showPassword)}
                                    disabled={showOtp}
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {showOtp && (
                            <div className={styles.formGroup}>
                                <label className={styles.otpLabel}>Enter OTP</label>
                                <div className={styles.otpContainer}>
                                    {otp.map((data, index) => (
                                        <input
                                            className={styles.otpInput}
                                            type="text"
                                            name="otp"
                                            maxLength="1"
                                            key={index}
                                            value={data}
                                            onChange={e => handleOtpChange(e.target, index)}
                                            onFocus={e => e.target.select()}
                                            required
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <button type="submit" className={styles.submitButton}>
                            {showOtp ? 'Sign Up' : 'Get OTP'}
                        </button>

                        <p className={styles.footerText}>
                            Already have an account?
                            <button
                                type="button"
                                onClick={() => onNavigate('signin')}
                                className={styles.link}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                            >
                                Sign In
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
