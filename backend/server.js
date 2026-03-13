const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let messages = [
  { id: 1, author: 'System', content: 'Bienvenue dans le chat !', timestamp: new Date().toISOString() }
];
let nextId = 2;

// GET /api/messages
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// POST /api/messages
app.post('/api/messages', (req, res) => {
  const { author, content } = req.body;

  if (!author || !content) {
    return res.status(400).json({ error: 'author and content are required' });
  }

  const message = {
    id: nextId++,
    author: author.trim(),
    content: content.trim(),
    timestamp: new Date().toISOString()
  };

  messages.push(message);
  res.status(201).json(message);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

module.exports = app;
