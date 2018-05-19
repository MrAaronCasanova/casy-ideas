import React, { Component } from 'react';

export const ScaleContext = React.createContext();

export class ScaleProvider extends Component {
  state = {
    scale: null,
    scaleWidth: null,
    scaleHeight: null
  };

  getScale = () => {
    let scaleWidth = document.documentElement.clientWidth;
    let scaleHeight = document.documentElement.clientHeight;
    // let scaleWidth = window.innerWidth;
    // let scaleHeight = window.innerHeight;
    let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
    return {
      scaleWidth,
      scaleHeight,
      scale
    };
  };
  componentWillMount() {
    let scale = this.getScale();
    this.setState({
      ...scale
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
        {this.props.children}
      </ScaleContext.Provider>
    );
  }
}
