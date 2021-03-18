const express = require("express");
const router = new express.Router();
const UserController = require('../controllers/admin/UserController');

router.get("/get-users", UserController.getUsers);

module.exports = router;
