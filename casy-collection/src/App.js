import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// BroswerRouter is an object that interacts with the url history
// Route executes whatever the BrowserRouter passes
// ------ Components ------ //
import FlattenToggler from './components/NavigationComponents/NavTogglers/FlattenToggler/FlattenToggler';
import ToXToggler from './components/NavigationComponents/NavTogglers/ToXToggler/ToXToggler';
import PoppingImage from './components/ImageComponents/ImageEffects/PoppingImage/PoppingImage';
import SingleTitleNav from './components/NavigationComponents/Navbars/SingleTitleNav/SingleTitleNav';
// ------------------------ //
// ------ Routs ------- //
import Home from './components/Routes/Home';
import Posts from './components/Routes/Posts';
import Profiles from './components/Routes/Profiles';
import Buttons from './components/Routes/Buttons';
import Cards from './components/Routes/Cards';
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
          </ul>

          <div className={styles.section}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/posts" component={Posts} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/buttons" component={Buttons} />
              <Route path="/cards" component={Cards} />
            </Switch>
          </div>

          <section className={styles.section}>
            <div className={styles.togglers}>
              <ToXToggler />
              <FlattenToggler />
            </div>
          </section>

          <section className={styles.section}>
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
