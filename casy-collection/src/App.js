import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// BroswerRouter is an object that interacts with the url history
// Route executes whatever the BrowserRouter passes
// ------ Components ------ //
import CenteredDropNav from './components/NavigationComponents/Navbars/CenteredDropNav/CenteredDropNav';
import Routes from './components/Routes/Routes';
// ------------------------ //
// ------ Styles ------ //
import styles from './App.css';
// -------------------- //

import { RoutesData } from './DumbyData';
import { CompanyInfo } from './DumbyData';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* ------ Page Wrapper ------ */}
        <div className={styles.pageWrapper}>
          {/* ------ Header ------ */}
          <CenteredDropNav logo={CompanyInfo.name} routes={RoutesData} />
          {/* ------ Routes ------ */}
          <Routes />
          {/* ------ Footer ------ */}
          Footer
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// on video 029
// on video 038 CSSTransition Basics
// watch vid 52 for CSSTransition in action (folder 5)
// move on to folder 6
// vid 49 explains some useful reusable code tips
// vid 118 setup node express and react

// ------ Todo ------ //
// rename OutlineFillCard
// make OFCard resuable
// tidy up LayeredText Component on LandingPages
// finish ressiz text on apiccoLanding
// cleaned up layered text
// add ScaleWithState (sws) to App.js and pass down to all componenets
// ^^^ (currently a ton of resize event listener going on)
