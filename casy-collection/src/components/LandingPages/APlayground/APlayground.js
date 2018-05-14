import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  /* padding: 40px 0; */
  /* background: #efe9ef;
  color: slategray; */
  /* min-height: 100vh; */
  display: grid;

  @media (max-width: 750px) {
    grid-template-columns:
      [LeftGutter-start]
      minmax(20px, 1fr)
      [LeftGutter-end Img2-start]
      2fr
      [Img1-start]
      7fr
      [Img1-end]
      5fr
      [Img3-start]
      9fr
      [Img2-end Img3-end RightGutter-start]
      minmax(20px, 1fr)
      [RightGutter-end];
  }
  grid-template-rows:
    [TopGutter-start]
    minmax(50px, 1fr)
    [TopGutter-end Logo-start]
    1fr
    [Logo-end Nav-start]
    1fr
    [Nav-end Img1-start MainHeading-start]
    1fr
    [MainHeading-end Img2-start]
    1fr
    [Img1-end]
    1fr
    [Img3-start]
    1fr
    [Img2-end]
    1fr
    [Img3-end Email-start]
    1fr
    [Email-end Button-start]
    1fr
    [Button-end BottomGutter-start]
    minmax(50px, 1fr)
    [BottomGutter-end];
`;

const Logo = styled.h2`
  /* ---------For Editing Layout---------- */
  border: 2px solid #48628c;
  /* ------------------------------------- */
  font-family: 'Poppins', sans-serif;

  @media (max-width: 750px) {
    grid-column: LeftGutter-end / RightGutter-start;
    grid-row: Logo-start / Logo-end;
    font-size: calc(
      45px + (60 - 45) * (${props => props.scale} - 320px) / (750 - 320)
    );
  }
`;

const Nav = styled.ul`
  /* ---------For Editing Layout---------- */
  border: 2px solid #488c7e;
  /* ------------------------------------- */
  list-style: none;
  /* display: flex;
  justify-content: center; */
  /* margin-bottom: 30px; */

  li {
    /* padding: 5px; */
  }

  @media (max-width: 750px) {
    grid-column: LeftGutter-end / RightGutter-start;
    grid-row: Nav-start / Nav-end;
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
  }
`;

const DescText = styled.p`
  /* ---------For Editing Layout---------- */
  border: 2px solid #8c4d47;
  /* ------------------------------------- */
  @media (max-width: 750px) {
    grid-column: LeftGutter-end / Img3-start;
    grid-row: Img2-end / Img3-end;
  }
`;

const Img1 = styled.img`
  /* ---------For Editing Layout---------- */
  border: 2px solid #488c6d;
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
  }
`;

const CTAButton = styled.button`
  /* ---------For Editing Layout---------- */
  border: 2px solid #8c4462;
  /* ------------------------------------- */
  @media (max-width: 750px) {
    grid-column: LeftGutter-end / RightGutter-start;
    grid-row: Button-start / Button-end;
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
        <Logo scale={this.state.scale}>{/* Play Time */}</Logo>
        <Nav scale={this.state.scale}>
          {/* <li>Here</li>
          <li>Comes</li>
          <li>The</li>
          <li>FunCooker</li> */}
        </Nav>
        <MainHeading>{/* Ayo<br />River */}</MainHeading>
        <DescText>
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore in
          blanditiis illum architecto eius! Nemo, sapiente! Perspiciatis id aut
          velit labore molestias minima natus necessitatibus. */}
        </DescText>
        <Img1
          scale={this.state.scale}
          // src="https://images.pexels.com/photos/776390/pexels-photo-776390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          // alt="fun"
        />
        <Img2
          scale={this.state.scale}
          // src="https://c1.staticflickr.com/1/898/40555338765_8998d37c16_k.jpg"
          // alt="fun"
        />
        <Img3
          scale={this.state.scale}
          // src="https://images.pexels.com/photos/922608/pexels-photo-922608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350"
          // alt="fun"
        />
        <Email>{/* mraaroncasanova@gmail.com */}</Email>
        <CTAButton>{/* get more */}</CTAButton>
      </Wrapper>
    );
  }
}

export default APlayground;
