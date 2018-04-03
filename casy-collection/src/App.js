import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// BroswerRouter is an object that interacts with the url history
// Route executes whatever the BrowserRouter passes
// ------ Components ------ //
import DownButton from './components/NavigationComponents/AnchorButtons/DownButton/DownButton';
import TextField from './components/TextComponents/TextField/TextField';
import FlattenToggler from './components/NavigationComponents/NavTogglers/FlattenToggler/FlattenToggler';
import ToXToggler from './components/NavigationComponents/NavTogglers/ToXToggler/ToXToggler';
import HalvingGallery from './components/ImageComponents/ImageGalleries/HalvingGallery/HalvingGallery';
import PoppingImage from './components/ImageComponents/ImageEffects/PoppingImage/PoppingImage';
import SingleTitleNav from './components/NavigationComponents/Navbars/SingleTitleNav/SingleTitleNav';
import Home from './components/Routes/Home';
import Posts from './components/Routes/Posts';
import Profiles from './components/Routes/Profiles';
// ------------------------ //
// ------ Styles ------ //
import styles from './App.css';
// -------------------- //

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.pageWrapper}>
          <Link className={styles.HomeLink} to="/profiles">
            <SingleTitleNav />
          </Link>

          <section>
            <HalvingGallery />
          </section>

          {/* <section>
            <div className={styles.imageGallery}>
              <div className={styles.imageGalleryPicture}>
                <h2 className={styles.imageGalleryTitle}>Navbars</h2>
                <Link to="/profiles">
                  <img
                    src="https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Section Button"
                  />
                </Link>
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
          </section> */}

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

          <section>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profiles">Profiles</Link>
          </section>
          <section>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/posts" component={Posts} />
              <Route path="/profiles" component={Profiles} />
            </Switch>
          </section>
          <section>
            <div className={styles.deleteMe}>
              <PoppingImage />
              <PoppingImage />
            </div>
          </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// Just finished video 027
