import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// BroswerRouter is an object that interacts with the url history
// Route executes whatever the BrowserRouter passes
// ------ Components ------ //
import CenteredDropNav from './components/NavigationComponents/Navbars/CenteredDropNav/CenteredDropNav';
// ------------------------ //
// ------ Routs ------- //
import Home from './components/Routes/Home';
import Buttons from './components/Routes/Buttons/Buttons';
import Cards from './components/Routes/Cards/Cards';
import Navigation from './components/Routes/Navigation/Navigation';
import LandingPages from './components/Routes/LandingPages/LandingPages';
import NotFound from './components/Routes/NotFound/NotFound';
// -------------------- //
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
          {/* ------ Main Nav ------ */}
          <CenteredDropNav logo={CompanyInfo.name} routes={RoutesData} />

          {/* ------ Routes ------ */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/cards" component={Cards} />
            <Route path="/navigation" component={Navigation} />
            <Route path="/landing-pages" component={LandingPages} />
            <Route component={NotFound} />
          </Switch>
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

// ------ Todo ------ //
// if statement for nav links (no need for NotFound Comp)
// refactor/rename entire nav
// change Profiles to actual Nav Component
