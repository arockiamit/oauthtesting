const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3001, () => {
  console.log('server Running');
});
