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
  width: 20%;
  height: 100%;
`;

// const copyToClipboard = e => {
//   e.preventDefault();
//   let input = e.target.children[0];
//   let button = e.target.children[1];
//   input.select();
//   document.execCommand('copy');
//   button.innerText = 'Copied';
// };

class CopyButton extends Component {
  state = {
    id: 'start',
    code: 'start'
  };

  componentWillMount() {
    let id = this.props.id;
    if (id !== this.state.id) {
      axios
        .get(`https://ron-swanson-quotes.herokuapp.com/v2/${id}`)
        .then(res => {
          let code = res.data[0];
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
    if (id !== this.state.id) {
      axios
        .get(`https://ron-swanson-quotes.herokuapp.com/v2/${id}`)
        .then(res => {
          let code = res.data[0];
          this.setState(
            {
              id,
              code
            },
            () => {
              console.log('callback');
              input.select();

              document.execCommand('copy');
              button.innerText = 'Copied';
            }
          );
        })
        .catch(err => console.log(err));
    } else {
      input.select();
      document.execCommand('copy');
      button.innerText = 'Copied';
    }
  };

  render() {
    console.log(this.state.code);
    return (
      <div>
        <FormWrapper onSubmit={e => this.copyToClipboard(this.props.id, e)}>
          <HiddenInput type="text" value={this.state.code} readOnly />
          {/* <HiddenInput type="text" value={props.code} readOnly /> */}
          <Button>Copy</Button>
        </FormWrapper>
      </div>
    );
  }
}

export default CopyButton;
