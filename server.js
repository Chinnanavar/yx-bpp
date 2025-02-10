const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '987-654-3210',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: '555-555-5555',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    phone: '111-222-3333',
  }
]

app.get('/api/data', (req, res) => {
  res.json(data);
});
app.listen(3000, () => {
  console.log('Server listening on "http://localhost:3000"');
});
