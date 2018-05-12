import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  margin: 50px;
  /* min-height: 100vh; */
  /* position: relative; */

  display: grid;
  /* grid-template-columns: repeat(7 1fr);
  grid-template-rows: repeat(9 1fr); */

  @media (max-width: 900px) {
    margin: 20px 0;
    grid-template-columns:
      [spacing-start] minmax(20px, 1fr)
      minmax(10px, 50px)
      repeat(3, minmax(25px, 120px))
      minmax(20px, 120px)
      repeat(2, minmax(40px, 190px))
      minmax(20px, 1fr) [spacing-end];
    grid-template-rows:
      auto
      auto
      repeat(2, minmax(25px, 80px))
      minmax(20px, 40px)
      repeat(2, minmax(20px, 90px))
      repeat(2, minmax(20px, 45px))
      repeat(3, minmax(15px, 45px))
      auto
      auto;

    justify-items: center;

    grid-template-areas:
      '. LT   LT   LT   LT   LT   LT   LT   .'
      '. NC   NC   NC   NC   NC   NC   NC   .'
      '. .    I1x3   .    .    MHx3 .    .    .'
      '. .    I1x3   .    .    MHx3 .    .    .'
      '. I2   I1x3   .    .    .    .    .    .'
      '. 12   .    .    .    .    .    .    .'
      '. 12   .    .    .    .    .    .    .'
      '. 12   .    .    .    .    I3   .    .'
      '. 12   .    .    .    .    I3   .    .'
      '. DT   .    .    .    .    I3   .    .'
      '. DT   .    .    .    .    I3   .    .'
      '. DT   .    .    .    .    I3   .    .'
      '. E    E    E    E    E    E    E    .'
      '. B    B    B    B    B    B    B    .';
  }
`;

const LogoText = styled.h2`
  grid-column: space-start / space-end;
  grid-area: LT;
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: calc(
      28px + (42 - 28) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const MainHeading = styled.h2`
  grid-area: MHx3;
  grid-column: 6 / span 3;
  grid-row: 3 / span 2;
  width: 100%;
  height: 100%;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 160px;
  line-height: 0.9;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 85%;
    left: 50%;
    width: 33%;
    height: 3px;
    background: #000;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: calc(
      55px + (70 - 55) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const DescText = styled.p`
  grid-area: DT;
  grid-column: 2 / span 5;
  width: 100%;
  height: 100%;
  color: #9e9e9e;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    text-align: center;
    font-size: calc(
      10px + (16 - 10) * (${props => props.scale} - 350px) / (900 - 350)
    );
    width: calc(
      130px + (420 - 130) * (${props => props.scale} - 320px) / (900 - 320)
    );
  }
`;

const VerticalNums = styled.ul`
  grid-area: VerticalNums;
  place-self: center;
  list-style: none;
  color: red;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CTAButton = styled.button`
  grid-area: B;
  border: 3px solid black;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 15px;
  transition: all 250ms;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 900px) {
    font-size: calc(
      20px + (27 - 20) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const NavContainer = styled.ul`
  grid-area: NC;
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: center;

  & > * {
    padding: 10px;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;
    font-size: calc(
      13px + (23 - 13) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const Email = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  grid-area: E;
  /* grid-column: 2/3;
  grid-row: 9/10; */
  color: #9e9e9e;

  @media (max-width: 900px) {
    /* grid-column: 2/3;
    grid-row: 8/9; */
    padding: 30px;
    font-size: calc(
      19px + (30 - 19) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const ImgOne = styled.img`
  width: 100%;
  height: 100%;
  grid-area: I1x3;
  grid-column: 3 / span 3;
  grid-row: 3 / span 3;
  position: relative;
  z-index: 1;
  /* grid-column: 4/7;
  grid-row: 1/4; */
  /* border: 2px solid red; */
  /* height: 100%; */
  /* filter: grayscale(80%) invert(10%) sepia(80%) brightness(90%); */
  /* position: absolute;
  top: 35px;
  right: 15vw;
  z-index: 1; */
  /* width: 29vw;
  height: 250px; */
  object-fit: cover;

  @media (max-width: 900px) {
    /* width: calc(120px + (400 - 120) * (${props =>
      props.scale} - 320px) / (900 - 320)); */
    /* grid-column: 2/3;
    grid-row: 3/4; */
    /* width: calc(
      280px + (680 - 280) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: calc(
      220px + (500 - 220) * (${props => props.scale} - 320px) / (900 - 320)
    ); */
  }
`;

const ImgTwo = styled.img`
  width: 100%;
  height: 100%;
  grid-area: I2;
  grid-column: 2/ span 7;
  grid-row: 5 / span 5;
  /* grid-column: 3/8;
  grid-row: 3/8; */
  width: 100%;
  /* filter: grayscale(90%) invert(10%) sepia(80%) brightness(60%); */
  /* right: 10vw;
  top: 20%;
  position: absolute; */
  /* width: 40vw;
  height: 600px; */
  object-fit: cover;

  @media (max-width: 900px) {
    /* grid-column: 2/3;
    grid-row: 6/7; */
    /* width: calc(
      280px + (680 - 280) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: calc(
      190px + (400 - 190) * (${props => props.scale} - 320px) / (900 - 320) */
    );
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const ImgThree = styled.img`
  width: 100%;
  height: 100%;
  grid-area: I3;
  grid-column: 7 / span 2;
  grid-row: 8 / span 5;
  /* grid-column: 5/8;
  grid-row: 7/ 10; */
  width: 100%;
  /* height: 100%; */
  filter: grayscale(90%) invert(10%) sepia(80%) brightness(50%);
  /* position: absolute;
  right: 10vw;
  top: 77%;
  width: 25vw;
  height: 250px; */
  object-fit: cover;
  /* object-position: 0 -150px; */

  @media (max-width: 900px) {
    /* grid-column: 2/3;
    grid-row: 7/8; */
    /* transform: translateY(
      calc(
        -33px + (-52 - -33) * (${props => props.scale} - 320px) / (900 - 320)
      )
    ); */
    /* width: calc(
      200px + (480 - 200) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: calc(
      150px + (340 - 150) * (${props => props.scale} - 320px) / (900 - 320) */
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
