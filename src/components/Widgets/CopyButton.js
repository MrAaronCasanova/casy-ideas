import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
class CopyButton extends Component {
  state = {
    id: '',
    code: ''
  };

  componentWillMount() {
    let id = this.props.id;
    if (id !== this.state.id) {
      axios
        .get(`http://numbersapi.com/random/${id}`)
        .then(res => {
          let code = res.data;
          this.setState({
            id: this.props.id,
            code
          });
        })
        .catch(err => console.log(err));
    }
  }

  copyToClipboard = (id, e) => {
    e.preventDefault();
    let input = e.target.children[0];
    let button = e.target.children[1];
    input.select();
    document.execCommand('copy');
    button.innerText = 'Copied';
  };

  componentWillUnmount() {
    this.setState({
      id: '',
      code: ''
    });
  }

  render() {
    return (
      <div>
        <FormWrapper onSubmit={e => this.copyToClipboard(this.props.id, e)}>
          <HiddenInput type="text" value={this.state.code} readOnly />
          <Button>Copy</Button>
        </FormWrapper>
      </div>
    );
  }
}

export default CopyButton;
