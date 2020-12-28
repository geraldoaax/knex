const express = require('express');
const routes = express.Router();

const UserController = require('./controlers/UserController');
const ProjectController = require('./controlers/ProjectsController');

// Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)
// Projects
routes.get('/projects', ProjectController.index)

module.exports = routes