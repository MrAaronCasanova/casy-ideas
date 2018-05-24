import React, { Component } from 'react';

export const CodeContext = React.createContext();

export class CodeProvider extends Component {
  state = {
    test: 'I dont think this is the best idea'
  };

  ronQuotes = () => {
    const self = this;
    let ronUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', ronUrl);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let resData = JSON.parse(xhr.responseText)[0];
        let mainText = resData + ' - Ron Swanson';
        console.log(mainText);

        self.setState({
          test: mainText
        });
      }
    };

    xhr.send();
  };

  fetchCode = () => {
    console.log('fetchCode');
  };

  render() {
    return (
      <CodeContext.Provider
        value={{
          state: this.state,
          fetchCode: this.ronQuotes
        }}
      >
        {this.props.children}
      </CodeContext.Provider>
    );
  }
}
