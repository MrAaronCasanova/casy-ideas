import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* ---------For Editing Layout---------- */
  border: 2px solid red;
  /* ------------------------------------- */
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,700');
  /* @import url('https://fonts.googleapis.com/css?family=Poppins'); */

  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  /* padding: 40px 0; */
  /* background: #efe9ef;
  color: slategray; */
  min-height: 100vh;
  display: grid;

  @media (max-width: 750px) {
    grid-template-columns:
      [LeftGutter-start]
      /* 20px */
      minmax(20px, 2fr)
      [LeftGutter-end Img2-start]
      minmax(20px, 2fr)
      /* minmax(20px, 2fr) */
      /* 2fr */
      [Img1-start]
      minmax(90px, 13fr)
      /* minmax(180px, 7fr) */
      /* 7fr */
      [Img1-end]
      minmax(60px, 8fr)
      /* minmax(20px, 5fr) */
      /* 5fr */
      [Img3-start]
      minmax(110px, 12fr)
      /* minmax(20px, 9fr) */
      /* 9fr */
      [Img2-end Img3-end RightGutter-start]
      /* 20px */
      minmax(20px, 2fr)
      [RightGutter-end];
  }
  grid-template-rows:
    [TopGutter-start]
    20px
    /* minmax(50px, 1fr) */
    [TopGutter-end Logo-start]
    minmax(40px, 0)
    /* 15vh */
    /* 2fr */
    [Logo-end Nav-start]
    minmax(55px, 0)
    /* 20vh */
    /* 4fr */
    [Nav-end Img1-start MainHeading-start]
    minmax(80px, 0)
    /* 25vh */
    /* 6fr */
    [MainHeading-end Img2-start]
    minmax(30px, 0)
    /* 10vh */
    /* 2fr */
    [Img1-end]
    minmax(80px, 0)
    /* 20vh */
    /* 5fr */
    [Img3-start]
    minmax(50px, 0)
    /* 18vh */
    /* 3fr */
    [Img2-end]
    minmax(80px, 0)
    /* 38vh */
    /* 7fr */
    [Img3-end Email-start]
    minmax(50px, 0)
    /* 20vh */
    /* 3fr */
    [Email-end Button-start]
    minmax(50px, 0)
    /* 20vh */
    /* 3fr */
    [Button-end BottomGutter-start]
    20px
    /* minmax(50px, 1fr) */
    [BottomGutter-end];
`;

const Logo = styled.h2`
  /* ---------For Editing Layout---------- */
  border: 2px solid #48628c;
  /* ------------------------------------- */
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  @media (max-width: 750px) {
    grid-column: LeftGutter-end / RightGutter-start;
    grid-row: Logo-start / Logo-end;
    /* align-self: center; */
    /* justify-self: center; */
    display: flex;
    justify-content: center;
    align-items: center;

    /* font-size: calc(
      45px + (60 - 45) * (${props => props.scale} - 320px) / (750 - 320)
    ); */
    font-size: calc(
      23px + (60 - 23) * (${props => props.scale} - 320px) / (750 - 320)
    );
  }
`;

const Nav = styled.ul`
  /* ---------For Editing Layout---------- */
  border: 2px solid #488c7e;
  /* ------------------------------------- */
  list-style: none;

  li {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    padding: 10px;
  }

  @media (max-width: 750px) {
    grid-column: LeftGutter-end / RightGutter-start;
    grid-row: Nav-start / Nav-end;
    display: flex;
    justify-content: center;

    font-size: calc(
      15px + (27 - 15) * (${props => props.scale} - 320px) / (750 - 320)
    );
  }
`;

const MainHeading = styled.h2`
  /* ---------For Editing Layout---------- */
  border: 2px solid #48558c;
  /* ------------------------------------- */
  font-family: 'Josefin Sans', sans-serif;
  @media (max-width: 750px) {
    grid-column: Img1-end / RightGutter-start;
    grid-row: MainHeading-start / MainHeading-end;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(
      30px + (50 - 30) * (${props => props.scale} - 320px) / (750 - 320)
    );
    font-weight: bold;
  }
`;

const DescText = styled.p`
  /* ---------For Editing Layout---------- */
  border: 2px solid #8c4d47;
  /* ------------------------------------- */
  @media (max-width: 750px) {
    width: calc(150px + (300 - 150) * (100vw - 320px) / (750 - 320));
    grid-column: LeftGutter-end / Img3-start;
    grid-row: Img2-end / Img3-end;
    justify-self: center;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    font-size: calc(
      12px + (30 - 12) * (${props => props.scale} - 320px) / (750 - 320)
    );
  }
`;

const Img1 = styled.img`
  /* ---------For Editing Layout---------- */
  border: 2px solid #488c6d;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  /* ------------------------------------- */
  object-fit: cover;
  /* width: calc(
    270px + (550 - 270) * (${props => props.scale} - 320px) / (750 - 320)
  );
  height: calc(
    300px + (590 - 300) * (${props => props.scale} - 320px) / (750 - 320)
  ); */
  @media (max-width: 750px) {
    grid-column: Img1-start / Img1-end;
    grid-row: Img1-start / Img1-end;
  }
`;
const Img2 = styled.img`
  /* ---------For Editing Layout---------- */
  border: 2px solid #8c8648;
  width: 100%;
  height: 100%;
  /* ------------------------------------- */
  object-fit: cover;
  /* width: calc(
    270px + (550 - 270) * (${props => props.scale} - 320px) / (750 - 320)
  );
  height: calc(
    300px + (590 - 300) * (${props => props.scale} - 320px) / (750 - 320)
  ); */
  @media (max-width: 750px) {
    grid-column: Img2-start / Img2-end;
    grid-row: Img2-start / Img2-end;
  }
`;
const Img3 = styled.img`
  /* ---------For Editing Layout---------- */
  border: 2px solid #47828c;
  width: 100%;
  height: 100%;
  /* ------------------------------------- */
  object-fit: cover;
  /* width: calc(
    270px + (550 - 270) * (${props => props.scale} - 320px) / (750 - 320)
  );
  height: calc(
    300px + (590 - 300) * (${props => props.scale} - 320px) / (750 - 320)
  ); */
  @media (max-width: 750px) {
    grid-column: Img3-start / Img3-end;
    grid-row: Img3-start / Img3-end;
  }
`;

const Email = styled.h6`
  /* ---------For Editing Layout---------- */
  border: 2px solid #66448c;
  /* ------------------------------------- */
  @media (max-width: 750px) {
    grid-column: LeftGutter-end / RightGutter-start;
    grid-row: Email-start / Email-end;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: calc(
      15px + (50 - 15) * (${props => props.scale} - 320px) / (750 - 320)
    );
    font-weight: bold;
  }
`;

const CTAButton = styled.button`
  /* ---------For Editing Layout---------- */
  border: 2px solid #8c4462;
  /* ------------------------------------- */
  transition: 250ms;

  &:hover {
    background: #000;
    color: white;
  }
  @media (max-width: 750px) {
    /* width: calc(120px + (130 - 100) * (100vw - 320px) / (750 - 320));
    height: calc(50px + (60 - 50) * (100vh - 320px) / (750 - 320)); */
    /* width: 25vw;
    height: 6vh; */
    grid-column: LeftGutter-end / RightGutter-start;
    grid-row: Button-start / Button-end;
    justify-self: center;
    align-self: center;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    font-size: calc(
      18px + (30 - 18) * (${props => props.scale} - 320px) / (750 - 320)
    );
    font-weight: bold;
  }
`;

class APlayground extends Component {
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
        <Logo scale={this.state.scale}>Play Time</Logo>
        <Nav scale={this.state.scale}>
          <li>here</li>
          <li>comes</li>
          <li>the</li>
          <li>funCooker</li>
        </Nav>
        <MainHeading scale={this.state.scale}>
          Ayo<br />River
        </MainHeading>
        <DescText scale={this.state.scale}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore in
          blanditiis illum architecto eius! Nemo, sapiente! Perspiciatis id aut
          velit labore molestias minima natus necessitatibus.
        </DescText>
        <Img1
          scale={this.state.scale}
          // src="https://images.pexels.com/photos/776390/pexels-photo-776390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          src="https://images.pexels.com/photos/127567/pexels-photo-127567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="fun"
        />
        <Img2
          scale={this.state.scale}
          // src="https://c1.staticflickr.com/1/898/40555338765_8998d37c16_k.jpg"
          src="https://images.pexels.com/photos/267858/pexels-photo-267858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="fun"
        />
        <Img3
          scale={this.state.scale}
          // src="https://images.pexels.com/photos/922608/pexels-photo-922608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpL8c3Mi1DjbjGLNxYvn7c_wpUq-mjUzmGbtSjlbdbASkvpZ64w"
          alt="fun"
        />
        <Email scale={this.state.scale}>mraaroncasanova@gmail.com</Email>
        <CTAButton scale={this.state.scale}>get more</CTAButton>
      </Wrapper>
    );
  }
}

export default APlayground;
