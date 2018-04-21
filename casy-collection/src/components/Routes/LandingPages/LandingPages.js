import React from 'react';
import styles from './LandingPages.css';
import ViewExampleBtn from './../../MiscComponents/ViewExampleBtn';
import LayeredText from '../../LandingPages/LayeredText/LayeredText';
import ApiccoLanding from '../../LandingPages/ApiccoLanding/ApiccoLanding';
import PokeLandingPage from './../../LandingPages/PokeLandingPage/PokeLandingPage';
import SpacedLandingPage from './../../LandingPages/SpacedLandingPage/SpacedLandingPage';
// import HourGlassText from '../../LandingPages/HourGlassText/HourGlassText';
// import Transitions from './Transitions/Transitions';

const LandingPages = () => {
  return (
    <div className={styles.LandingPages}>
      <div>
        <LayeredText />
        <ViewExampleBtn href="https://www.allposters.com/-sp/Arts-et-Metiers-Graphiques-Paris-34-Posters_i14354497_.htm?UPI=F8JO010&sOrigID=106509" />
      </div>
      <div>
        <ApiccoLanding />
        <ViewExampleBtn href="https://appico.com/" />
      </div>
      <div>
        <PokeLandingPage />
        <ViewExampleBtn href="https://dribbble.com/shots/3078965-Poke-Header-Panel" />
      </div>
      <div>
        <SpacedLandingPage />
        <ViewExampleBtn href="https://dribbble.com/shots/4209495-SPACED" />
      </div>
      {/* <HourGlassText /> */}
      {/* <Transitions /> */}
    </div>
  );
};

export default LandingPages;
