require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes/index');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

module.exports = server;
