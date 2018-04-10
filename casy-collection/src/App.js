import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// BroswerRouter is an object that interacts with the url history
// Route executes whatever the BrowserRouter passes
// ------ Components ------ //
import SingleTitleNav from './components/NavigationComponents/Navbars/SingleTitleNav/SingleTitleNav';
// ------------------------ //
// ------ Routs ------- //
import Home from './components/Routes/Home';
import Posts from './components/Routes/Posts/Posts';
import Profiles from './components/Routes/Profiles';
import Buttons from './components/Routes/Buttons/Buttons';
import Cards from './components/Routes/Cards/Cards';
import Navigation from './components/Routes/Navigation/Navigation';
import LandingPages from './components/Routes/LandingPages/LandingPages';
import NotFound from './components/Routes/NotFound/NotFound';
// -------------------- //
// ------ Styles ------ //
import styles from './App.css';
// -------------------- //

class App extends Component {
  state = {
    open: false,
    nav: `${styles.flexLinks} ${styles.close}`,
    placeHolderToggler: '☰'
  };

  closeMenu = () => {
    console.log(this.state.open);
    const update = { ...this.state };
    if (update.open) {
      update.nav = `${styles.flexLinks} ${styles.close}`;
      update.placeHolderToggler = '☰';
      update.open = false;
    } else {
      update.nav = styles.flexLinks;
      update.placeHolderToggler = '✕';
      update.open = true;
    }
    this.setState({
      ...update
    });
  };

  render() {
    return (
      <BrowserRouter>
        {/* ------ Page Wrapper ------ */}
        <div className={styles.pageWrapper}>
          {/* ------ Main Nav ------ */}
          <Link className={styles.HomeLink} to="/">
            <SingleTitleNav />
            <div className={styles.placeHolderToggler} onClick={this.closeMenu}>
              {this.state.placeHolderToggler}
            </div>
          </Link>

          {/* ------ Main Nav Links ------ */}
          <ul className={this.state.nav}>
            <Link onClick={this.closeMenu} className={styles.flexLink} to="/">
              Home
            </Link>
            <Link
              onClick={this.closeMenu}
              className={styles.flexLink}
              to="/posts"
            >
              Posts
            </Link>
            <Link
              onClick={this.closeMenu}
              className={styles.flexLink}
              to="/profiles"
            >
              Profiles
            </Link>
            <Link
              onClick={this.closeMenu}
              className={styles.flexLink}
              to="/buttons"
            >
              Buttons
            </Link>
            <Link
              onClick={this.closeMenu}
              className={styles.flexLink}
              to="/cards"
            >
              Cards
            </Link>
            <Link
              onClick={this.closeMenu}
              className={styles.flexLink}
              to="/navigation"
            >
              Navigation
            </Link>
            <Link
              onClick={this.closeMenu}
              className={styles.flexLink}
              to="/landing-pages"
            >
              Landing Pages
            </Link>
          </ul>

          {/* ------ Routes ------ */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/profiles" component={Profiles} />
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
