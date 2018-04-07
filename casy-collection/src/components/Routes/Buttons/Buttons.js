import React from 'react';
import styles from './Buttons.css';
import DownButton from '../../NavigationComponents/AnchorButtons/DownButton/DownButton';
import DarkenButton from '../../ButtonComponents/DarkenButton/DarkenButton';
import OutlineButton from '../../ButtonComponents/OutlineButton/OutlineButton';
import BlockButton from '../../ButtonComponents/BlockButton/BlockButton';

const Buttons = () => {
  return (
    <div className={styles.Buttons}>
      <div>
        <h2>DownButton</h2>
        <DownButton />
      </div>
      <div>
        <h2>DarkenButton</h2>
        <DarkenButton />
      </div>
      <div>
        <h2>OutlineButton</h2>
        <OutlineButton />
      </div>
      <div>
        <h2>BlockButton</h2>
        <BlockButton />
      </div>
    </div>
  );
};

export default Buttons;
