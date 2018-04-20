import React from 'react';
import styles from './PokeLandingPage.css';

const PokeLandingPage = () => {
  return (
    <div className={styles.PokeLandingPage}>
      <div className={styles.bgColorContainer}>
        <ul className={styles.navContainer}>
          <li>News</li>
          <li>Archive</li>
          <li>Upcoming</li>
          <li>Contact</li>
        </ul>
        <h2 className={styles.mainHeading}>Poke</h2>
      </div>
      <img
        className={`${styles.img} ${styles.record}`}
        src="https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="record player"
      />
      <img
        className={`${styles.img} ${styles.piano}`}
        src="https://images.pexels.com/photos/159420/piano-instrument-music-keys-159420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="piano"
      />
    </div>
  );
};

export default PokeLandingPage;
