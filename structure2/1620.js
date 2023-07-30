let fs = require("fs");

let input = fs.readFileSync("input.txt").toString().trim().split("\n");
// let inputMany = fs.readFileSync("input.txt").toString().split("");

const n = +input[0].split(" ")[0];
const poketmons = input.slice(1, n + 1);
const questions = input.slice(n + 1);

function sol(poketmons, questions) {
  const map = new Map(
    poketmons.map((poketmons, index) => [poketmons, index + 1])
  );

  questions.forEach((questions) => {
    if (Number.isNaN(+questions)) console.log(map.get(questions));
    else console.log(poketmons[+questions - 1]);
  });
}

sol(poketmons, questions);
