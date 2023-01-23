const express = require('express');
const usersController = require('../controllers/users');

const userRouter = express.Router();

userRouter.get('/', usersController.getAllUsers);

module.exports = userRouter;
