import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  background: #fff;
  padding: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlineBox = styled.div`
  border: 2px solid #d4d4d4;
  width: 100%;
  height: 80%;
  display: flex;
`;

const ImagesWrapper = styled.div`
  flex: 1 1 50%;
  background: #c9c9c9;
`;

const LargeImgWrapper = styled.div`
  /* ---------For Editing Layout---------- */
  border: 2px solid red;
  /* ------------------------------------- */
  width: 26vw;
  height: 26vw;
  transform: rotate(-45deg) translate(-20px, 15px);
  overflow: hidden;

  img {
    transform: rotate(45deg) translate(-25%, -10%);
    width: 150%;
    height: 150%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  flex: 1 1 50%;
  background: #f7f7f7;
`;

const BoxyLanding = () => {
  return (
    <Wrapper>
      <OutlineBox>
        <ImagesWrapper>
          <LargeImgWrapper>
            <img
              src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
              alt="pug"
            />
          </LargeImgWrapper>
        </ImagesWrapper>
        <ContentWrapper>hello</ContentWrapper>
      </OutlineBox>
    </Wrapper>
  );
};

export default BoxyLanding;
