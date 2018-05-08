import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* -------------------------------------- */
  overflow: hidden;
  /* ---------- delet this ------------------ */
`;

const TopText = styled.h3`
  margin-bottom: 50px;
  font-weight: bold;
  letter-spacing: 5px;
  color: #565656;
`;

const SideText = TopText.extend`
  margin: 0;
  position: absolute;
  top: 31%;
  left: 0;
  transform: rotate(90deg);
`;

const CircleLogo = styled.div`
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
  position: absolute;
  right: 12%;
  top: 15%;
`;

const OutlineBox = styled.div`
  border: 2px solid #d4d4d4;
  width: 75%;
  height: 60%;
  display: flex;
`;

const ImagesSection = styled.section`
  flex: 1 1 50%;
`;

const ImagesWrapper = styled.div`
  position: relative;
  transform: rotate(-45deg) translate(-20px, 35px);
`;

const LargeImgWrapper = styled.div`
  border: 30px solid white;
  width: 30vw;
  height: 30vw;
  position: relative;
  overflow: hidden;

  img {
    transform: rotate(45deg) translate(-25%, -10%);
    width: 150%;
    height: 150%;
    object-fit: cover;
  }
`;

const SmallImgWrapper = styled.div`
  border-top: 20px solid white;
  border-left: 20px solid white;
  width: 15vw;
  height: 15vw;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;

  img {
    transform: rotate(45deg) translate(-25%, -7%);
    width: 150%;
    height: 150%;
    object-fit: cover;
  }
`;

const ContentSection = styled.section`
  flex: 1 1 50%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    transform: translate(14%, -5%);
    background: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  p {
    font-weight: bold;
    margin-bottom: 40px;
    font-size: 22px;
  }

  h2 {
    margin-bottom: 50px;
    font-family: 'Libre Baskerville', serif;
    font-size: 100px;
    line-height: 0.9;
    font-weight: 400;
  }

  h6 {
    font-size: 16px;
    font-weight: bold;
    width: 350px;
    color: #888888;
  }
`;

const ContentBox = styled.div`
  position: absolute;
  top: 85%;
  left: -20%;
  transform: rotate(45deg);
  white-space: nowrap;
  background: white;
  padding: 25px 40px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
`;

const BoxyLanding = () => {
  return (
    <Wrapper>
      <TopText>We're Lost</TopText>
      <SideText>
        Thank God<br />I Found You
      </SideText>
      <CircleLogo>LA</CircleLogo>
      <OutlineBox>
        <ImagesSection>
          <ImagesWrapper>
            <LargeImgWrapper>
              <img
                src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
                alt="dog"
              />
              <SmallImgWrapper>
                <img
                  src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80"
                  alt="cat"
                />
              </SmallImgWrapper>
            </LargeImgWrapper>
            <ContentBox>CREATE A SHARED RITUAL</ContentBox>
          </ImagesWrapper>
        </ImagesSection>
        <ContentSection>
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
      </OutlineBox>
    </Wrapper>
  );
};

export default BoxyLanding;
