import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './CSSTransitionEx.css';

class CSSTransitionEx extends Component {
  state = {
    show: true
  };

  showBtn = () => {
    this.setState({
      show: !this.state.show ? true : false
    });
  };

  render() {
    return (
      <div className={styles.CSSTransition}>
        <CSSTransition
          in={this.state.show}
          timeout={5000}
          // classNames={`${styles.square} a`}
          classNames={''}
        >
          <div className={`${styles.square} ${this.state.show}`}>hello</div>
        </CSSTransition>
        <div className={styles.showBtn} onClick={this.showBtn}>
          Show or Hide
        </div>
        {/* <Transition
          in={this.state.show}
          timeout={{
            enter: 2000,
            exit: 2000
          }}
          // false boolean skips entering||exiting state
          enter={false}
          exit={true}
          onEnter={node => {
            // won't log because enter={false}
            // code would normally run at the entering state
            console.log(node);
          }}
          onExit={node => {
            console.log(node);
            console.log('bye bye');
          }}
        >
          {state => (
            <div className={`${styles.square} ${styles[state]}`}>{`${
              styles.square
            } ${styles[state]}`}</div>
          )}
        </Transition> */}
      </div>
    );
  }
}

export default CSSTransitionEx;
