var db = require('../db');

module.exports = {
  getAll: (callback) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) throw err;
      else {
        callback(err, results);
      }
    })
  },

  create: (username, callback) => {
    console.log('username: ', username);
    let sqlQuery = `INSERT INTO users VALUES (
      null,
      "${username}"
    );`;

    db.query(sqlQuery, (err, results) => {
      if (err) throw err;
      else {
        callback(err, results);
      }
    })
  }
};
