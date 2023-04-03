import React, { useState } from 'react';
import './Component.css';
import APICall from './APICall';

const ThirdPage = () => {
  const [prompt, setPrompt] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <p/>
      <p/>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input type="text" value={prompt} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>prompt: {prompt}</p>
      
      {submitted && (
        <div className="secondPage">
          <APICall prompt={prompt} sender={"test"} />
        </div>
      )}
    </div>
  );
};

export default ThirdPage;
