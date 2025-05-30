const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the Shopping Cart Service!');
});
app.get('/cart', (req, res) => {
  const { title, author, price } = req.query;
  if (!title || !author || !price) {
    return res.status(400).send('Missing book info');
  }
  res.render('cart', { title, author, price });
});

app.listen(port, () => {
  console.log(`Shopping Cart running at http://localhost:${port}`);
});
