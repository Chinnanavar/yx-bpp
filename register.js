const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  console.log("User Registered:", { name, email, password });
  res.status(200).json({ message: 'User registered successfully' });
})

app.listen(3034, () => {
  console.log('Server is running on "http://localhost:3034"');
});