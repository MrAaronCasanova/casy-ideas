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
      <h3>
        https://www.allposters.com/-sp/Arts-et-Metiers-Graphiques-Paris-34-Posters_i14354497_.htm?UPI=F8JO010&sOrigID=106509
      </h3>
    </div>
  );
};

export default LandingPages;
