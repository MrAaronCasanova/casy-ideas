import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  padding: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

// const slideIn = keyframes`
//   0% {
//     transform: translate(-100vw, 100px) scale(1.5);
//   }
//   100% {
//     transform: translate(0, 0)  scale(1);
//   }
// `;

// const slideOut = keyframes`
//   0% {
//     transform: translate(0, 0) scale(1);
//     opacity: 1;
//   }
//   100% {
//     transform: translate(40vw, -100px)  scale(.2);
//     opacity: 0;
//   }
// `;
const slideIn = keyframes`
  0% {
    transform: translate(-100vw, 5vh) scale(1.5);
  }
  100% {
    transform: translate(-50%, -50%)  scale(1);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(15vw, -50vh)  scale(.2);
    opacity: 0;
  }
`;

const BoxOne = styled.div`
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${props =>
    props.aniButton
      ? `1s ${slideIn} forwards ease-out`
      : `1s ${slideOut} forwards ease-out`};
`;
const BoxTwo = styled.div`
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${props =>
    props.aniButton
      ? `1s ${slideIn} forwards ease-out`
      : `1s ${slideOut} forwards ease-out`};
`;

const Title = styled.h2`
  font-size: calc(20px + (40 - 20) * (100vw - 320px) / (960 - 320));
  color: white;
`;

const Button = styled.button`
  font-size: calc(
    20px + (80 - 20) * (${props => props.scale} - 320px) / (1000 - 320)
  );
  color: red;
  padding: 20px 30px;
  margin: 20px;
  background: grey;
`;

class Styled extends Component {
  state = {
    scale: null,
    aniButton: false
  };

  getScale = () => {
    let scaleWidth = window.innerWidth;
    let scaleHeight = window.innerHeight;
    let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
    return `${scale}px`;
  };

  aniButton = () => {
    let aniButton = !this.state.aniButton;
    this.setState({
      aniButton
    });
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
        {console.log(this.state.aniButton)}
        <Wrapper>
          <BoxOne sec scale={this.state.scale} aniButton={this.state.aniButton}>
            <Title>Hello</Title>
          </BoxOne>
          <BoxTwo scale={this.state.scale} aniButton={!this.state.aniButton}>
            <Title>Hello</Title>
          </BoxTwo>
          <Button scale={this.state.scale} onClick={this.aniButton}>
            click me
          </Button>
        </Wrapper>
      </div>
    );
  }
}

export default Styled;

// ----------------------------------------------------
