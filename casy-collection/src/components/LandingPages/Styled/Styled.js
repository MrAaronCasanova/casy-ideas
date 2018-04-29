import React, { Component } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(
    100px + (400 - 20) * (${props => props.scale} - 320px) / (1000 - 320)
  );
  height: calc(
    100px + (400 - 20) * (${props => props.scale} - 320px) / (1000 - 320)
  );
  background: ${props => (props.sec ? 'blue' : 'green')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: calc(20px + (40 - 20) * (100vw - 320px) / (960 - 320));
  color: white;
`;

class Styled extends Component {
  state = {
    scale: null
  };

  getScale = () => {
    let scaleWidth = window.innerWidth;
    let scaleHeight = window.innerHeight;
    let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
    return `${scale}px`;
  };

  componentWillMount() {
    let scale = this.getScale();
    this.setState({
      scale
    });

    window.addEventListener('resize', () => {
      let scale = this.getScale();
      this.setState({
        scale
      });
    });
  }

  render() {
    return (
      <div>
        {console.log(this.state.scale)}
        <Wrapper sec scale={this.state.scale}>
          <Title>Hello</Title>
        </Wrapper>
      </div>
    );
  }
}

export default Styled;

// ----------------------------------------------------
