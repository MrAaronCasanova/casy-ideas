import React from 'react';
import styles from './UnderlineTextImage.css';

const UnderlineTextImage = () => {
  return (
    <div className={styles.imageGalleryPicture}>
      <h2 className={styles.imageGalleryTitle}>Images</h2>
      <a href="components/images/images-index.html">
        <img
          src="https://images.pexels.com/photos/327803/pexels-photo-327803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Section Button"
        />
      </a>
    </div>
  );
};

export default UnderlineTextImage;
