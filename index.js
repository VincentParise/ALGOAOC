import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  // On récupère sous forme de tableau entier:
  const fishs = data.split(",").map(Number);
  console.log(fishs);
  const DAYS = 40;

  for (let day = 0; day < DAYS; day++) {
    const saveLength = fishs.length;
    for (let i = 0; i < saveLength; i++) {
      if (fishs[i] === 0) {
        fishs[i] = 6;
        fishs.push(8);
      } else {
        fishs[i]--;
      }
    }
  }
  return { fishs, length: fishs.length };
};

const part2 = (datas) => {
  // On récupère sous forme de tableau entier:
  const fish = datas.split(",").reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1;
    return acc;
  }, new Array(9).fill(0));
  const DAYS = 256;

  for (let day = 1; day <= DAYS; day++) {
    const fish0 = fish.shift();
    fish.push(fish0);
    fish[6] += fish0;
  }

  return fish.reduce((acc, curr) => acc + curr, 0);
};

console.log(part2(final));
