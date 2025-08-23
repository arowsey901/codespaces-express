const express = require('express');
const path = require('path');
const app = express();
const port = process.env.Port ||3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Tech Bytes Repair')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
