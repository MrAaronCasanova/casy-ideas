import React from 'react';
import styles from './LayeredText.css';

const LayeredText = () => {
  return (
    <div className={styles.LayeredText}>
      <div className={styles.mainContainer}>
        <h2 className={styles.backgroundText}>923</h2>
        <h3 className={styles.first}>Arts</h3>
        <h3 className={styles.second}>Graphiques</h3>
        <h3 className={styles.third}>Metiers</h3>
        <h3 className={styles.fourth}>Paris</h3>
      </div>
      <h3>
        <a
          style={{
            display: 'inline-block',
            padding: '50px',
            fontSize: 'calc(14px + (25 - 14) * (100vw - 320px) / (960 - 320))'
          }}
          href="https://www.allposters.com/-sp/Arts-et-Metiers-Graphiques-Paris-34-Posters_i14354497_.htm?UPI=F8JO010&sOrigID=106509"
          target="_blank"
          rel="noopener noreferrer"
        >
          Example Found Here
        </a>
      </h3>
    </div>
  );
};

export default LayeredText;
