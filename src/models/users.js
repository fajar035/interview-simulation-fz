const db = require('../config/db');

const getAllusers = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users`;
    db.query(sql, (err, result) => {
      if (err) return reject({ status: 500, err });
      return resolve({ status: 200, result });
    });
  });
};

module.exports = { getAllusers };
