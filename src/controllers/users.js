const usersModel = require('../models/users');
const helpRes = require('../helpers/helpRes');

const getAllUsers = (req, res) => {
  usersModel
    .getAllusers()
    .then(({ status, result }) => {
      return helpRes.success(res, status, result);
    })
    .catch(({ status, err }) => {
      return helpRes.failed(res, status, err);
    });
};

module.exports = { getAllUsers };
