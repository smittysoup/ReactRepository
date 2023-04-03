import axios from 'axios';
import React, { useState, useEffect } from 'react';

function APICall({prompt,sender}) {
    const [response, setResponse] = useState('');

    // Use the useEffect hook to make API calls when the 'prompt' prop changes
  useEffect(() => {
    if (!prompt) return;

    const fetchData = async () => {
        await axios({
        method: 'post',
        url: 'https://learnerwebapp.azurewebsites.net/api/query',
        data: { Prompt: prompt , Sender: sender},
        headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          setResponse(response.data.result);
        })
        .catch(error => {
          console.log(error.config);
          console.log(error.request);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        });
        };

    fetchData();
    }, [prompt,sender]);

    return <div>{response}</div>;
}

export default APICall;