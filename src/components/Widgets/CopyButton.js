import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  background: lightsteelblue;
  width: 200px;
  height: 60px;
  margin: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #8e8e8e;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.08);

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const HiddenInput = styled.input``;

const Button = styled.button`
  font-size: 20px;
  width: 100%;
  height: 100%;
`;

const copyToClipboard = e => {
  e.preventDefault();
  let input = e.target.children[0];
  let button = e.target.children[1];
  input.select();
  document.execCommand('copy');
  button.innerText = 'Copied';
};

const CopyButton = props => {
  return (
    <div>
      <FormWrapper onSubmit={copyToClipboard}>
        <HiddenInput type="text" value={props.code} readOnly />
        <Button>Copy</Button>
      </FormWrapper>
    </div>
  );
};

export default CopyButton;
