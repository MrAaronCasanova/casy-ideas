import React, { Component } from 'react';
import './App.css';
import DownButton from './components/DownButton/DownButton';
import TextField from './components/TextField/TextField';
import Hamburger from './components/Hamburger/Hamburger';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-wrapper">
          <div className="main-heading">
            <h1 className="main-heading__text">Casy's Collection</h1>
          </div>

          <section>
            <div className="image-gallery">
              <div className="image-gallery__picture">
                <h2 className="image-gallery__title">Navbars</h2>
                <a href="components/navs/navbars/navbar1/navbar1-index.html">
                  <img
                    src="https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Section Button"
                  />
                </a>
              </div>
              <div className="image-gallery__picture">
                <h2 className="image-gallery__title">Images</h2>
                <a href="components/images/images-index.html">
                  <img
                    src="https://images.pexels.com/photos/327803/pexels-photo-327803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Section Button"
                  />
                </a>
              </div>
              <div className="image-gallery__picture">
                <h2 className="image-gallery__title">Buttons</h2>
                <a href="components/buttons/buttons-index.html">
                  <img
                    src="https://images.pexels.com/photos/243059/pexels-photo-243059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Section Button"
                  />
                </a>
              </div>
            </div>
          </section>

          <section>
            <DownButton />
          </section>

          <section>
            <TextField />
          </section>

          <section>
            <Hamburger />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
