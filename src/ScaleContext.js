import React, { Component } from 'react';

export const ScaleContext = React.createContext();

export class ScaleProvider extends Component {
  state = {
    scale: null,
    scaleWidth: null,
    scaleHeight: null,
    isMobileDevice: null
    // orientation: false
  };

  isMobileDevice = () => {
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    );
  };

  getScale = () => {
    let scaleWidth = window.innerWidth;
    let scaleHeight = window.innerHeight;
    let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
    return {
      scaleWidth,
      scaleHeight,
      scale
    };
  };

  componentWillMount() {
    let mobile = this.isMobileDevice();
    let scale = this.getScale();
    this.setState({
      ...scale,
      isMobileDevice: mobile
    });

    window.addEventListener('resize', () => {
      let scale = this.getScale();
      this.setState({
        ...scale
      });
    });
  }

  // handleChange = () => {
  //   var self = this; // Store `this` component outside the callback
  //   if ('onorientationchange' in window) {
  //     window.addEventListener(
  //       'orientationchange',
  //       function() {
  //         // `this` is now pointing to `window`, not the component. So use `self`.
  //         self.setState({
  //           orientation: !self.state.orientation
  //         });
  //         console.log('onorientationchange');
  //       },
  //       false
  //     );
  //   } else if ('onresize' in window) {
  //     window.addEventListener(
  //       'resize',
  //       function() {
  //         self.setState({
  //           orientation: !self.state.orientation
  //         });
  //         console.log('resize');
  //       },
  //       false
  //     );
  //   }
  // };

  // componentDidMount() {
  //   this.handleChange();
  // }

  render() {
    return (
      <ScaleContext.Provider
        value={{
          state: this.state
        }}
      >
        {/* <p>{`${this.state.orientation}`}</p> */}
        {/* {console.log(this.state.isMobileDevice)} */}
        {this.props.children}
      </ScaleContext.Provider>
    );
  }
}

export let scaleWidth = window.innerWidth;
export let scaleHeight = window.innerHeight;
export let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
