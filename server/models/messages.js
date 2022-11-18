var db = require('../db');

module.exports = {
  getAll: (callback) => {
    var queryStr = 'select messages.message_id, messages.content, messages.room_name, users.username \
      from messages left outer join users on (messages.user_id = users.user_id) \
      order by messages.message_id desc';

    db.query(queryStr, (err, results) => {
      if (err) console.error(err);
      else {
        callback(err, results);
      }
    })
  },

  create: (message, callback) => {
    let sqlQuery = `INSERT INTO messages VALUES (
      null,
      "${message.message}",
      "${message.roomname}",
      (SELECT users.user_id FROM users WHERE users.username = "${message.username} limit 1")
    );`;

    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        callback(err, results);
      }
    })
  }
};

'insert into messages(text, userid, roomname) \
                    value (?, (select id from users where username = ? limit 1), ?)';



// getAll = (callback) => {
//   db.query('SELECT * FROM messages', (err, results) => {
//     if (err) throw err;
//     else {
//       console.log('messages results: ', results);
//       callback(err, results);
//     }
//   })
// },

// create = (message, callback) => {
//   let sqlQuery = `INSERT INTO messages VALUES (
//     null,
//     "${message.text}",
//     (SELECT rooms.room_id FROM rooms WHERE rooms.room_name = ${message.room}),
//     (SELECT users.user_id FROM users WHERE users.username = ${message.user})
//   );`;

//   db.query(sqlQuery, (err, results) => {
//     if (err) throw err;
//     else {
//       console.log('messages confirmation: ', results);
//       callback(err, results);
//     }
//   })
// }

    // db.query(`SELECT room_id FROM rooms where room_name = "${message.roomname}"`, (err, results) => {
    //   if (err) {
    //     console.log('error case');
    //     db.query(`INSERT INTO rooms VALUES (null, "${message.roomname}");`, (err, results) => {
    //       if (err) throw err;
    //       else { console.log('room name inserted'); }
    //     })
    //     //throw err;
    //   } else {
    //     if (results === undefined) {
    //       console.log('error case for undefined in models msg');
    //       db.query(`INSERT INTO rooms VALUES (null, "${message.roomname}");`, (err, results) => {
    //         if (err) throw err;
    //         else { console.log('room name inserted'); }
    //       })
    //     }
    //     //console.log('messages confirmation: ', results);
    //     callback(err, results);
    //   }
    // })