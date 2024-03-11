#!/usr/bin/node

const arg = process.argv;

if (arg.length === 2) {
  console.log(0);
} else if (arg.length === 3) {
  console.log(0);
} else {
  const index = arg.slice(2);
  const value = index.sort().reverse();
  console.log(value[1]);
}
