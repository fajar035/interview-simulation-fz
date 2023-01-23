const express = require('express');

const transactionsRouter = express.Router();
const transactionsController = require('../controllers/transactions');

transactionsRouter.get('/', transactionsController.getAllTransactions);
transactionsRouter.get('/:user', transactionsController.getTransactionByuser);
transactionsRouter.post('/', transactionsController.addTransaction);

module.exports = transactionsRouter;
