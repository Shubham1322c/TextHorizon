const connectToMongo = require('./db.js');
const express = require('express')
connectToMongo();


const app = express();
const port = 3000;
// respond with "hello world" when a GET request is made to the homepage


// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.get('/api/notes', require('./routes/notes'));



app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
})