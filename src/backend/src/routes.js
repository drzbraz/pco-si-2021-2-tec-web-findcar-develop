const express = require('express');
const routes = express.Router();

const controllers = require('./controllers');

//usuários
routes.get('/teste', controllers.buscadorController.teste);



module.exports = routes;