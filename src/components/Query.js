import axios from 'axios';

const apiURL = 'https://djangoapp20230331155241-apim.azure-api.net/api/query';
const subscriptionKey = "7a0d212661944098b280d8552b606313";


const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Ocp-Apim-Subscription-Key", subscriptionKey);

const requestOptions = {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ key: "value" }), // Replace with your actual request payload
  };
  
  fetch(apiURL, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error("Error:", error));

async function getQuery(prompt) {
    try {
        const response = await axios.post(apiURL, { prompt });
        console.log(response.data.response);
    } catch (error) {
        console.error(error);
    }
}

getQuery('Im bored');
