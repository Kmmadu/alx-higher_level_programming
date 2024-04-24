#!/usr/bin/node
// a script that prints the number of movies where
// the character Wedge Antilles is present
const request = require('request');
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
const peopleUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

const url = `${apiUrl}?format=json`;
let numCount = 0;

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const films = JSON.parse(body).results;
    films.forEach(film => {
      if (film.characters.includes(peopleUrl)) {
        numCount += 1;
      }
    });
    console.log(numCount);
  }
});
