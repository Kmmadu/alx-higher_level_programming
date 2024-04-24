#!/usr/bin/node
// script that gets the contents of a webpage and stores it in a file.
const fs = require('fs');
const url = process.argv[2];
const filepath = process.argv[3];
const request = require('request');
let filetext = '';

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    filetext = body;
    writeContent(filepath, filetext);
  }
});
function writeContent (filePath, fileText) {
  try {
    fs.writeFileSync(filePath, fileText, { encoding: 'utf-8' });
  } catch (error) {
    console.log(error);
  }
}
