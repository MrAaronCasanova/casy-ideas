import React from 'react';
import HalvingGallery from '../ImageComponents/ImageGalleries/HalvingGallery/HalvingGallery';

const Home = () => {
  return (
    <div>
      {/* <div>
        <h2 style={{ marginLeft: `${20}px`, textAlign: 'center' }}>
          <span>&#8867;</span>
          <span style={{ margin: `${0} ${20}px` }}>Discover</span>
          <span>&#8866;</span>
        </h2>
      </div> */}
      <HalvingGallery />
    </div>
  );
};

export default Home;
