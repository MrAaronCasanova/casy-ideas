import React from 'react';
import HourGlassText from '../../LandingPages/HourGlassText/HourGlassText';
import LayeredText from '../../LandingPages/LayeredText/LayeredText';
import Transitions from './Transitions/Transitions';
import styles from './LandingPages.css';

const LandingPages = () => {
  return (
    <div className={styles.LandingPages}>
      {/* <HourGlassText /> */}
      <Transitions />
      <LayeredText />
    </div>
  );
};

export default LandingPages;
