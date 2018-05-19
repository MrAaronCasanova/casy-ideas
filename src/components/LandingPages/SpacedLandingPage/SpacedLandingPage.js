import React, { Component } from 'react';
import styles from './SpacedLandingPage.css';
import { ScaleContext } from './../../../ScaleContext';

class SpacedLandingPage extends Component {
  circleSizeScale = scale => {
    return 275 + (500 - 275) * (scale - 360) / (960 - 360);
  };

  circleHeadingScale = scale => {
    return 27 + (40 - 27) * (scale - 320) / (960 - 320);
  };

  circleTextScale = scale => {
    return 16 + (32 - 16) * (scale - 320) / (960 - 320);
  };

  render() {
    return (
      <ScaleContext.Consumer>
        {context => (
          <div className={styles.SpacedLandingPage}>
            <img
              className={styles.image}
              src="https://images.pexels.com/photos/347761/pexels-photo-347761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="moon"
            />
            <div
              className={styles.circle}
              style={{
                width: `${this.circleSizeScale(context.state.scale)}px`,
                height: `${this.circleSizeScale(context.state.scale)}px`
              }}
            >
              <div className={styles.boxOne}>
                <div className={styles.circleContent}>
                  <h2
                    className={styles.circleHeading}
                    style={{
                      fontSize: `${this.circleHeadingScale(
                        context.state.scale
                      )}px`
                    }}
                  >
                    SPACED
                  </h2>
                  <p
                    className={styles.circleText}
                    style={{
                      fontSize: `${this.circleTextScale(context.state.scale)}px`
                    }}
                  >
                    To space and back, safely
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.flipText}>
              <p>1st space airline company</p>
              <p>few steps to the moon</p>
            </div>
            <div className={styles.horzText}>
              <p>1st space airline company</p>
              <p>few steps to the moon</p>
            </div>
          </div>
        )}
      </ScaleContext.Consumer>
    );
  }
}

export default SpacedLandingPage;
