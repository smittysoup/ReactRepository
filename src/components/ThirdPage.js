import React from 'react';
import './Component.css';

const ThirdPage = ({ data }) => {
  return (
    <div className="secondPage">
      <h1>ThirdPage: {data.name}</h1>
    </div>
  );
};

export default ThirdPage;
