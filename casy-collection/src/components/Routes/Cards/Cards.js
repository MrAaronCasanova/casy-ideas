import React from 'react';
import styles from './Cards.css';
import GrowingBorder from '../../CardComponents/GrowingBorder/GrowingBorder';
import PoppingCard from '../../CardComponents/PoppingCard/PoppingCard';

const Cards = () => {
  return (
    <div className={styles.Cards}>
      <div className={styles.PoppingCard}>
        <PoppingCard />
        <PoppingCard />
      </div>
      <div className={styles.GrowingBorder}>
        <GrowingBorder />
      </div>
    </div>
  );
};

export default Cards;
