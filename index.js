import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const results = data.split(",");
  const resultNumbers = results.map((result) => Number(result));
  let days = [];
  console.log(`Initial State : ${resultNumbers}`);

  // initialise un nouveau tableau
  function calcTab(data) {
    const newNumbers = data.map((resultNumbers) => resultNumbers);
    for (let i = 0; i < newNumbers.length; i++) {
      newNumbers[i]--;
    }
    days.push(1);
    console.log(
      `After ${days.reduce(
        (acc, number) => acc + number,
        0
      )} days : ${newNumbers}`
    );
    calcTab(newNumbers);
  }
  calcTab(resultNumbers);

  return "";
};

//console.log({ part1: part1(test) });

console.log(part1(test));
//console.log({ test, final });
