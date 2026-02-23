import React, { useState, useEffect } from 'react';
import styles from './Signin.module.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import authBg from '../../assets/images/auth-bg.jpg';

const slides = [
    {
        title: "You can easily",
        highlight: "Manage Projects,",
        content: <>Access and track your<br />assigned projects easily.</>
    },
    {
        title: "You can easily",
        highlight: "Update Tasks,",
        content: <>Change task status<br />and stay on schedule.</>
    },
    {
        title: "You can easily",
        highlight: "Track Attendance,",
        content: <>Clock in, manage breaks,<br />and view working hours.</>
    },
    {
        title: "You can easily",
        highlight: "Apply Leave,",
        content: <>Submit and monitor<br />leave requests quickly.</>
    }
];

const AuthLeftPanel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, [currentIndex]); // Using currentIndex here effectively resets the timer on manual interaction

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlide = slides[currentIndex];

    return (
        <div className={styles.leftPanel} style={{ backgroundImage: `url(${authBg})` }}>
            <div className={styles.brandBadge}>Khushatech ERP System</div>

            <div className={styles.bottomContent}>
                <div className={styles.arrowsContainer}>
                    <button className={styles.arrowButton} onClick={handlePrev} type="button">
                        <ArrowLeft size={24} strokeWidth={1} />
                    </button>
                    <button className={styles.arrowButton} onClick={handleNext} type="button">
                        <ArrowRight size={24} strokeWidth={1} />
                    </button>
                </div>

                <div className={styles.infoCard}>
                    <p className={styles.infoTitle}>{currentSlide.title}</p>
                    <h2 className={styles.infoHighlight}>
                        {currentSlide.highlight}
                    </h2>
                    <h3 className={styles.infoHeading}>
                        {currentSlide.content}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AuthLeftPanel;
