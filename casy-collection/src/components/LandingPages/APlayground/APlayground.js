import React, { Component } from 'react';
import styled from 'styled-components';

const vpScale = (minSize, maxSize, minScreen, maxScreen, viewportUnit) => {
  let minmaxScale = {
    withPx(viewport) {
      return `calc(${minSize}px + (${maxSize} - ${minSize}) * (${viewport} - ${minScreen}px) /
        (${maxScreen} - ${minScreen}));`;
    },
    withVp(viewport) {
      return `calc(
        calc(${minScreen / 100}px * ${minSize}) + (calc(${maxScreen /
        100} * ${maxSize}) - calc(${minScreen /
        100} * ${minSize})) * (${viewport} - ${minScreen}px) /
          (${maxScreen} - ${minScreen})
      )`;
    }
  };

  switch (viewportUnit) {
    case 'vwUnit':
      return minmaxScale.withVp('100vw');
    case 'vhUnit':
      return minmaxScale.withVp('100vh');
    case 'vwPx':
      return minmaxScale.withPx('100vw');
    case 'vhPx':
      return minmaxScale.withPx('100vh');
    case 'sUnit':
      return minmaxScale.withVp('props => props.scale');
    case 'sPx':
      return minmaxScale.withPx('${props => props.scale}');
    default:
      console.log('vpScale - recieved invalid scale type');
  }
  // let viewport =
  //   viewportUnit === 'vw'
  //     ? '100vw'
  //     : viewportUnit === 'vh'
  //       ? '100vh'
  //       : viewportUnit === 'scale'
  //         ? '${props => props.scale}'
  //         : null;
  // return `calc(
  //     calc(${minScreen / 100}px * ${minSize}) + (calc(${maxScreen /
  //   100} * ${maxSize}) - calc(${minScreen /
  //   100} * ${minSize})) * (${viewportUnit} - ${minScreen}px) /
  //       (${maxScreen} - ${minScreen})
  //   )`;
  // return `calc(
  //     ${minmaxScale} * (${viewport} - ${minScreen}px) /
  //       (${maxScreen} - ${minScreen})
  //   )`;
};

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --grid-brdr: ${0 ? 'red' : 'none'};
  /* -------------------------------- */
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,700');
  /* @import url('https://fonts.googleapis.com/css?family=Poppins'); */

  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  min-height: 100vh;
  display: grid;
  grid-template-columns:
    1fr
    [Content-start Img2-start]
    ${vpScale(7, 4, 320, 750, 'vwUnit')}
    [Img1-start]
    ${vpScale(33, 33, 320, 750, 'vwUnit')}
    [Img1-end]
    ${vpScale(13, 26, 320, 750, 'vwUnit')}
    [Img3-start]
    ${vpScale(41, 31, 320, 750, 'vwUnit')}
    [Img2-end Img3-end Content-end]
    1fr;
  grid-template-rows:
    minmax(20px, 1fr)
    [Content-start Logo-start]
    ${vpScale(15, 7, 320, 1300, 'vhUnit')}
    [Logo-end Nav-start]
    ${vpScale(20, 8, 320, 1300, 'vhUnit')}
    [Nav-end Img1-start MainHeading-start]
    ${vpScale(25, 15, 320, 1300, 'vhUnit')}
    [MainHeading-end Img2-start]
    ${vpScale(10, 6, 320, 1300, 'vhUnit')}
    [Img1-end]
    ${vpScale(20, 19, 320, 1300, 'vhUnit')}
    [Img3-start]
    ${vpScale(18, 7, 320, 1300, 'vhUnit')}
    [Img2-end]
    ${vpScale(38, 20, 320, 1300, 'vhUnit')}
    [Img3-end Email-start]
    ${vpScale(20, 7, 320, 1300, 'vhUnit')}
    [Email-end Button-start]
    ${vpScale(20, 7, 320, 1300, 'vhUnit')}
    [Button-end Content-end]
    minmax(20px, 1fr);

  /* ------------------------- @media - Wrapper ------- */
  @media (min-width: 750px) {
    grid-template-columns:
      1fr
      [Content-start Img2-start]
      ${vpScale(4, 9, 750, 1050, 'vwUnit')}
      [Img1-start]
      ${vpScale(33, 25, 750, 1050, 'vwUnit')}
      [Img1-end]
      ${vpScale(26, 22, 750, 1050, 'vwUnit')}
      [Img3-start]
      ${vpScale(31, 25, 750, 1050, 'vwUnit')}
      [Img2-end Img3-end Content-end]
      1fr;
    grid-template-rows:
      minmax(20px, 1fr)
      [Content-start Logo-start]
      ${vpScale(11, 7, 600, 1300, 'vhUnit')}
      [Logo-end Nav-start]
      ${vpScale(15, 9, 600, 1300, 'vhUnit')}
      [Nav-end Img1-start MainHeading-start]
      ${vpScale(25, 15, 600, 1300, 'vhUnit')}
      [MainHeading-end Img2-start]
      ${vpScale(10, 6, 600, 1300, 'vhUnit')}
      [Img1-end]
      ${vpScale(30, 19, 600, 1300, 'vhUnit')}
      [Img3-start]
      ${vpScale(14, 7, 600, 1300, 'vhUnit')}
      [Img2-end]
      ${vpScale(42, 20, 600, 1300, 'vhUnit')}
      [Img3-end Email-start]
      ${vpScale(13, 7, 600, 1300, 'vhUnit')}
      [Email-end Button-start]
      ${vpScale(13, 7, 600, 1300, 'vhUnit')}
      [Button-end Content-end]
      minmax(20px, 1fr);
  }
  /* ------------------------- @media - Wrapper ------- */
  @media (min-width: 1050px) {
    grid-template-columns:
      1fr
      [Content-start]
      ${vpScale(33, 24, 1050, 1920, 'vwUnit')}
      [VertNums-start]
      ${vpScale(8, 6, 1050, 1920, 'vwUnit')}
      [Img2-start]
      ${vpScale(7, 7, 1050, 1920, 'vwUnit')}
      [Img1-start]
      ${vpScale(12, 8, 1050, 1920, 'vwUnit')}
      [Img3-start]
      ${vpScale(22, 18, 1050, 1920, 'vwUnit')}
      [Img1-end]
      ${vpScale(8, 8, 1050, 1920, 'vwUnit')}
      [Content-end]
      1fr;
    grid-template-rows:
      minmax(20px, 1fr)
      [Img1-start]
      ${vpScale(19, 13, 720, 1920, 'vhUnit')}
      [Img2-start]
      ${vpScale(8, 6, 720, 1920, 'vhUnit')}
      [Img1-end]
      ${vpScale(30, 23, 720, 1920, 'vhUnit')}
      [Img3-start]
      ${vpScale(10, 8, 720, 1920, 'vhUnit')}
      [Img2-end]
      ${vpScale(30, 16, 720, 1920, 'vhUnit')}
      [Img3-end]
      minmax(20px, 1fr);
  }
`;

const Logo = styled.h2`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Content-start / Content-end;
  grid-row: Logo-start / Logo-end;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: ${vpScale(28, 46, 320, 750, 'sPx')};
  /* font-size: calc(
    28px + (46 - 28) * (${props => props.scale} - 320px) / (750 - 320)
  ); */

  @media (min-width: 750px) {
    font-size: calc(
      30px + (46 - 30) * (${props => props.scale} - 320px) / (1050 - 320)
    );
  }
  @media (min-width: 1050px) {
    justify-content: flex-start;

    font-weight: normal;
    font-size: calc(
      30px + (60 - 30) * (${props => props.scale} - 320px) / (1920 - 320)
    );
    grid-column: Content-start / VertNums-start;
    grid-row: Img1-start / Img2-start;
  }
`;

const Nav = styled.ul`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Content-start / Content-end;
  grid-row: Nav-start / Nav-end;
  display: flex;
  justify-content: center;

  list-style: none;
  font-size: calc(
    17px + (27 - 17) * (${props => props.scale} - 320px) / (750 - 320)
  );

  li {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    padding: 10px;
  }

  @media (min-width: 750px) {
    font-size: calc(
      18px + (27 - 18) * (${props => props.scale} - 320px) / (1050 - 320)
    );
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img2-end / Img3-end;
    justify-content: flex-start;
    align-items: center;

    font-size: calc(
      15px + (23 - 15) * (${props => props.scale} - 320px) / (1920 - 320)
    );
  }
`;

const MainHeading = styled.h2`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Img1-end / Content-end;
  grid-row: MainHeading-start / MainHeading-end;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Josefin Sans', sans-serif;
  font-size: calc(
    32px + (56 - 32) * (${props => props.scale} - 320px) / (750 - 320)
  );
  font-weight: bold;

  @media (min-width: 750px) {
    font-size: calc(
      40px + (56 - 40) * (${props => props.scale} - 320px) / (1050 - 320)
    );
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img2-start / Img2-end;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: calc(
      45px + (140 - 45) * (${props => props.scale} - 320px) / (1920 - 320)
    );
    position: relative;
    &::after {
      content: '';
      position: absolute;
      background: #000;
      top: calc(
        -9px + (-40 - -9) * (${props => props.scale} - 320px) / (1920 - 320)
      );
      left: calc(
        29px + (92 - 29) * (${props => props.scale} - 320px) / (1920 - 320)
      );
      width: calc(
        48px + (130 - 48) * (${props => props.scale} - 320px) / (1920 - 320)
      );
      height: calc(
        2px + (6 - 2) * (${props => props.scale} - 320px) / (1920 - 320)
      );
    }
  }
`;

const DescText = styled.p`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Content-start / Img3-start;
  grid-row: Img2-end / Img3-end;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: #9e9e9e;
  width: calc(
    calc(3.2px * 45) + (calc(7.5 * 50) - calc(3.2 * 45)) * (100vw - 320px) /
      (750 - 320)
  );
  font-size: calc(
    10px + (19 - 10) * (${props => props.scale} - 320px) / (750 - 320)
  );

  @media (min-width: 750px) {
    width: calc(
      calc(7.5px * 50) + (calc(10.5 * 44) - calc(7.5 * 50)) * (100vw - 750px) /
        (1050 - 750)
    );
    font-size: calc(
      19px + (22 - 19) * (${props => props.scale} - 320px) / (1050 - 320)
    );
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img2-start / Img2-end;
    justify-self: start;
    justify-content: flex-start;
    align-items: flex-end;

    text-align: left;

    width: 100%;
    /* width: calc(
      calc(10.5px * 31) + (calc(10.5 * 44) - calc(10.5 * 31)) * (100vw - 1050px) /
        (1920 - 1050)
    ); */
    font-size: calc(
      12px + (30 - 12) * (${props => props.scale} - 320px) / (1920 - 320)
    );
    padding-bottom: 20px;
  }
`;

const VerticalNums = styled.ul`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  display: none;
  list-style: none;

  @media (min-width: 1050px) {
    display: block;
    grid-column: VertNums-start / Img2-start;
    grid-row: Img1-end / Img3-start;

    line-height: 2;
    font-size: calc(
      16px + (40 - 16) * (${props => props.scale} - 320px) / (1920 - 320)
    );

    li:nth-of-type(2) {
      text-decoration: underline;
    }
  }
`;

const Img1 = styled.img`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Img1-start / Img1-end;
  grid-row: Img1-start / Img1-end;

  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);

  @media (min-width: 750px) {
  }
  @media (min-width: 1050px) {
  }
`;
const Img2 = styled.img`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Img2-start / Img2-end;
  grid-row: Img2-start / Img2-end;

  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 1px 5px 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 750px) {
  }
  @media (min-width: 1050px) {
    grid-column: Img2-start / Content-end;
  }
`;
const Img3 = styled.img`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Img3-start / Img3-end;
  grid-row: Img3-start / Img3-end;

  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(90%) invert(10%) sepia(80%) brightness(50%);
  box-shadow: 3px 7px 25px rgba(0, 0, 0, 0.2);

  @media (min-width: 750px) {
  }
  @media (min-width: 1050px) {
    grid-column: Img3-start / Content-end;
  }
`;

const Email = styled.h6`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Content-start / Content-end;
  grid-row: Email-start / Email-end;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #9e9e9e;
  font-size: calc(
    14px + (27 - 14) * (${props => props.scale} - 320px) / (750 - 320)
  );
  font-weight: bold;

  @media (min-width: 750px) {
    font-size: calc(
      17px + (27 - 17) * (${props => props.scale} - 320px) / (1050 - 320)
    );
  }
  @media (min-width: 1050px) {
    grid-column: VertNums-start / Img3-start;
    grid-row: Img2-end / Img3-end;
    align-items: center;

    font-size: calc(
      14px + (20 - 14) * (${props => props.scale} - 320px) / (1920 - 320)
    );
  }
`;

const CTAButton = styled.button`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: Content-start / Content-end;
  grid-row: Button-start / Button-end;
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #000;
  background: #fff;
  padding: 10px;
  font-size: calc(
    14px + (22 - 14) * (${props => props.scale} - 320px) / (750 - 320)
  );
  font-weight: bold;
  transition: 250ms;

  &:hover {
    background: #000;
    color: white;
  }

  @media (min-width: 750px) {
    font-size: calc(
      16px + (22 - 16) * (${props => props.scale} - 320px) / (1050 - 320)
    );
  }
  @media (min-width: 1050px) {
    grid-column: Content-start / VertNums-start;
    grid-row: Img2-end / Img3-end;
    justify-self: start;
    align-self: start;
    justify-content: flex-start;
    align-items: flex-start;

    font-size: calc(
      13px + (28 - 13) * (${props => props.scale} - 320px) / (1920 - 320)
    );
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
        <VerticalNums scale={this.state.scale}>
          <li>01</li>
          <li>02</li>
          <li>03</li>
        </VerticalNums>
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
