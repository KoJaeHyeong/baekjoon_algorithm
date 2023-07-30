let fs = require("fs");

let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let inputMany = fs.readFileSync("input.txt").toString().split("");
console.log(input);
const [numbers, ...inputs] = input;
const [N] = numbers.split(" ");
console.log([N]);
console.log(+N);
const s = inputs.slice(0, +N);
const m = inputs.slice(+N);
console.log(s);
console.log(m);

function sol() {
  const obj = {};
  let answer = 0;

  s.forEach((item) => (obj[item] = true));
  m.forEach((item) => {
    if (obj[item]) answer += 1;
  });
  return answer;
}

const answer = sol(m, s);
console.log(answer);
