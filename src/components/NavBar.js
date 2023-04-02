import React, { useState, useEffect } from 'react';
import './Component.css';

const NavBar = ({ currentPage }) => {

  return (
    <div className="navbar">
      <span>{currentPage}</span>
    </div>
  );
};

export default NavBar;
