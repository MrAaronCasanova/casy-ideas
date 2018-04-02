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
    src:
      'https://images.unsplash.com/photo-1516757932457-9233f965b8d8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c8569c54b9e9ee05072839b91bd643&auto=format&fit=crop&w=2104&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder2',
    src:
      'https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder3',
    src:
      'https://images.unsplash.com/photo-1521566878949-d0febfb1e9bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3b5ee0942ce548abde8fbd1cb096330&auto=format&fit=crop&w=2187&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder4',
    src:
      'https://images.unsplash.com/photo-1521072100039-6052edf01606?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24196c8ba3d9e8c616fe2264840b5e1c&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder5',
    src:
      'https://images.unsplash.com/photo-1520257119747-9591a2d38189?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89acb684d21ffbb4b1224d1034a262e8&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder6',
    src:
      'https://images.unsplash.com/photo-1507720708252-1ddeb1dbff34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4cca8644745ee8c28bbe9332f8f74992&auto=format&fit=crop&w=2268&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder7',
    src:
      'https://images.unsplash.com/photo-1515019915774-f4887104b715?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=501083fc474807a378cffa58ab968934&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder8',
    src:
      'https://images.unsplash.com/photo-1509226704106-8a5a71ffbfa4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68486375215e132fcdb806d175a46e6e&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder9',
    src:
      'https://images.unsplash.com/photo-1506604900144-7360175909e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d437158dff03180ed32cc39401b3a894&auto=format&fit=crop&w=2110&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder10',
    src:
      'https://images.unsplash.com/photo-1465588042420-47a53c2d0320?ixlib=rb-0.3.5&s=4f37726abb95672b44fde576c79aed26&auto=format&fit=crop&w=2190&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder11',
    src:
      'https://images.unsplash.com/photo-1468536029150-d16666b345a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76cbe28a65bee152cb0d6fb2898cfb4f&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder12',
    src:
      'https://images.unsplash.com/photo-1520048556304-24843baf802e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b0f910f1f8b0ef939d9fbd63bc6702e&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder13',
    src:
      'https://images.unsplash.com/photo-1493087670264-2f7f5844b402?ixlib=rb-0.3.5&s=1d948790e06c2489da1b933d13601670&auto=format&fit=crop&w=2098&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder14',
    src:
      'https://images.unsplash.com/photo-1490596541415-5afadbfbbf02?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6648b450dbe757608f0c4ed85eef6256&auto=format&fit=crop&w=2218&q=80',
    alt: 'Buttons Section'
  },
  {
    title: 'Placeholder15',
    src:
      'https://images.unsplash.com/photo-1489566072773-ddefc463a599?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2f85d67d51971a9f73cf983f40b3271f&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section'
  }
];

// div with class imageItem required

const HalvingGallery = () => {
  return (
    <div className={styles.HalvingGallery}>
      <div className={styles.imageContainer}>
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
