const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');

const { user, pass } = require('./config/credentials.json');
const routes = require('./routes');

mongoose.connect(
  `mongodb+srv://${user}:${pass}@cluster0-1wjgy.mongodb.net/omnistack8?retryWrites=true&w=majority`,
  { useNewUrlParser: true },
);

const server = express();

server.use(routes);
// server.use(cors());

server.listen(3333);
