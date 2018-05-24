import React, { Component } from 'react';
import axios from 'axios';

export const CodeContext = React.createContext();

export class CodeProvider extends Component {
  state = {
    test: 'I dont think this is the best idea'
  };

  ronQuotes = () => {
    // const self = this;
    // let ronUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', ronUrl);
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //     let resData = JSON.parse(xhr.responseText)[0];
    //     let mainText = resData + ' - Ron Swanson';
    //     console.log(mainText);
    //     self.setState({
    //       test: mainText
    //     });
    //   }
    // };
    // xhr.send();
  };

  fetchCode = () => {
    axios
      .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(res => console.log(res.data[0]))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <CodeContext.Provider
        value={{
          state: this.state,
          fetchCode: this.fetchCode
        }}
      >
        {this.props.children}
      </CodeContext.Provider>
    );
  }
}
