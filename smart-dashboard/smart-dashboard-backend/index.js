const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: 'system',
            content:
              'You are a helpful FAQ assistant for an Admin Dashboard app. Answer questions based on features like Users page, Dashboard, Settings, Analysis, etc.',
          },
          ...messages,
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5173", // your frontend URL
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error('OpenAI Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
