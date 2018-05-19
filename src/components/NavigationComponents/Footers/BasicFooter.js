import React from 'react';
import styled from 'styled-components';
import { vpScale } from './../../../helpers';
import { ScaleContext } from './../../../ScaleContext';

const Wrapper = styled.footer`
  /* ---- CSS Variables Section ----- */
  --grid-brdr: ${0 ? 'red' : 'none'};
  --line-color: #e1e1e1;
  --bg-color: #f9f9f9;
  /* -------------------------------- */
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  background: var(--bg-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  /* ------------------------------------- */
  display: grid;
  grid-template-columns:
    ${vpScale(28, 32, 320, 750, 'vwUnit')}
    [Content-start Link1-start ]
    ${vpScale(15, 11, 320, 750, 'vwUnit')}
    [Link1-end Link2-start]
    ${vpScale(15, 11, 320, 750, 'vwUnit')}
    [Link2-end Link3-start]
    ${vpScale(15, 11, 320, 750, 'vwUnit')}
    [Link3-end Email-start]
    ${vpScale(7, 11, 320, 750, 'vwUnit')}
    [Email-end Content-end]
    ${vpScale(20, 24, 320, 750, 'vwUnit')};

  grid-template-rows:
    ${vpScale(30, 9, 320, 1300, 'vhUnit')}
    [ContentLine]
    ${vpScale(52, 15, 320, 1300, 'vhUnit')};
  min-height: 100%;
  padding-bottom: 35px;
`;

const Email = styled.p`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;

  font-size: ${props => vpScale(12, 26, 320, 1300, 'sPx', props.scale)};

  span {
    font-size: ${props => vpScale(20, 20, 320, 1300, 'sPx', props.scale)};
    padding-right: 8px;
  }
`;

const Link = styled.a`
  justify-self: center;
  align-self: end;

  border: 1px solid var(--line-color);
  width: ${props => vpScale(30, 40, 320, 750, 'sPx', props.scale)};
  height: ${props => vpScale(30, 40, 320, 750, 'sPx', props.scale)};
  font-size: ${props => vpScale(12, 16, 320, 750, 'sPx', props.scale)};
  line-height: ${props => vpScale(27, 40, 320, 750, 'sPx', props.scale)};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: white;
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

  &:nth-of-type(1) {
    grid-column: Link1-start / Link1-end;
    grid-row: 1 / 2;
    grid-row: 2 / 3;
    align-self: start;
    margin-top: 7px;
  }
  &:nth-of-type(2) {
    grid-column: Link2-start / Link2-end;
    grid-row: 1 / 2;
    grid-row: 2 / 3;
    align-self: start;
    margin-top: 7px;
  }
  &:nth-of-type(3) {
    grid-column: Link3-start / Link3-end;
    grid-row: 2 / 3;
    align-self: start;
    margin-top: 7px;
  }
`;

const Copyright = styled.p`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;

  font-size: ${props => vpScale(13, 21, 320, 750, 'sPx', props.scale)};
  transform: translateY(
    calc(20px + (30 - 20) * (100vh - 320px) / (1300 - 320))
  );
`;

const MainLine = styled.div`
  border: 2px solid var(--grid-brdr);
  grid-column: 1 / Content-end;
  grid-row: 2 / 3;
  height: 2px;
  background: var(--line-color);
`;
const HighLine = styled.div`
  border: 2px solid var(--grid-brdr);
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: end;
  height: 115%;
  width: 2px;
  background: var(--line-color);
  transform: translateY(23%);
`;
const MidLine = styled.div`
  border: 2px solid var(--grid-brdr);
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  justify-self: end;
  height: 115%;
  width: 2px;
  background: var(--line-color);
  transform: translateY(48%);
`;
const LowLine = styled.div`
  border: 2px solid var(--grid-brdr);
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  justify-self: end;
  height: 115%;
  width: 2px;
  background: var(--line-color);
  transform: translateY(73%);
`;

const BasicFooter = () => {
  return (
    <ScaleContext.Consumer>
      {context => (
        <Wrapper>
          <Email scale={context.state.scale}>mraaroncasanova@gmail.com</Email>
          <Link
            href="https://instagram.com/casyjs"
            target="_blank"
            color="Instagram"
            scale={context.state.scale}
          >
            I
          </Link>
          <Link
            href="https://twitter.com/casyjs"
            target="_blank"
            color="Twitter"
            scale={context.state.scale}
          >
            T
          </Link>
          <Link
            href="https://facebook.com/casyjs"
            target="_blank"
            color="Facebook"
            scale={context.state.scale}
          >
            F
          </Link>
          <Copyright scale={context.state.scale}>
            © 2018 Casy.js All Rights Reserved
          </Copyright>
          <MainLine scale={context.state.scale} />
          <HighLine scale={context.state.scale} />
          <MidLine scale={context.state.scale} />
          <LowLine scale={context.state.scale} />
        </Wrapper>
      )}
    </ScaleContext.Consumer>
  );
};

export default BasicFooter;
