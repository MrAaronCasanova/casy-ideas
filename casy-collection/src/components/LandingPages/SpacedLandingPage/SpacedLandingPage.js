import React, { Component } from 'react';
import styles from './SpacedLandingPage.css';

class SpacedLandingPage extends Component {
  state = {
    scale: 1,
    widthHeight: 275
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      let scaleWidth = window.screen.availWidth;
      let scaleHeight = window.screen.availHeight;
      let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
      this.setState({
        scale: 0.4 + (1 - 0.4) * (scale - 360) / (960 - 360),
        widthHeight: 275 + (350 - 275) * (scale - 360) / (960 - 360)
      });
    });
  }

  render() {
    // console.log(this.state.scale);
    console.log(this.state.widthHeight);
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
            width: `${this.state.widthHeight}px`,
            height: `${this.state.widthHeight}px`
          }}
          // style={{ transform: `scale(${this.state.scale})` }}
          // style={{ transform: `scale(${scaleHeight})` }}
        >
          <div className={styles.boxOne}>
            <div className={styles.circleContent}>
              <h2 className={styles.circleHeading}>SPACED</h2>
              <p className={styles.circleText}>To space and back, safely</p>
            </div>
          </div>
        </div>
        <div className={styles.flipText}>
          <p>1st space airline company</p>
          <p>few steps to the moon</p>
        </div>
      </div>
    );
  }
}

export default SpacedLandingPage;
