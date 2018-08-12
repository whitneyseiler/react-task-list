const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(3000, () => {
  console.log('now listening on port 3000');
});