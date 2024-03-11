#!/usr/bin/node
const index = process.argv[2];
if (index === undefined) {
  console.log('No argument');
} else {
  console.log(index);
}
