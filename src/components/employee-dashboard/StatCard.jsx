
import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ icon, value, label, type = 'neutral' }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.iconWrapper} ${styles[type]}`}>
        {icon}
      </div>
      <div className={styles.content}>
        <span className={styles.value}>{value}</span>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  );
};

export default StatCard;
