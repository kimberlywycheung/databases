var models = require('../models');

module.exports = {
  get: (req, res) => {
      models.users.getAll((err, result) => {
        if (err) {
          console.error(err);
        } else {
          res.statusCode = 200;
          res.end(JSON.stringify(result));
        }
      });
  },
  post: (req, res) => {
    models.users.create(req.body.username, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 201;
        res.end();
      }
    });
  }
};