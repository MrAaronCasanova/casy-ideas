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
        <Transition in={this.state.show} timeout={1000}>
          {state => (
            <div className={`${styles.square} ${styles[state]}`}>{`${
              styles.square
            } ${styles[state]}`}</div>
          )}
        </Transition>
        <div className={styles.showBtn} onClick={this.showBtn}>
          Show or Hide
        </div>
      </div>
    );
  }
}

export default Transitions;
