const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Catalog Service!');
});

app.get('/catalog', (req, res) => {
  res.json({ books: ['Book A', 'Book B'] });
});

app.listen(port, () => {
  console.log(`Catalog service listening at http://localhost:${port}`);
});
