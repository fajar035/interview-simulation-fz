const express = require('express');
const usersRouter = require('./users');
const transactionRouter = require('./transactions');

const mainRouter = express.Router();

mainRouter.use('/api/users', usersRouter);
mainRouter.use('/api/transactions', transactionRouter);

mainRouter.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    data: {
      application: 'Program kasir sederhana',
      message: 'API for interview',
    },
  });
});

module.exports = mainRouter;
