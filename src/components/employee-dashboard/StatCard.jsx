import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ icon, value, label, type = 'neutral', colored = false }) => {
  const cardClassName = `${styles.card} ${colored ? styles[`colored-${type}`] : ''}`;

  return (
    <div className={cardClassName}>
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
