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
  axios({
    method: 'post',
    url: 'https://learnerwebapp.azurewebsites.net/api/query',
    data: { Prompt: prompt , Sender: 'test'},
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      const result = response.data.result;
      setResponse(result);
    })
    .catch(error => {
      console.log(error.config);
      console.log(error.request);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    });
}


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
      <p>response: {response}</p>

    </div>
  );
}

export default SecondPage;
