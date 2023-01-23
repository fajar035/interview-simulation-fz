const transactionsModel = require('../models/transactions');
const helpers = require('../helpers/helpRes');

const getAllTransactions = (req, res) => {
  transactionsModel
    .getAllTransactions()
    .then(({ status, result }) => {
      return helpers.success(res, status, result);
    })
    .catch(({ status, err }) => {
      return helpers.failed(res, status, err);
    });
};

const getTransactionByuser = (req, res) => {
  const { user } = req.params;
  transactionsModel
    .getTransactionByUser(user)
    .then(({ status, result }) => {
      return helpers.success(res, status, result);
    })
    .catch(({ status, err }) => {
      return helpers.failed(res, status, err);
    });
};

const addTransaction = (req, res) => {
  const { body } = req;
  transactionsModel
    .addTransaction(body)
    .then(({ status, result }) => {
      return helpers.success(res, status, result);
    })
    .catch(({ status, err }) => {
      return helpers.failed(res, status, err);
    });
};

module.exports = { getAllTransactions, getTransactionByuser, addTransaction };
