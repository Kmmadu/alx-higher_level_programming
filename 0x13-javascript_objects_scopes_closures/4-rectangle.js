#!/usr/bin/node

module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    if (this.width && this.height) {
      const row = 'X'.repeat(this.width);
      for (let i = 0; i < this.height; i++) {
        console.log(row);
      }
    }
  }

  rotate () {
    const a = this.width; const b = this.height;
    this.width = b;
    this.height = a;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
};
