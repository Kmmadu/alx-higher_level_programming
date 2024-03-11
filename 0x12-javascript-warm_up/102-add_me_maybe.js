#!/usr/bin/node

exports.addMeMaybe = function (number, theFunction) {
  let numIncre = number + 1;
  theFunction(numIncre);
};
