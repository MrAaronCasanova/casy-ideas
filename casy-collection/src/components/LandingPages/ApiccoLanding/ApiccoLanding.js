import React from 'react';
import styles from './ApiccoLanding.css';

const ApiccoLanding = () => {
  return (
    <div className={styles.ApiccoLanding}>
      <div className={styles.navContainer}>
        <h2 className={styles.logo}>apicco</h2>
        <div className={styles.hammy} />
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.subHeading}>Iris von Arnim</h4>
        <h3 className={styles.mainHeading}>Branding Commerce</h3>
        <p className={styles.link}>View Case Study</p>
      </div>
      <div className={styles.imgContainer}>
        <img src="https://source.unsplash.com/random" alt="" />
        <div className={styles.shape} />
      </div>
    </div>
  );
};

export default ApiccoLanding;
