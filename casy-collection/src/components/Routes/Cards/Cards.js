import React from 'react';
import styles from './Cards.css';
import TextField from '../../TextComponents/TextField/TextField';
import PoppingCard from '../../CardComponents/PoppingCard/PoppingCard';

const Cards = () => {
  return (
    <div className={styles.Cards}>
      <div className={styles.PoppingCard}>
        <PoppingCard />
        <PoppingCard />
      </div>
      <div className={styles.TextField}>
        <TextField />
      </div>
    </div>
  );
};

export default Cards;
