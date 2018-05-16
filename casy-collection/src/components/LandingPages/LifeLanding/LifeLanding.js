import React, { Component } from 'react';
import styled from 'styled-components';
import { ScaleContext } from './../../../ScaleContext';

const Wrapper = styled.div`
  position: relative;
  z-index: -2;
  min-height: 100%;
  padding: calc(50px + (300 - 50) * (100vw - 320px) / (2500 - 320)) 0;
  background: #cfdcd3;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Os = styled.div`
  z-index: -1;
  font-size: calc(
    280px + (2500 - 280) * (${props => props.scale} - 320px) / (2500 - 320)
  );
  font-weight: bold;
  color: #dce7e1;

  &:first-child {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-33%, -33%);
  }
  &:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(33%, 33%);
  }
`;

const CardWrapper = styled.div`
  width: calc(300px + (2200 - 300) * (100vw - 320px) / (2500 - 320));
  min-height: 100%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  @media (max-width: 1210px) {
    flex-direction: column;
  }
`;

const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightWrap = styled.div`
  width: calc(600px + (1000 - 600) * (100vw - 1210px) / (2500 - 1210));
  @media (max-width: 1210px) {
    width: 100%;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItemsWrapper = styled.div`
  color: #fff;
  width: 100%;
  background: #4e7e64;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Logo = styled.h2`
  color: #fff;
  border-bottom: 2px solid #fff;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;

  li {
    padding: 20px 0 20px 20px;
    font-size: calc(18px + (32 - 20) * (100vw - 320px) / (2500 - 320));
  }
`;

const NavSearch = styled.div`
  font-size: calc(18px + (30 - 20) * (100vw - 320px) / (2500 - 320));
  padding: 20px 40px;
  text-align: bottom;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
  }

  & > span {
    padding-bottom: 4px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
  }
`;

const MagGlass = styled.span`
  margin-left: calc(150px + (400 - 150) * (100vw - 320px) / (2500 - 320));
`;

const CardBody = styled.div`
  padding: calc(20px + (60 - 20) * (100vw - 320px) / (2500 - 320)) 20px;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const BodyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  padding-left: calc(0px + (200 - 0) * (100vw - 320px) / (2500 - 320));
  padding-right: 50px;

  h2 {
    line-height: 0.85;
    font-size: calc(60px + (100 - 60) * (100vw - 320px) / (2500 - 320));
    color: #4e7e64;
    font-weight: bold;
  }

  p {
    padding: 40px 0;
    color: #cecece;
    font-weight: bold;
    font-size: calc(16px + (24 - 16) * (100vw - 320px) / (2500 - 320));
  }

  @media (max-width: 600px) {
    p {
      text-align: center;
    }
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  div {
    background: #dddddd;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: 50px;

    &:nth-of-type(2) {
      margin-left: 50px;
    }
  }
  @media (max-width: 600px) {
    & {
      align-self: center;
      margin-bottom: calc(80px + (110 - 80) * (100vw - 320px) / (600 - 320));
    }
  }
`;

const BodyImgWrapper = styled.div`
  flex: 1 1 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 1210px) {
    & {
      transform: translateX(
        calc(100px + (300 - 100) * (100vw - 1210px) / (2500 - 1210))
      );
    }
  }
`;

const NumberBox = styled.div`
  position: absolute;
  bottom: 60px;
  left: -40px;
  width: calc(80px + (250 - 80) * (100vw - 320px) / (2500 - 320));
  height: calc(80px + (250 - 80) * (100vw - 320px) / (2500 - 320));
  background: #4e7e64;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: calc(50px + (150 - 50) * (100vw - 320px) / (2500 - 320));
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    & {
      top: -25%;
      left: 60%;
    }
  }
`;

const CardFooter = styled.ul`
  list-style: none;
  display: flex;
  margin-left: calc(0px + (200 - 0) * (100vw - 320px) / (2500 - 320));

  & > * {
    font-weight: bold;
    padding: 20px 20px calc(20px + (60 - 20) * (100vw - 320px) / (2500 - 320))
      20px;
    font-size: calc(14px + (20 - 14) * (100vw - 320px) / (2500 - 320));
  }

  @media (max-width: 1210px) {
    justify-content: center;
    margin-left: 0;
  }
`;

const CardSide = styled.div`
  padding: 20px;
  text-align: center;
  font-size: calc(20px + (40 - 20) * (100vw - 320px) / (2500 - 320));
  color: #fff;
  background: #4e7e64;
  height: 100%;

  span {
    padding: 0 30px;
  }
`;

class LifeLanding extends Component {
  render() {
    return (
      <ScaleContext.Consumer>
        {context => (
          <Wrapper>
            <Os scale={context.state.scale}>O</Os>
            <CardWrapper>
              <LeftWrap>
                <NavWrapper>
                  <NavItemsWrapper>
                    <Logo>LIFE</Logo>
                    <NavItems>
                      <li>Life</li>
                      <li>Outdoor</li>
                      <li>Prize</li>
                    </NavItems>
                  </NavItemsWrapper>
                  <NavSearch>
                    <span>
                      Search...<MagGlass>🔍</MagGlass>
                    </span>
                  </NavSearch>
                </NavWrapper>
                <CardBody>
                  <BodyContentWrapper>
                    <h2>
                      Life<br />
                      Is Art.
                    </h2>
                    <p>Love the life you live. Live the life you love.</p>
                    <ArrowWrapper>
                      <div>◀</div>
                      <div>▶</div>
                    </ArrowWrapper>
                  </BodyContentWrapper>
                  <BodyImgWrapper>
                    <img
                      src="https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      alt="open water"
                    />
                    <NumberBox>03</NumberBox>
                  </BodyImgWrapper>
                </CardBody>
                <CardFooter>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                </CardFooter>
              </LeftWrap>
              <RightWrap>
                <CardSide>
                  Login <span>☰</span>
                </CardSide>
              </RightWrap>
            </CardWrapper>
            <Os scale={context.state.scale}>O</Os>
          </Wrapper>
        )}
      </ScaleContext.Consumer>
    );
  }
}

export default LifeLanding;
