import React, { Component } from 'react';

import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display');
  overflow: hidden;
  background: #f6f6f6;
  padding: 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

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
    transform: translate(15vw, -40vh)  scale(.2);
    opacity: 0;
  }
`;

const Bottle = styled.img`
  width: calc(
    200px + (600 - 200) * (${props => props.scale} - 320px) / (1000 - 320)
  );
  height: calc(
    200px + (600 - 200) * (${props => props.scale} - 320px) / (1000 - 320)
  );
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100vw, -50%);
  /* transform: translate(-50%, -50%); */
  animation: ${props =>
    props.whiskeyAni
      ? `1500ms cubic-bezier(0, 0, 0.37, 0.98) 500ms forwards ${slideIn}`
      : `1500ms cubic-bezier(0, 0, 0.37, 0.98) forwards ${slideOut}`};
`;

const Glass = Bottle.extend`
  width: calc(
    150px + (500 - 150) * (${props => props.scale} - 320px) / (1000 - 320)
  );
  height: calc(
    150px + (500 - 150) * (${props => props.scale} - 320px) / (1000 - 320)
  );
`;

const Title = styled.h2`
  position: relative;
  z-index: 1;
  align-self: ${props => props.align};
  font-size: calc(
    33px + (85 - 33) * (${props => props.scale} - 320px) / (960 - 320)
  );
  color: #2c2828;
  font-family: 'Playfair Display', serif;
`;

class WhiskeyLanding extends Component {
  state = {
    scale: null,
    whiskeyAni: false
  };

  getScale = () => {
    let scaleWidth = window.innerWidth;
    let scaleHeight = window.innerHeight;
    let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
    return `${scale}px`;
  };

  whiskeyAni = () => {
    let whiskeyAni = !this.state.whiskeyAni;
    this.setState({
      whiskeyAni
    });
  };

  componentWillMount() {
    this.swapProduct = setInterval(() => {
      let whiskeyAni = !this.state.whiskeyAni;
      this.setState({
        whiskeyAni
      });
    }, 2900);

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

  componentWillUnmount() {
    clearInterval(this.swapProduct);
  }

  render() {
    return (
      <Wrapper>
        <Title scale={this.state.scale} align={'flex-start'}>
          Whiskey...
        </Title>
        <Bottle
          scale={this.state.scale}
          whiskeyAni={this.state.whiskeyAni}
          src="https://png.pngtree.com/element_origin_min_pic/16/08/19/1957b6ee8468341.jpg"
          alt="whiskey bottle"
        />
        <Glass
          scale={this.state.scale}
          whiskeyAni={!this.state.whiskeyAni}
          src="https://png.pngtree.com/element_origin_min_pic/17/07/19/ef06fd4633838842b5634cfbde4b43a4.jpg"
          alt="whiskey glass"
        />
        <Title scale={this.state.scale} align={'flex-end'}>
          ...for all
        </Title>
      </Wrapper>
    );
  }
}

export default WhiskeyLanding;

// ----------------------------------------------------
