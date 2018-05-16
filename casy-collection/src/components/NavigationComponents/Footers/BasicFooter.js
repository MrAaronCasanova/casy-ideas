import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
`;

const Email = styled.p`
  flex: 1 1 50%;
  display: flex;
  align-items: center;

  span {
    font-size: 40px;
    padding: 0 15px 0 30px;
  }
`;

const Social = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
`;

const Link = styled.a`
  border: 1px solid black;
  margin: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: white;
  font-size: 20px;
  /* background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  ); */
  background: ${props =>
    props.color === 'Instagram'
      ? `radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  )`
      : props.color === 'Twitter'
        ? ' #1DA1F2'
        : props.color === 'Facebook'
          ? '#3B5998'
          : null};
`;

const Copyright = styled.p`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const BasicFooter = () => {
  return (
    <Wrapper>
      <Email>
        <span>&#9993;</span> mraaroncasanova@gmail.com
      </Email>
      <Social>
        <Link
          href="https://instagram.com/casyjs"
          target="_blank"
          color="Instagram"
        >
          I
        </Link>
        <Link href="https://twitter.com/casyjs" target="_blank" color="Twitter">
          T
        </Link>
        <Link
          href="https://facebook.com/casyjs"
          target="_blank"
          color="Facebook"
        >
          F
        </Link>
      </Social>
      <Copyright>© 2018 Casy.js All Rights Reserved</Copyright>
    </Wrapper>
  );
};

export default BasicFooter;
