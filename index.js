const express = require('express');

const app = express();

app.use(express.json())

const PORT = 3000;

// Example data
const posts = [
  { id: 1, title: 'Post 1', content: 'Content for post 1' },
  { id: 2, title: 'Post 2', content: 'Content for post 2' },
];

// Endpoint
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
