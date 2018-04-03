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
import Buttons from './components/Routes/Buttons';
import Cards from './components/Routes/Cards/Cards';
import Navigation from './components/Routes/Navigation/Navigation';
// -------------------- //
// ------ Styles ------ //
import styles from './App.css';
// -------------------- //

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.pageWrapper}>
          <Link className={styles.HomeLink} to="/">
            <SingleTitleNav />
          </Link>

          <ul className={styles.flexLinks}>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profiles">Profiles</Link>
            <Link to="/buttons">Buttons</Link>
            <Link to="/cards">Cards</Link>
            <Link to="/navigation">Navigation</Link>
          </ul>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/cards" component={Cards} />
            <Route path="/navigation" component={Navigation} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// Just finished video 027
