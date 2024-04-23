#!/usr/bin/node
// a script that reads and prints the content of a file.
const fs = require('fs');
const filepath = process.argv[2];
function readContent (filepath) {
  try {
    const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
    console.log(content);
  } catch (error) {
    console.log(error);
  }
}
readContent(filepath);
