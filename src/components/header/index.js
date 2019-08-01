import React from 'react';

import './style.css';
import logo from '../navigation/logo.png';
const Header = () => {
  return (
    <div class="header">
      <div class="container welcome">
        <img src={logo} className="logo-img" alt="Velocity Games" />
        <h1 class="x-large">Video Game Marketplace</h1>
      </div>
    </div>
  );
};

export default Header;
