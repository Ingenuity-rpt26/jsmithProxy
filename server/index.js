/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/:courseNumber', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Proxy server listening at http://localhost:${port}`);
});
