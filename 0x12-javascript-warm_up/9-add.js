#!/usr/bin/node

function add (a, b) {
  const c = a + b;
  return c;
}
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);
console.log(add(num1, num2));
