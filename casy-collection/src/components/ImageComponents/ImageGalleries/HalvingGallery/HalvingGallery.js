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
  },
  {
    title: 'Placeholder8',
    src: 'https://source.unsplash.com/random/800x607',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder9',
    src: 'https://source.unsplash.com/random/800x608',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder10',
    src: 'https://source.unsplash.com/random/800x609',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder11',
    src: 'https://source.unsplash.com/random/800x610',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder12',
    src: 'https://source.unsplash.com/random/800x611',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder13',
    src: 'https://source.unsplash.com/random/800x6012',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder14',
    src: 'https://source.unsplash.com/random/800x613',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder15',
    src: 'https://source.unsplash.com/random/800x614',
    alt: 'Buttons Section'
  }
];

// let items = [
//   'hello',
//   'world',
//   'my',
//   'name',
//   'is',
//   'aaron',
//   'casanova',
//   'and',
//   'I',
//   'like',
//   'to',
//   '...',
//   '...',
//   '...',
//   '...',
//   '...',
//   '...',
//   '...',
//   '...',
//   '...',
//   '...',
//   '...'
// ];

const HalvingGallery = () => {
  let count = 0;
  return (
    <div className={styles.HalvingGallery}>
      <div className={styles.imageContainer}>
        {/* {categories.map(category => {
          count++;
          console.log('-----------------');
          console.log(`Count: ${count}`);
          console.log(`Three: ${count % 3}`);
          console.log(`Four: ${count % 4}`);
          console.log(`Five: ${count % 5}`);
          console.log('-----------------');
          if (count % 3 === 0 || count % 4 === 0 || count % 5 === 0) {
            console.log('^^^---in here!!!---^^^');
            return (
              <UnderlineTextImage
                large={styles.largeTwo}
                key={category.title}
                category={category}
              />
            );
          }
          return (
            <UnderlineTextImage
              large={styles.largeThree}
              key={category.title}
              category={category}
            />
          );
        })} */}
        {categories.map(category => {
          return (
            <div key={category.title} className={styles.imageItem}>
              <UnderlineTextImage category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HalvingGallery;
