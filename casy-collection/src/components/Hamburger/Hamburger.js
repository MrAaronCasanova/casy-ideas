import React from 'react';
import './Hamburger.css';

const Hamburger = () => {
  return (
    <div className="hamburger">
      <div className="hamburger__wrapper">
        <div className="hamburger__menu flatten" />
      </div>
      <div className="hamburger__wrapper">
        <div className="hamburger__menu cross" />
      </div>
    </div>
  );
};

export default Hamburger;
