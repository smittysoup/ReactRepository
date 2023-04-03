import React, { useState, useEffect } from 'react';
import './Component.css';

const NavBar = ({ header }) => {
  var msgText = header;
  
    if (header = "Course Designer") { msgText= "Course Designer"}
    else {msgText=header}
  
  return (
    <div className="navbar">
      <span>{msgText}</span>
    </div>
  );
};

export default NavBar;
