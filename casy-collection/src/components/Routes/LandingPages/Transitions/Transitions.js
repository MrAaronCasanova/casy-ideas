import React from 'react';
import Transition from 'react-transition-group/Transition';
import styles from './Transitions.css';

class Transitions extends React.Component {
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
      <div className={styles.Transitions}>
        <Transition
          in={this.state.show}
          timeout={2000}
          mountOnEnter
          unmountOnExit
        >
          {state => (
            <div
              style={{
                background: 'red',
                height: '100px',
                transition: 'all 2000ms ease',
                opacity: state === 'exited' || state === 'exiting' ? 0 : 1
              }}
            >
              {state}
            </div>
          )}
        </Transition>
        <div className={styles.showBtn} onClick={this.showBtn}>
          Transition
        </div>
        {/* <div className={styles.showBtn} onClick={this.showBtn}>
          CSSTransition
        </div> */}
      </div>
    );
  }
}

export default Transitions;
