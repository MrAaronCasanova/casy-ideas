import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  margin: 50px;
  display: grid;
  justify-content: center;
  justify-items: center;

  grid-template-columns:
    [Text-start]
    9fr
    [Text-end VertNums-start]
    3fr
    [VertNums-end Img2-start]
    2fr
    [Img1-start]
    4fr
    [Img3-start]
    6fr
    [Img1-end]
    1fr
    [Img2-end];

  grid-template-rows:
    [Img1-start]
    calc(160px + (210 - 160) * (${props => props.scale} - 320px) / (1400 - 320))
    /* 3fr */
    [Img2-start]
    calc(50px + (105 - 50) * (${props => props.scale} - 320px) / (1400 - 320))
    /* 1fr */
    [Img1-end]
    calc(260px + (315 - 260) * (${props => props.scale} - 320px) / (1400 - 320))
    /* 6fr */
    [Img3-start]
    calc(105px + (125 - 105) * (${props => props.scale} - 320px) / (1400 - 320))
    /* 2fr */
    [Img2-end]
    calc(200px + (235 - 200) * (${props => props.scale} - 320px) / (1400 - 320))
    /* 4fr */
    [Img3-end];

  @media (max-width: 900px) {
    margin: 20px;
    grid-template-columns:
      [Img2-start]
      calc(20px + (80 - 20) * (${props => props.scale} - 320px) / (900 - 320))
      [Img1-start]
      calc(
        120px + (240 - 120) * (${props => props.scale} - 320px) / (900 - 320)
      )
      [Img1-end Img2Gap-start]
      calc(40px + (180 - 40) * (${props => props.scale} - 320px) / (900 - 320))
      [Img2Gap-end Img3-start]
      calc(
        120px + (240 - 120) * (${props => props.scale} - 320px) / (900 - 320)
      )
      [Img3-end Img2-end];

    grid-template-rows:
      [Logo-start]
      calc(50px + (80 - 50) * (${props => props.scale} - 320px) / (900 - 320))
      [Logo-end Nav-start]
      calc(55px + (85 - 55) * (${props => props.scale} - 320px) / (900 - 320))
      [Nav-end Img1-start]
      calc(
        110px + (190 - 110) * (${props => props.scale} - 320px) / (900 - 320)
      )
      [Img2-start]
      calc(30px + (80 - 30) * (${props => props.scale} - 320px) / (900 - 320))
      [Img1-end Img2Mid-start]
      calc(70px + (240 - 70) * (${props => props.scale} - 320px) / (900 - 320))
      [Img2Mid-end Img3-start]
      calc(50px + (105 - 50) * (${props => props.scale} - 320px) / (900 - 320))
      [Img2-end]
      calc(
        120px + (190 - 120) * (${props => props.scale} - 320px) / (900 - 320)
      )
      [Img3-end Email-start]
      calc(50px + (100 - 50) * (${props => props.scale} - 320px) / (900 - 320))
      [Email-end Button-start]
      auto
      [Button-end];
  }
`;

const LogoText = styled.h2`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid lightcoral; */
  width: 100%;
  height: 100%;
  grid-column: Text-start / Text-end;
  grid-row: Img1-start / Img2-start;
  display: flex;
  align-items: center;
  /* ------------------------------------- */
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 900px) {
    grid-column: Img2-start / Img2-end;
    grid-row: Logo-start / Logo-end;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(
      28px + (42 - 28) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const MainHeading = styled.h2`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid mediumaquamarine; */
  width: 100%;
  height: 100%;
  grid-column: Text-start / Text-end;
  grid-row: Img2-start / Img2-end;
  display: flex;
  align-items: flex-start;
  /* ------------------------------------- */
  font-family: 'Josefin Sans', sans-serif;
  font-size: 60px;
  /* font-size: 160px; */
  line-height: 0.9;
  position: relative;

  /* &::after {
    content: '';
    position: absolute;
    top: 85%;
    left: 50%;
    width: calc(
      40px + (70 - 40) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: 3px;
    background: #000;
  } */

  @media (max-width: 900px) {
    grid-column: Img1-end / Img2-end;
    grid-row: Nav-end / Img2-start;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: calc(
      40px + (70 - 40) * (${props => props.scale} - 320px) / (900 - 320)
    );
  }
`;

const DescText = styled.p`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid darkcyan; */
  grid-column: Text-start / Text-end;
  grid-row: Img2-start / Img2-end;
  display: flex;
  align-items: flex-end;
  /* ------------------------------------- */
  width: 100%;
  height: 100%;
  color: #9e9e9e;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: Img2-start / Img3-start;
    grid-row: Img2-end / Img3-end;
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
  /* ---------For Editing Layout---------- */
  /* border: 2px solid violet; */
  width: 100%;
  height: 100%;
  /* ------------------------------------- */
  grid-column: VertNums-start / VertNums-end;
  grid-row: Img1-end / Img1-end;
  /* place-self: center; */
  list-style: none;
  color: red;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CTAButton = styled.button`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid coral; */
  grid-column: Text-start / Text-end;
  grid-row: Img2-end / Img3-end;
  justify-self: start;
  align-self: end;
  width: 60px;
  height: 80px;
  /* ------------------------------------- */
  border: 3px solid black;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 15px;
  transition: all 250ms;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media (max-width: 900px) {
    grid-column: Img2-start / Img2-end;
    grid-row: Button-start / Button-end;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    justify-self: center;
    align-self: center;
    font-size: calc(
      20px + (27 - 20) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const NavContainer = styled.ul`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid navy; */
  grid-column: Text-start / Text-end;
  grid-row: Img2-end / Img3-end;
  display: flex;
  align-items: flex-start;
  /* ------------------------------------- */
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
    grid-column: Img2-start / Img2-end;
    grid-row: Nav-start / Nav-end;
    display: flex;
    justify-content: center;
    font-size: calc(
      13px + (23 - 13) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const Email = styled.p`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid maroon; */
  grid-column: VertNums-start / Img3-start;
  grid-row: Img2-end / Img3-end;
  /* ------------------------------------- */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #9e9e9e;

  @media (max-width: 900px) {
    grid-column: Img2-start / Img2-end;
    grid-row: Email-start / Email-end;
    font-size: calc(
      16px + (30 - 16) * (${props => props.scale} - 350px) / (900 - 350)
    );
  }
`;

const ImgOne = styled.img`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid orange; */
  grid-column: Img1-start / Img1-end;
  grid-row: Img1-start / Img1-end;
  /* ------------------------------------- */
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  object-fit: cover;

  @media (max-width: 900px) {
    grid-column: Img1-start / Img1-end;
    grid-row: Img1-start / Img1-end;
  }
`;

const ImgTwo = styled.img`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid turquoise; */
  grid-column: Img2-start / Img2-end;
  grid-row: Img2-start / Img2-end;
  /* ------------------------------------- */
  width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media (max-width: 900px) {
    grid-column: Img2-start / Img2-end;
    grid-row: Img2-start / Img2-end;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const ImgThree = styled.img`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid teal; */
  grid-column: Img3-start / Img2-end;
  grid-row: Img3-start / Img3-end;
  /* ------------------------------------- */
  width: 100%;
  height: 100%;
  width: 100%;
  filter: grayscale(90%) invert(10%) sepia(80%) brightness(50%);
  object-fit: cover;

  @media (max-width: 900px) {
    grid-column: Img3-start / Img3-end;
    grid-row: Img3-start / Img3-end;
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
      <Wrapper scale={this.state.scale}>
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
