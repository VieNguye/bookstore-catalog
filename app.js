const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const books = [
  { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', price: '$39.99' },
  { title: 'Clean Code', author: 'Robert C. Martin', price: '$34.99' },
  { title: 'You Don’t Know JS', author: 'Kyle Simpson', price: '$29.99' }
];

app.get('/', (req, res) => {
  res.render('index', { books });
});

app.listen(port, () => {
  console.log(`Catalog service running at http://localhost:${port}`);
});
