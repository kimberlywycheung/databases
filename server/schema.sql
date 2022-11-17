drop database if exists chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  room_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  room_name VARCHAR(1000)
);

CREATE TABLE users (
  user_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(1000)
);

CREATE TABLE messages (
  message_id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(1000),
  room_id INTEGER(11),
  user_id INTEGER(11),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE friends (
  user_id INTEGER NOT NULL,
  friend_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (friend_id) REFERENCES users(user_id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

