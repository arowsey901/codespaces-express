const express = require('express');
const path = require('path');
const app = express();
const port = process.env.Port ||3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Tech Bytes Repair')
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/services', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'services.html'));
})


app.get('/about', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

app.get('/faq', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'faq.html')); 

})

app.get('/contact', (req, res) => { res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

