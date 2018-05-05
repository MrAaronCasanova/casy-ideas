import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: #cfdcd3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Os = styled.div`
  padding: 0;
  margin: 0;
  font-size: 1100px;
  font-weight: bold;
  /* font-weight: 400; */
  color: #dce7e1;

  &:first-child {
    align-self: flex-start;
    transform: translate(-30%, -35%);
  }
  &:last-child {
    align-self: flex-end;
    transform: translate(25%, -95%);
  }
`;

const CardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 85vw;
  height: 70vh;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
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
  padding: 20px;
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
`;

const CardFooter = styled.div`
  flex: 1 1 10%;
`;

const CardSide = styled.div`
  color: #fff;
  background: #4e7e64;
  height: 100%;
`;

const BikeLanding = () => {
  return (
    <Wrapper>
      <Os>O</Os>
      <CardWrapper>
        <LeftWrap>
          <NavWrapper>
            <NavItemsWrapper>
              <Logo>BIKE</Logo>
              <NavItems>
                <li>Bike</li>
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
          <CardBody>body</CardBody>
          <CardFooter>footer</CardFooter>
        </LeftWrap>
        <RightWrap>
          <CardSide>side</CardSide>
        </RightWrap>
      </CardWrapper>
      <Os>O</Os>
    </Wrapper>
  );
};

export default BikeLanding;
