import React, { Component } from 'react';
import styles from './SpacedLandingPage.css';

let getScale = () => {
  let scaleWidth = window.innerWidth;
  let scaleHeight = window.innerHeight;
  let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
  return scale;
};

let circleSizeScale = scale => {
  return 275 + (500 - 275) * (scale - 360) / (960 - 360);
};

let circleHeadingScale = scale => {
  return 27 + (40 - 27) * (scale - 320) / (960 - 320);
};

let circleTextScale = scale => {
  return 16 + (32 - 16) * (scale - 320) / (960 - 320);
};

class SpacedLandingPage extends Component {
  state = {
    circleSizeScale: null,
    circleHeadingScale: null,
    circleTextScale: null
  };

  componentWillMount() {
    let scale = getScale();
    this.setState({
      circleSizeScale: circleSizeScale(scale),
      circleHeadingScale: circleHeadingScale(scale),
      circleTextScale: circleTextScale(scale)
    });
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      let scale = getScale();
      this.setState({
        circleSizeScale: circleSizeScale(scale),
        circleHeadingScale: circleHeadingScale(scale),
        circleTextScale: circleTextScale(scale)
      });
    });
  }

  render() {
    return (
      <div className={styles.SpacedLandingPage}>
        <img
          className={styles.image}
          src="https://images.pexels.com/photos/347761/pexels-photo-347761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="moon"
        />
        <div
          className={styles.circle}
          style={{
            width: `${this.state.circleSizeScale}px`,
            height: `${this.state.circleSizeScale}px`
          }}
        >
          <div className={styles.boxOne}>
            <div className={styles.circleContent}>
              <h2
                className={styles.circleHeading}
                style={{
                  fontSize: `${this.state.circleHeadingScale}px`
                }}
              >
                SPACED
              </h2>
              <p
                className={styles.circleText}
                style={{
                  fontSize: `${this.state.circleTextScale}px`
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
    );
  }
}

export default SpacedLandingPage;
