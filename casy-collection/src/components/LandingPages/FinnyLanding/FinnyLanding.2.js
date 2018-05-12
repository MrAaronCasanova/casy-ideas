import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  /* margin-left: 130px; */
  margin: 50px;
  min-height: 100vh;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  position: relative;

  display: grid;
  grid-template-columns: repeat(7 1fr);
  grid-template-rows: repeat(9 1fr);

  @media (max-width: 900px) {
    margin: 20px 0;
    grid-template-columns:
      minmax(5px, auto)
      auto
      minmax(5px, auto);
    grid-template-rows: repeat(10 auto);
    justify-items: center;
  }
`;

const LogoText = styled.h2`
  grid-column: 1/2;
  grid-row: 2/3;
  /* margin: 120px 0; */
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 1/2;
    font-size: calc(
      28px + (42 - 28) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const MainHeading = styled.h2`
  grid-column: 1/2;
  grid-row: 3/6;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 160px;
  line-height: 0.9;
  position: relative;
  margin-bottom: 80px;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: 0;
    width: 33%;
    height: 3px;
    background: #000;
  }

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 4/5;
    font-size: calc(
      70px + (120 - 70) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const DescText = styled.p`
  grid-column: 1/2;
  grid-row: 6/8;
  color: #9e9e9e;
  width: 400px;
  /* margin-bottom: 80px; */

  @media (max-width: 900px) {
    text-align: center;
    grid-column: 2/3;
    grid-row: 5/6;
    font-size: calc(
      15px + (25 - 15) * (${props => props.scale} - 350px) / (900 - 350)
    );
    width: calc(
      220px + (380 - 220) * (${props => props.scale} - 320px) / (900 - 320)
    );
  }
`;

const VerticalNums = styled.ul`
  place-self: center;
  list-style: none;
  grid-column: 2/3;
  grid-row: 3/6;
  color: red;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CTAButton = styled.button`
  grid-column: 1/2;
  grid-row: 8/9;
  border: 3px solid black;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 15px;
  margin-bottom: 100px;
  transition: all 250ms;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 9/10;
    font-size: calc(
      20px + (55 - 20) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const NavContainer = styled.ul`
  grid-column: 1/2;
  grid-row: 9/10;
  list-style: none;
  width: 50%;
  display: flex;
  justify-content: center;

  & > * {
    /* padding-right: 25px; */
    padding: 10px;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 2/3;
    font-size: calc(
      13px + (23 - 13) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const Email = styled.p`
  grid-column: 2/3;
  grid-row: 9/10;
  color: #9e9e9e;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 8/9;
    font-size: calc(
      19px + (40 - 19) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const ImgOne = styled.img`
  position: relative;
  z-index: 1;
  grid-column: 4/7;
  grid-row: 1/4;
  /* border: 2px solid red; */
  width: 100%;
  height: 100%;
  /* filter: grayscale(80%) invert(10%) sepia(80%) brightness(90%); */
  /* position: absolute;
  top: 35px;
  right: 15vw;
  z-index: 1; */
  /* width: 29vw;
  height: 250px; */
  object-fit: cover;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 3/4;
    width: calc(
      280px + (680 - 280) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: calc(
      220px + (500 - 220) * (${props => props.scale} - 320px) / (900 - 320)
    );
  }
`;

const ImgTwo = styled.img`
  grid-column: 3/8;
  grid-row: 3/8;
  width: 100%;
  /* filter: grayscale(90%) invert(10%) sepia(80%) brightness(60%); */
  /* right: 10vw;
  top: 20%;
  position: absolute; */
  /* width: 40vw;
  height: 600px; */
  object-fit: cover;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 6/7;
    width: calc(
      280px + (680 - 280) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: calc(
      190px + (400 - 190) * (${props => props.scale} - 320px) / (900 - 320)
    );
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const ImgThree = styled.img`
  grid-column: 5/8;
  grid-row: 7/ 10;
  width: 100%;
  height: 100%;
  filter: grayscale(90%) invert(10%) sepia(80%) brightness(50%);
  /* position: absolute;
  right: 10vw;
  top: 77%;
  width: 25vw;
  height: 250px; */
  object-fit: cover;
  /* object-position: 0 -150px; */

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 7/8;
    transform: translateY(
      calc(
        -33px + (-52 - -33) * (${props => props.scale} - 320px) / (900 - 320)
      )
    );
    width: calc(
      200px + (480 - 200) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: calc(
      150px + (340 - 150) * (${props => props.scale} - 320px) / (900 - 320)
    );
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.34);
  }
`;

class FinnyLanding extends Component {
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
      <Wrapper>
        <LogoText scale={this.state.scale}>Finnerztaffen.</LogoText>
        <MainHeading scale={this.state.scale}>
          Ayo<br />River
        </MainHeading>
        <DescText scale={this.state.scale}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore in
          blanditiis illum architecto eius! Nemo, sapiente! Perspiciatis id aut
          velit labore molestias minima natus necessitatibus.
        </DescText>
        <VerticalNums scale={this.state.scale}>
          <li>01</li>
          <li>02</li>
          <li>03</li>
        </VerticalNums>
        <CTAButton scale={this.state.scale}>get more</CTAButton>
        <NavContainer scale={this.state.scale}>
          <li>terms</li>
          <li>about</li>
          <li>blog</li>
          <li>contact</li>
        </NavContainer>
        <Email scale={this.state.scale}>mraaroncasanova@gmail.com</Email>
        <ImgOne
          scale={this.state.scale}
          src="https://images.pexels.com/photos/127567/pexels-photo-127567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="rocks"
        />
        <ImgTwo
          scale={this.state.scale}
          src="https://images.pexels.com/photos/267858/pexels-photo-267858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="boy"
        />
        <ImgThree
          scale={this.state.scale}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpL8c3Mi1DjbjGLNxYvn7c_wpUq-mjUzmGbtSjlbdbASkvpZ64w"
          // src="https://c1.staticflickr.com/6/5089/5337671824_a18daf19de_b.jpg"
          alt="man"
        />
      </Wrapper>
    );
  }
}

export default FinnyLanding;
