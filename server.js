const express = require('express');

const app = express();

app.get('/api/customer', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Gerry1', lastName: 'Last1'},
    {id: 2, firstName: 'Gerry2', lastName: 'Last2'},
    {id: 3, firstName: 'Gerry3', lastName: 'Last3'}
];
  res.json(customers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `SERVER LISTENING ON ${PORT}`);