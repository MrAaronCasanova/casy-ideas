import React, { Component } from 'react';
import styles from './App.css';
import DownButton from './components/Navigation/AnchorButtons/DownButton/DownButton';
import TextField from './components/TextField/TextField';
import FlattenToggler from './components/Navigation/NavTogglers/FlattenToggler/FlattenToggler';
import ToXToggler from './components/Navigation/NavTogglers/ToXToggler/ToXToggler';

class App extends Component {
  render() {
    return (
      <div className={styles.hamburger}>
        <div className={styles.pageWrapper}>
          <div className={styles.mainHeading}>
            <h1 className={styles.mainHeadingText}>Casy's Collection</h1>
          </div>

          <section>
            <div className={styles.imageGallery}>
              <div className={styles.imageGalleryPicture}>
                <h2 className={styles.imageGalleryTitle}>Navbars</h2>
                <a href="components/navs/navbars/navbar1/navbar1-index.html">
                  <img
                    src="https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Section Button"
                  />
                </a>
              </div>
              <div className={styles.imageGalleryPicture}>
                <h2 className={styles.imageGalleryTitle}>Images</h2>
                <a href="components/images/images-index.html">
                  <img
                    src="https://images.pexels.com/photos/327803/pexels-photo-327803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Section Button"
                  />
                </a>
              </div>
              <div className={styles.imageGalleryPicture}>
                <h2 className={styles.imageGalleryTitle}>Buttons</h2>
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
            <div className={styles.togglers}>
              <ToXToggler />
              <FlattenToggler />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
