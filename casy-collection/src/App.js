import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// BroswerRouter is an object that interacts with the url history
// Route executes whatever the BrowserRouter passes
// ------ Components ------ //
import SingleTitleNav from './components/NavigationComponents/Navbars/SingleTitleNav/SingleTitleNav';
// ------------------------ //
// ------ Routs ------- //
import Home from './components/Routes/Home';
import Posts from './components/Routes/Posts';
import Profiles from './components/Routes/Profiles';
import Buttons from './components/Routes/Buttons/Buttons';
import Cards from './components/Routes/Cards/Cards';
import Navigation from './components/Routes/Navigation/Navigation';
import NotFound from './components/Routes/NotFound/NotFound';
// -------------------- //
// ------ Styles ------ //
import styles from './App.css';
// -------------------- //

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* ------ Page Wrapper ------ */}
        <div className={styles.pageWrapper}>
          {/* ------ Main Nav ------ */}
          <Link className={styles.HomeLink} to="/">
            <SingleTitleNav />
          </Link>

          {/* ------ Main Nav Links ------ */}
          <ul className={styles.flexLinks}>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profiles">Profiles</Link>
            <Link to="/buttons">Buttons</Link>
            <Link to="/cards">Cards</Link>
            <Link to="/navigation">Navigation</Link>
          </ul>

          {/* ------ Routes ------ */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/cards" component={Cards} />
            <Route path="/navigation" component={Navigation} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// on video 029
