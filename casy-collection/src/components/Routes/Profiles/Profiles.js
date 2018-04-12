import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profiles.css';

const Profiles = props => {
  return (
    <div className={styles.profiles}>
      <h1 className={styles.logo}>{props.logo}</h1>
      <ul className={styles.links}>
        {props.routes.map((route, i) => {
          return (
            <li key={i} className={styles.link}>
              <Link to={`${route.path}`}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profiles;
