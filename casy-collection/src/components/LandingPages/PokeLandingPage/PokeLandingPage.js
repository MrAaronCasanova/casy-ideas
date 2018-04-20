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
        <img
          className={styles.circle}
          src="http://www.onlygfx.com/wp-content/uploads/2017/07/circle-brush-stroke-12.png"
          alt="circle"
        />
        <img
          className={`${styles.img} ${styles.man}`}
          src="https://images.pexels.com/photos/156731/pexels-photo-156731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="record player"
        />
        <img
          className={`${styles.img} ${styles.piano}`}
          src="https://images.pexels.com/photos/159420/piano-instrument-music-keys-159420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="piano"
        />
      </div>
    </div>
  );
};

export default PokeLandingPage;
