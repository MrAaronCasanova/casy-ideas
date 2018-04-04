import React from 'react';
import styles from './Buttons.css';
import DownButton from '../../NavigationComponents/AnchorButtons/DownButton/DownButton';

const Buttons = () => {
  return (
    <div className={styles.Buttons}>
      <DownButton />
    </div>
  );
};

export default Buttons;
