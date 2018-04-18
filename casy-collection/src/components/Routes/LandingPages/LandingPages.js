import React from 'react';
import styles from './LandingPages.css';
import LayeredText from '../../LandingPages/LayeredText/LayeredText';
import ApiccoLanding from '../../LandingPages/ApiccoLanding/ApiccoLanding';
// import HourGlassText from '../../LandingPages/HourGlassText/HourGlassText';
// import Transitions from './Transitions/Transitions';

const LandingPages = () => {
  return (
    <div className={styles.LandingPages}>
      <div>
        <LayeredText />
      </div>
      <div>
        <ApiccoLanding />
      </div>
      {/* <HourGlassText /> */}
      {/* <Transitions /> */}
    </div>
  );
};

export default LandingPages;
