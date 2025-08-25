const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Tech Bytes Repair')
})

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'public/public/services.html'));
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'public/public/about.html'));
})

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'public/public/faq.html')); 
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'public/public/contact.html'));
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


