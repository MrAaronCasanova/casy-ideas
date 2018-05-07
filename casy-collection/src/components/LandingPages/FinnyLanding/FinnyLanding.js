import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  margin-left: 130px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const LogoText = styled.h2`
  margin: 120px 0;
  font-size: 25px;
  font-weight: bold;
`;

const MainHeading = styled.h2`
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
`;

const DescText = styled.p`
  color: #9e9e9e;
  width: 400px;
  margin-bottom: 80px;
`;

const CTAButton = styled.button`
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
`;

const NavContainer = styled.ul`
  list-style: none;
  width: 50%;
  display: flex;

  & > * {
    padding-right: 25px;
    font-weight: bold;

    &:last-child {
      color: #9e9e9e;
      margin-left: auto;
    }
  }
`;

const ImgOne = styled.img`
  position: absolute;
  top: 35px;
  right: 15vw;
  z-index: 1;
  width: 29vw;
  height: 250px;
  object-fit: cover;
`;

const ImgTwo = styled.img`
  right: 10vw;
  top: 20%;
  position: absolute;
  width: 40vw;
  height: 600px;
  object-fit: cover;
`;

const ImgThree = styled.img`
  position: absolute;
  right: 10vw;
  top: 77%;
  width: 25vw;
  height: 250px;
  object-fit: cover;
`;

const FinnyLanding = () => {
  return (
    <Wrapper>
      <LogoText>Finnerztaffen.</LogoText>
      <MainHeading>
        Ayo<br />River
      </MainHeading>
      <DescText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore in
        blanditiis illum architecto eius! Nemo, sapiente! Perspiciatis id aut
        velit labore molestias minima natus necessitatibus.
      </DescText>
      <CTAButton>get more</CTAButton>
      <NavContainer>
        <li>terms</li>
        <li>about</li>
        <li>blog</li>
        <li>contact</li>
        <li>mraaroncasanova@gmail.com</li>
      </NavContainer>
      <ImgOne
        src="https://images.pexels.com/photos/267858/pexels-photo-267858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="rocks"
      />
      <ImgTwo
        src="https://images.pexels.com/photos/127567/pexels-photo-127567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="boy"
      />
      <ImgThree
        src="https://images.pexels.com/photos/207328/pexels-photo-207328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="man"
      />
    </Wrapper>
  );
};

export default FinnyLanding;
