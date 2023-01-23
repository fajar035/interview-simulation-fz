const db = require('../config/db');

const getAllTransactions = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT transactions.id, users.name, transactions.date, transactions.total FROM transactions 
    JOIN users ON transactions.id_user = users.id`;
    db.query(sql, (err, result) => {
      if (err) return reject({ status: 500, err });
      return resolve({ status: 200, result });
    });
  });
};

const getTransactionByUser = (user) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT transactions.id, users.name, transactions.date, transactions.total FROM transactions 
    JOIN users ON transactions.id_user = users.id WHERE users.name = ?`;
    db.query(sql, [user], (err, result) => {
      if (err) return reject({ status: 500, err });
      return resolve({ status: 200, result });
    });
  });
};

const addTransaction = (body) => {
  return new Promise((resolve, reject) => {
    const { total, date, id_user } = body;
    const sqlAddTransaction = `INSERT INTO transactions VALUES(null, ?, ?, ?)`;
    const sqlCheckUser = `SELECT * FROM users WHERE id = ${id_user}`;
    db.query(sqlCheckUser, (err, result) => {
      if (err) return reject({ status: 500, err });
      if (result.length === 0)
        return resolve({
          status: 404,
          result: { message: 'User not found' },
        });
      const statement = [total, date, id_user];
      db.query(sqlAddTransaction, statement, (err2, result2) => {
        const { insertId } = result2;
        if (err2) return reject({ status: 500, err2 });
        return resolve({
          status: 201,
          result: {
            id: insertId,
            name: result[0].name,
            date,
            total,
          },
        });
      });
    });
  });
};

module.exports = { getAllTransactions, getTransactionByUser, addTransaction };
