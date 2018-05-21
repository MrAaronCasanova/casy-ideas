import React from 'react';
import HalvingGallery from '../ImageComponents/ImageGalleries/HalvingGallery/HalvingGallery';
import styled from 'styled-components';

import { vpScale } from './../../helpers';
import { ScaleContext } from './../../ScaleContext';

// const Test = styled.div`
//   background: lightsteelblue;
//   width: ${props => vpScale(20, 250, 320, 750, 'sPx', props.scale)};
//   color: red;
//   text-align: center;
// `;

// setTimeout(() => {
//   forceUpdate();
//   console.log('hey you guys');
// }, 5000);

const Home = () => {
  return (
    <ScaleContext.Consumer>
      {context => (
        <div>
          <HalvingGallery />
          {/* <Test scale={context.state.scaleHeight}>Test</Test> */}
        </div>
      )}
    </ScaleContext.Consumer>
  );
};

export default Home;
