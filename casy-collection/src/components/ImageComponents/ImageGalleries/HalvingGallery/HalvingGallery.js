import React from 'react';
import UnderlineTextImage from '../../ImageEffects/UnderlineTextImage/UnderlineTextImage';
import styles from './HalvingGallery.css';

const categories = [
  {
    title: 'Navbars',
    src:
      'https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Navbars Section'
  },
  {
    title: 'Images',
    src:
      'https://images.pexels.com/photos/327803/pexels-photo-327803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Images Section'
  },
  {
    title: 'Buttons',
    src:
      'https://images.pexels.com/photos/243059/pexels-photo-243059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder1',
    src: 'https://source.unsplash.com/random/800x600',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder2',
    src: 'https://source.unsplash.com/random/800x601',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder3',
    src: 'https://source.unsplash.com/random/800x602',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder4',
    src: 'https://source.unsplash.com/random/800x603',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder5',
    src: 'https://source.unsplash.com/random/800x604',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder6',
    src: 'https://source.unsplash.com/random/800x605',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder7',
    src: 'https://source.unsplash.com/random/800x606',
    alt: 'Buttons Section'
  }
];

const HalvingGallery = () => {
  let count = 0;
  return (
    <div className={styles.HalvingGallery}>
      <div className={styles.imageContainer}>
        {categories.map(category => {
          count++;
          console.log(count);
          if (count < 4) {
            return (
              <UnderlineTextImage
                large={styles.largeThree}
                key={category.title}
                category={category}
              />
            );
          } else if (count < 6) {
            if (count === 5) {
              count = 0;
            }
            return (
              <UnderlineTextImage
                large={styles.largeTwo}
                key={category.title}
                category={category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default HalvingGallery;
