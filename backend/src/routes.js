const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => res.json({ message: `Hello ${req.query.name}` }));
routes.post('/devs', (req, res) => {
  res.json({ message: 'the devs' });
});

module.exports = routes;
