const express = require("express");
const api = new express.Router();
const UserController = require('../controllers/api/UserController');

api.get('/get-users', UserController.getUsers);

module.exports = api;
