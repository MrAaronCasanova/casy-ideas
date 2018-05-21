import React, { Component } from 'react';
import styles from './SpacedLandingPage.css';
import { ScaleContext } from './../../../ScaleContext';
import { vpScale } from './../../../helpers';
import styled from 'styled-components';

const SpacedLandingWrapper = styled.div`
  height: ${vpScale(100, 100, 320, 1300, 'vhUnit')};
  /* color: ${props => console.log(vpScale(100, 100, 320, 1300, 'vhUnit'))}; */
`;

const imageY = vpScale(100, 200, 320, 960, 'vhPx');

const Image = styled.img`
  --y: ${imageY}
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(
    calc(-50px + (-200 - -50) * (100vw - 320px) / (960 - 320)),
    var(--y)
  );
  /* transform: translate(
    calc(-50px + (-200 - -50) * (100vw - 320px) / (960 - 320)),
    calc(100px + (200 - 100) * (100vh - 360px) / (960 - 360))
  ); */
`;

const Circle = styled.div`
  color: var(--circle-color);
  border: 5px solid;
  background: transparent;
  position: absolute;
  top: ${vpScale(19, 230, 320, 960, 'vhPx')};
  left: calc(20px + (260 - 20) * (100vw - 320px) / (960 - 320));
  width: ${props => vpScale(275, 500, 360, 960, 'sPx', props.scale)};
  height: ${props => vpScale(275, 500, 360, 960, 'sPx', props.scale)};
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
`;

const Heading = styled.h2`
  font-size: ${props => vpScale(27, 40, 320, 960, 'sPx', props.scale)};
`;

const Text = styled.p`
  font-size: ${props => vpScale(16, 32, 320, 960, 'sPx', props.scale)};
`;

class SpacedLandingPage extends Component {
  render() {
    return (
      <ScaleContext.Consumer>
        {context => (
          <SpacedLandingWrapper
            scale={context.state.scale}
            className={styles.SpacedLandingPage}
          >
            <Image
              src="https://images.pexels.com/photos/347761/pexels-photo-347761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="moon"
            />
            <Circle scale={context.state.scale}>
              <div className={styles.boxOne}>
                <div className={styles.circleContent}>
                  <Heading
                    scale={context.state.scale}
                    className={styles.circleHeading}
                  >
                    SPACED
                  </Heading>
                  <Text
                    scale={context.state.scale}
                    className={styles.circleText}
                  >
                    To space and back, safely
                  </Text>
                </div>
              </div>
            </Circle>
            <div className={styles.flipText}>
              <p>1st space airline company</p>
              <p>few steps to the moon</p>
            </div>
            <div className={styles.horzText}>
              <p>1st space airline company</p>
              <p>few steps to the moon</p>
            </div>
          </SpacedLandingWrapper>
        )}
      </ScaleContext.Consumer>
    );
  }
}

export default SpacedLandingPage;
