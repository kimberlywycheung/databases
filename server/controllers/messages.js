var models = require('../models');

module.exports = {
  get: (req, res) => {
    models.messages.getAll((err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(result));
      }
    });
  }, // a function which handles a get request for all messages

  post: (req, res) => {
    models.messages.create(req.body, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.statusCode = 201;
        res.end();
      }
    });
  } // a function which handles posting a message to the database
};
