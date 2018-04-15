import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './CenteredDropNav.css';

import HamToX from '../../NavTogglers/HamToX/HamToX';
class CenteredDropNav extends Component {
  state = {
    showDropdown: false
  };

  toggleBtn = () => {
    this.setState({
      showDropdown: !this.state.showDropdown
      // showDropdown: !this.state.showDropdown ? true : false
    });
  };

  hideDropdown = () => {
    this.setState({
      showDropdown: false
    });
  };

  createLink = (route, i) => {
    return (
      <li key={i} className={styles.link}>
        <Link
          className={styles.a}
          to={`${route.path}`}
          onClick={this.hideDropdown}
        >
          {route.name}
        </Link>
      </li>
    );
  };

  // Recommend to also removeListener on unmount,
  // but leaving infinite for proper nav functionality
  componentDidMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) {
        this.hideDropdown();
      }
    });
  }

  render() {
    return (
      <div className={styles.centeredDropNav}>
        <div className={styles.navBar}>
          <div className={styles.toggleBtn} onClick={this.toggleBtn}>
            <HamToX showDropdown={this.state.showDropdown} />
          </div>
          <h1 className={styles.logo} onClick={this.hideDropdown}>
            <Link className={styles.logoLink} to={this.props.routes[0].path}>
              {this.props.logo}
            </Link>
          </h1>
        </div>
        <CSSTransition
          in={this.state.showDropdown}
          timeout={700}
          classNames={{
            enter: styles.dropDownEnter,
            enterActive: styles.dropDownEnterActive,
            enterDone: styles.dropDownEnterDone,
            exit: styles.dropDownExit,
            exitActive: styles.dropDownExitActive,
            exitDone: styles.dropDownExitDone
          }}
        >
          <ul className={styles.links}>
            {this.props.routes.map((route, i) => this.createLink(route, i))}
          </ul>
        </CSSTransition>
      </div>
    );
  }
}

export default CenteredDropNav;
