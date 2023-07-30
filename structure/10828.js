let fs = require("fs");

let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let inputMany = fs.readFileSync("input.txt").toString().split("");

console.log(inputBasic);
console.log(inputMany);
let test = [];
for (i = 0; i < inputMany.length; i++) {
  if (!isNaN(parseInt(inputMany[i]))) {
    test.push(parseInt(inputMany[i]));
  } else {
    test.push(inputMany[i].split(" "));
  }
}
console.log(test);

class Stack {
  constructor(bucket) {
    this.bucket = bucket;
  }

  push(value) {
    this.bucket.push(value);
  }

  pop(value) {
    if (this.bucket.length > 0) {
      console.log(this.bucket.pop());
    } else {
      console.log(-1);
    }
  }

  size() {
    console.log(this.bucket.length);
  }

  empty() {
    if (this.bucket.length == 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  }

  top() {
    if (this.bucket.length != 0) {
      let num = this.bucket[this.bucket.length - 1];

      console.log(num);
    } else {
      console.log(-1);
    }
  }
}

let stack = new Stack([]);

// console.log(stack.bucket);
// console.log(a);
