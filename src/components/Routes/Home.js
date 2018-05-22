import React from 'react';
import HalvingGallery from '../ImageComponents/ImageGalleries/HalvingGallery/HalvingGallery';
import styled from 'styled-components';

import { vpScale } from './../../helpers';
import { ScaleContext } from './../../ScaleContext';

const Test = styled.div`
  background: lightsteelblue;
  width: 100px;
  height: 40vh;
  color: red;
  text-align: center;
  transition: height 1111ms;
`;

const Home = () => {
  return (
    <ScaleContext.Consumer>
      {context => (
        <div>
          <HalvingGallery />
          <Test scale={context.state.scaleHeight}>Test</Test>
        </div>
      )}
    </ScaleContext.Consumer>
  );
};

export default Home;
