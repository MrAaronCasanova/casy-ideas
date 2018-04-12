import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './Profiles.css';
class Profiles extends Component {
  state = {
    show: false
  };

  showBtn = () => {
    this.setState({
      show: !this.state.show ? true : false
    });
  };

  render() {
    return (
      <div className={styles.profiles}>
        <div className={styles.navBar}>
          <button
            type="button"
            className={styles.showBtn}
            onClick={this.showBtn}
          >
            {`${this.state.show}`}
          </button>
          <Link to={this.props.routes[0].path}>
            <h1 className={styles.logo}>{this.props.logo}</h1>
          </Link>
        </div>
        <CSSTransition
          in={this.state.show}
          timeout={2000}
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
            {this.props.routes.map((route, i) => {
              return (
                <li key={i} className={styles.link}>
                  <Link
                    className={styles.a}
                    to={`${route.path}`}
                    onClick={this.showBtn}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </CSSTransition>
      </div>
    );
  }
}

export default Profiles;
