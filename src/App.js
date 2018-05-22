import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// ------ Components ------ //
import CenteredDropNav from './components/NavigationComponents/Navbars/CenteredDropNav/CenteredDropNav';
import Routes from './components/Routes/Routes';
import BasicFooter from './components/NavigationComponents/Footers/BasicFooter';
import ScrollToTop from './components/Widgets/ScrollToTop';
// ------------------------ //
// ------ Styles ------ //
import styles from './App.css';
// -------------------- //

import { RoutesData } from './DumbyData';
import { CompanyInfo } from './DumbyData';
import { ScaleProvider } from './ScaleContext';

class App extends Component {
  render() {
    return (
      <ScaleProvider>
        <BrowserRouter>
          {/* ------ Page Wrapper ------ */}
          <div className={styles.pageWrapper}>
            {/* ------ Header ------ */}
            <CenteredDropNav logo={CompanyInfo.name} routes={RoutesData} />
            {/* ------ Routes ------ */}
            <div className={styles.Routes}>
              <ScrollToTop>
                <Routes />
              </ScrollToTop>
            </div>
            {/* ------ Footer ------ */}
            <BasicFooter />
          </div>
        </BrowserRouter>
      </ScaleProvider>
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
// search for all class components and see if they can refactor to functional comp
// could probably move ScaleProvider inside routes or ...
// eventually add ScaleContext or completely seperate provider for CenterDropNav (high/lowBreak)
// create styled element snippet with essential starting point props  // const ${name} = styled.${type} etc...
// feed vpScale to top wrapper --scale: custom prop
// start from placeholder 9 halving gallery on home page

// ====== open sources ideas ======
// apicco.com side nav / link animation in nav
