import './Component.css';
import axios from 'axios';
import React, { useState } from 'react';

function SecondPage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  }


const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('https://learnerwebapp.azurewebsites.net/api/query', { Prompt: prompt })
    .then(response => {
      setResponse(response.data.response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


  return (
    <div>
      <p/>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input type="text" value={prompt} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Response: {response}</p>
    </div>
  );
}

export default SecondPage;
