import React, { Component } from 'react';

export const ScaleContext = React.createContext();

export class ScaleProvider extends Component {
  state = {
    scale: null,
    scaleWidth: null,
    scaleHeight: null,
    isMobileDevice: null
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

  render() {
    return (
      <ScaleContext.Provider
        value={{
          state: this.state
        }}
      >
        {console.log(this.state.isMobileDevice)}
        {this.props.children}
      </ScaleContext.Provider>
    );
  }
}
