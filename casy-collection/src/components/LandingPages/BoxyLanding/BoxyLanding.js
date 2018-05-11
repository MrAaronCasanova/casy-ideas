import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  min-height: 100vh;
  display: grid;
  grid-template-columns:
    minmax(40px, auto)
    auto
    auto
    minmax(40px, auto);
  grid-template-rows:
    minmax(40px, auto)
    auto
    minmax(40px, auto);

  @media (max-width: 900px) {
    grid-template-columns:
      minmax(5px, auto)
      auto
      minmax(5px, auto);
    grid-template-rows:
      minmax(95px, auto)
      auto
      auto
      minmax(95px, auto);
  }
`;

const TopText = styled.h3`
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: end;
  transform: translate(50%, -25px);
  margin-bottom: 50px;
  font-weight: bold;
  letter-spacing: 5px;
  color: #565656;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 2/3;
    justify-self: start;
    transform: translate(0%, -28px);
    font-size: calc(
      10px + (25 - 10) * (${props => props.scale} - 320px) / (900 - 320)
    );
  }
`;

const SideText = styled.h3`
  white-space: nowrap;
  font-weight: bold;
  color: #565656;
  font-size: calc(
    14px + (25 - 14) * (${props => props.scale} - 320px) / (1400 - 320)
  );
  writing-mode: vertical-rl;
  text-orientation: upright;
  grid-column: 1/2;
  grid-row: 2/3;
  justify-self: end;
  align-self: start;
  padding: calc(
    8px + (5 - 8) * (${props => props.scale} - 320px) / (1400 - 320)
  );
  z-index: 5;

  @media (max-width: 900px) {
    padding: 0;
    grid-column: 2/3;
    grid-row: 3/4;
    align-self: end;
    writing-mode: vertical-lr;
    padding-bottom: 30px;
    padding-right: calc(20px + (40 - 20) * (100vw - 320px) / (900 - 320));
  }
`;

const CircleLogo = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  justify-self: end;
  transform: translate(-50%, -35px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  color: white;
  font-size: 16px;
  line-height: 50px;
  letter-spacing: 8px;
  padding-left: 8px;
  text-align: center;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 2/3;
    transform: translate(
      calc(-12px + (-20 - -12) * (100vw - 320px) / (900 - 320)),
      -35px
    );
  }
`;

const OutlineBox = styled.div`
  grid-column: 2/4;
  grid-row: 2/3;
  border: 2px solid #d4d4d4;

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 2/4;
  }
`;

const ImagesSection = styled.section`
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr min-content 1fr;
  /* grid-template-rows: auto; */

  @media (max-width: 900px) {
    transform: translate(0, 0);
  }
`;

const LargeImgWrapper = styled.div`
  border: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  overflow: hidden;
  transform: rotate(-45deg);
  grid-column: 1/2;
  grid-row: 2/3;
  width: calc(
    190px + (460 - 190) * (${props => props.scale} - 320px) / (1400 - 320)
  );
  height: calc(
    190px + (460 - 190) * (${props => props.scale} - 320px) / (1400 - 320)
  );
  align-self: center;
  justify-self: center;

  img {
    width: 150%;
    height: 150%;
    object-fit: cover;
    transform: rotate(45deg) translate(-25%, -10%);
  }

  @media (max-width: 900px) {
    width: calc(
      163px + (425 - 163) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: calc(
      163px + (425 - 163) * (${props => props.scale} - 320px) / (900 - 320)
    );
  }
`;

const SmallImgWrapper = styled.div`
  background: #dada00;
  border-top: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  border-left: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  width: 50%;
  height: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;

  img {
    transform: rotate(45deg) translate(-24%, -7%);
    width: 150%;
    height: 150%;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  align-self: end;
  justify-self: center;
  z-index: 1;
  white-space: nowrap;
  background: white;
  text-align: center;
  padding: 10px 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(50%);
  font-size: calc(
    12px + (30 - 12) * (${props => props.scale} - 320px) / (1400 - 320)
  );

  @media (max-width: 900px) {
    transform: translateY(50%);
    grid-column: 1/2;
    grid-row: 2/3;
    align-self: end;
    font-size: calc(
      12px + (50 - 12) * (${props => props.scale} - 320px) / (2500 - 320)
    );
  }
`;

const ContentSection = styled.section`
  grid-column: 3/4;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 1fr auto auto auto 1fr;
  grid-template-columns: auto;
  text-align: right;
  padding: 30px 30px 30px 0;

  p,
  h2,
  h6 {
    justify-self: end;
    align-content: center;
    padding: calc(
        8px + (60 - 8) * (${props => props.scale} - 320px) / (1400 - 320)
      )
      0;
    background: white;
    transform: translateX(
      calc(50px + (50 - 50) * (${props => props.scale} - 320px) / (1400 - 320))
    );
    background: white;
  }

  p {
    grid-row: 2/3;
    font-weight: bold;
    color: slategrey;
    font-size: calc(
      16px + (25 - 16) * (${props => props.scale} - 320px) / (1400 - 320)
    );
  }
  h2 {
    grid-row: 3/4;
    font-family: 'Libre Baskerville', serif;
    letter-spacing: calc(
      15px + (1 - 15) * (${props => props.scale} - 320px) / (1400 - 320)
    );
    font-size: calc(
      40px + (45 - 40) * (${props => props.scale} - 320px) / (1400 - 320)
    );
    font-weight: bold;
  }
  h6 {
    grid-row: 4/5;
    font-size: calc(
      10px + (15 - 10) * (${props => props.scale} - 320px) / (1400 - 320)
    );
    color: #888888;
    width: calc(300px + (400 - 300) * (100vw - 901px) / (1400 - 901));
  }

  @media (max-width: 900px) {
    grid-column: 2/3;
    grid-row: 3/4;
    text-align: left;
    padding: 0;

    p,
    h2,
    h6 {
      justify-self: start;
      align-content: start;
      padding: 0;
      background: transparent;
      transform: translateX(0);
    }

    p {
      grid-row: 2/3;
      text-align: right;
      justify-self: right;
      padding: calc(20px + (30 - 20) * (100vw - 320px) / (900 - 320)) 20px 20px
        20px;
      font-size: calc(12px + (20 - 12) * (100vw - 320px) / (900 - 320));
      margin-right: calc(0px + (40 - 0) * (100vw - 320px) / (900 - 320));
    }
    h2 {
      grid-row: 3/4;
      margin-left: calc(0px + (20 - 0) * (100vw - 320px) / (900 - 320));
      font-size: calc(25px + (60 - 25) * (100vw - 320px) / (900 - 320));
      padding: 20px 20px calc(20px + (60 - 20) * (100vw - 320px) / (900 - 320))
        20px;
      letter-spacing: -1px;
    }
    h6 {
      grid-row: 4/5;
      font-size: calc(12px + (20 - 12) * (100vw - 320px) / (900 - 320));
      margin-left: calc(0px + (40 - 0) * (100vw - 320px) / (900 - 320));
      width: calc(170px + (400 - 170) * (100vw - 320px) / (900 - 320));
      padding: 20px 20px calc(20px + (60 - 20) * (100vw - 320px) / (900 - 320))
        20px;
    }
  }
`;

class BoxyLanding extends Component {
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
        <TopText scale={this.state.scale}>We're Lost</TopText>
        <SideText scale={this.state.scale}>
          aaron<br />casanova
        </SideText>
        <CircleLogo scale={this.state.scale}>LA</CircleLogo>
        <OutlineBox />
        <ImagesSection scale={this.state.scale}>
          <LargeImgWrapper scale={this.state.scale}>
            <img
              src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
              alt="dog"
            />
            <SmallImgWrapper scale={this.state.scale}>
              <img
                src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80"
                alt="cat"
              />
            </SmallImgWrapper>
          </LargeImgWrapper>
          <ContentBox scale={this.state.scale}>
            CREATE A SHARED RITUAL
          </ContentBox>
        </ImagesSection>
        <ContentSection scale={this.state.scale}>
          <p>
            Friday 20 April<br />AM
          </p>
          <h2>
            To Build<br />Relationships
          </h2>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatibus ut eveniet soluta ipsum quam enim libero obcaecati cum
            architecto nisi
          </h6>
        </ContentSection>
        {/* <OutlineBox>
          <ImagesSection>
            <ImagesWrapper scale={this.state.scale}>
              <LargeImgWrapper scale={this.state.scale}>
                <img
                  src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
                  alt="dog"
                />
                <SmallImgWrapper scale={this.state.scale}>
                  <img
                    src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80"
                    alt="cat"
                  />
                </SmallImgWrapper>
              </LargeImgWrapper>
              <ContentBox scale={this.state.scale}>
                CREATE A SHARED RITUAL
              </ContentBox>
            </ImagesWrapper>
          </ImagesSection>
          <ContentSection scale={this.state.scale}>
            <div>
              <p>
                Friday 20 April<br />AM
              </p>
              <h2>
                To Build<br />Relationships
              </h2>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptatibus ut eveniet soluta ipsum quam enim libero obcaecati
                cum architecto nisi
              </h6>
            </div>
          </ContentSection>
        </OutlineBox> */}
      </Wrapper>
    );
  }
}

export default BoxyLanding;
