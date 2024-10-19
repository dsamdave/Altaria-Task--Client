import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={`${styles.spinnerOverlay} ${styles.visible}`}>
      <div className={styles.rippleContainer}>
        <div className={`${styles.ripple} ${styles.ripple1}`} />
        <div className={`${styles.ripple} ${styles.ripple2}`} />
        <div className={`${styles.ripple} ${styles.ripple3}`} />
      </div>
    </div>
  );
};

export default Spinner;
