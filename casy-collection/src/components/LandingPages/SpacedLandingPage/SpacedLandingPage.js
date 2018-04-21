import React from 'react';
import styles from './SpacedLandingPage.css';

const SpacedLandingPage = () => {
  return (
    <div className={styles.SpacedLandingPage}>
      <img
        className={styles.image}
        src="https://images.pexels.com/photos/347761/pexels-photo-347761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="moon"
      />
      <div className={styles.circle} style={{ color: 'red' }}>
        <div className={styles.boxOne}>
          <div className={styles.circleContent}>
            <h2 className={styles.circleHeading}>SPACED</h2>
            <p className={styles.circleText}>To space and back, safely</p>
          </div>
        </div>
      </div>
      <div className={styles.flipText}>
        <p>1st space airline company</p>
        <p>few steps to the moon</p>
      </div>
    </div>
  );
};

export default SpacedLandingPage;
