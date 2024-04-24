#!/usr/bin/node
// a script that writes to a file.
const fs = require('fs');
const filepath = process.argv[2];
const filetext = process.argv[3];
function writeContent (filePath, fileText) {
  try {
    fs.writeFileSync(filePath, fileText, { encoding: 'utf-8' });
  } catch (error) {
    console.log(error);
  }
}
writeContent(filepath, filetext);
