#!/usr/bin/node
// a script that computes the number of tasks completed by user id
const request = require('request');
const url = process.argv[2];
request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const user = {};
    const todos = JSON.parse(body);

    todos.forEach((todo) => {
      if (todo.completed) {
        const userId = todo.userId;

        if (user[userId]) {
          user[userId] += 1;
        } else {
          user[userId] = 1;
        }
      }
    });
    console.log(user);
  }
});
