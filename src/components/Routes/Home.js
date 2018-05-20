import React from 'react';
import HalvingGallery from '../ImageComponents/ImageGalleries/HalvingGallery/HalvingGallery';
import styled from 'styled-components';

import { vpScale } from './../../helpers';
import { ScaleContext } from './../../ScaleContext';

// const Test = styled.div`
//   background: lightsteelblue;
//   width: ${props => vpScale(75, 400, 320, 750, 'sPx', props.scale)};
//   height: ${props => vpScale(75, 400, 320, 750, 'sPx', props.scale)};
//   color: red;
//   text-align: center;
// `;

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
