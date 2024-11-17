// index.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json()); // to parse incoming JSON requests

// Define the OpenAI API endpoint and the key
const openaiEndpoint = 'https://api.openai.com/v1/completions';
const apiKey = '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';

// Create an endpoint to interact with OpenAI
app.post('/openai', async (req, res) => {
  const { prompt, maxTokens = 100, temperature = 0.7 } = req.body;

  try {
    // Make a POST request to OpenAI's API
    const response = await axios.post(
      openaiEndpoint,
      {
        model: 'text-davinci-002',  // You can use any model you prefer
        prompt: prompt,
        max_tokens: maxTokens,
        temperature: temperature
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Send the response from OpenAI back to the client
    res.json({ result: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error calling OpenAI API:', error.message);
    res.status(500).send('Error interacting with OpenAI API');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});