import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: -2;
  min-height: 100vh;
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
    280px + (2500 - 280) * (${props => `${props.scale}px`} - 320px) /
      (2500 - 320)
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
  min-height: 70vh;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LeftWrap = styled.div`
  flex: 1 1 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const RightWrap = styled.div`
  flex: 1 1 25%;
`;

const NavWrapper = styled.div`
  flex: 1 1 10%;
  display: flex;
`;

const NavItemsWrapper = styled.div`
  color: #fff;
  flex: 1 1 50%;
  background: #4e7e64;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  color: #fff;
  border-bottom: 2px solid #fff;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;

  li {
    padding: 20px;
    font-size: 20px;
  }
`;

const NavSearch = styled.div`
  flex: 1 1 50%;
  font-size: 20px;
  padding: 20px 250px 20px 20px;
  text-align: bottom;

  & > span {
    padding-bottom: 4px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000;
  }
`;

const CardBody = styled.div`
  flex: 1 1 80%;
  display: flex;
`;

const BodyContentWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15%;

  h2 {
    line-height: 0.85;
    font-size: 65px;
    color: #4e7e64;
    font-weight: bold;
  }

  p {
    padding: 40px 0;
    color: #cecece;
    font-weight: bold;
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
`;

const BodyImgWrapper = styled.div`
  flex: 1 1 50%;
  margin: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  transform: translateX(40%);
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NumberBox = styled.div`
  position: absolute;
  bottom: 60px;
  left: -40px;
  width: 150px;
  height: 150px;
  background: #4e7e64;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-size: 60px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardFooter = styled.ul`
  flex: 1 1 10%;
  list-style: none;
  display: flex;
  margin-left: 100px;

  & > * {
    font-weight: bold;
    padding: 20px;
  }
`;

const CardSide = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  background: #4e7e64;
  height: 100%;

  span {
    padding: 0 30px;
  }
`;

class LifeLanding extends Component {
  state = {
    scale: null
  };

  getScale = () => {
    let scaleWidth = window.innerWidth;
    let scaleHeight = window.innerHeight;
    let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
    return scale;
    // return `${scale}px`;
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
        <Os scale={this.state.scale}>O</Os>
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
                  Search...<span>🔍</span>
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
        <Os scale={this.state.scale}>O</Os>
      </Wrapper>
    );
  }
}

export default LifeLanding;
