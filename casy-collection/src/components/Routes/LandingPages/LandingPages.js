import React from 'react';
import HourGlassText from '../../LandingPages/HourGlassText/HourGlassText';
import LayeredText from '../../LandingPages/LayeredText/LayeredText';
import styles from './LandingPages.css';

const LandingPages = () => {
  return (
    <div className={styles.LandingPages}>
      {/* <HourGlassText /> */}
      <LayeredText />
    </div>
  );
};

export default LandingPages;
