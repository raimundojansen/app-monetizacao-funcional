const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Generate content with AI
router.post('/generate', async (req, res) => {
  try {
    const { prompt, type = 'text' } = req.body;
    
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000
    });
    
    res.json({ content: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all content
router.get('/', async (req, res) => {
  try {
    // Add database query here
    res.json({ message: 'Content list' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
