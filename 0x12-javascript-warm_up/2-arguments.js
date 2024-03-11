#!/usr/bin/node

const index = process.argv.length - 2;
if (index === 0) {
  console.log('No argument');
} else if (index === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
