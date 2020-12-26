const express = require('express');

const routes = express.Router();

const UserController = require('./controlers/UserController');

routes.get('/users', UserController.index);

module.exports = routes