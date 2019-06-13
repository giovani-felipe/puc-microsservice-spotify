const app = require('express');
const api = app();
const router = require('./routes');

api.use('/api/v1', router);

api.use((req, res, next) => {
  res.sendStatus(404);
});

api.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
})

module.exports = api;
