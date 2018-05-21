import React from 'react';
import HalvingGallery from '../ImageComponents/ImageGalleries/HalvingGallery/HalvingGallery';
import styled from 'styled-components';

import { vpScale } from './../../helpers';
import { ScaleContext } from './../../ScaleContext';

const Test = styled.div`
  background: lightsteelblue;
  /* width: ${vpScale(5, 25, 320, 750, 'vwUnit')};
  height: ${vpScale(5, 25, 320, 750, 'vhUnit')}; */
  /* width: ${vpScale(20, 250, 320, 750, 'vwPx')};
  height: ${vpScale(20, 250, 320, 750, 'vhPx')}; */
  width: ${props => vpScale(20, 250, 320, 750, 'sPx', props.scale)};
  /* height: ${props => vpScale(20, 25, 320, 750, 'sUnit', props.scale)}; */
  color: red;
  text-align: center;
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
