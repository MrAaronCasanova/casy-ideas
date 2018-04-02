import React from 'react';
import styles from './UnderlineTextImage.css';
import HalvingStyles from '../../ImageGalleries/HalvingGallery/HalvingGallery.css';

const UnderlineTextImage = props => {
  return (
    <div className={`${styles.imageGalleryPicture} ${props.large}`}>
      <h2 className={styles.imageGalleryTitle}>{props.category.title}</h2>
      <a href="/">
        <img src={props.category.src} alt={props.category.alt} />
      </a>
    </div>
  );
};

export default UnderlineTextImage;
