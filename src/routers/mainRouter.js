const express = require('express');
const usersRouter = require('./users');
const transactionRouter = require('./transactions');

const mainRouter = express.Router();

mainRouter.use('/api/users', usersRouter);
mainRouter.use('/api/transactions', transactionRouter);

module.exports = mainRouter;
