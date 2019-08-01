import React from 'react';

import './style.css';
import logo from '../navigation/logo.png';
const Header = () => {
  return (
    <div class="header">
      <div class="welcome">
        <img src={logo} className="logo-img" alt="Velocity Games"/>
        <h1 class="x-large">
          The only online game marketplace where you can try before you buy!
        </h1>
        <h2>Find the best games at discounted prices everyday!</h2>
      </div>
    </div>
  );
};

export default Header;
