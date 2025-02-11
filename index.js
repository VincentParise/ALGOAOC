import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  // On récupère sous forme de tableau entier:
  const results = data.split(",");
  const resultNumbers = results.map((result) => Number(result));

  let days = [];

  console.log(`Initial State : ${resultNumbers}`);

  // initialise un nouveau tableau
  function transformData(datas) {
    // Test si les éléments de tableaux ne sont pas égal à -1
    const tousPositif = datas.every((data) => data !== -1);
    if (!tousPositif) {
      for (let i = 0; i < datas.length; i++) {
        if (data[i] === -1) {
          data[i] = 6;
        }
      }
      days.push(1);
      console.log(
        `After ${days.reduce(
          (acc, number) => acc + number,
          0
        )} days : ${beforeDatas}`
      );
      transformData(beforeDatas);
      const index = datas.findIndex((data) => data === -1);
      if (index !== -1) {
        const beforeDatas = datas.map((data) => (data === -1 ? 6 : data));
      }
    }

    // On récupère les datas dans un nouveau tableauvavec une decrementation
    const currentDatas = datas.map((newData) => {
      return newData - 1;
    });

    // On incremente la day et on affiche le tableau
    days.push(1);
    console.log(
      `After ${days.reduce(
        (acc, number) => acc + number,
        0
      )} days : ${currentDatas}`
    );

    if (days.reduce((acc, number) => acc + number, 0) < 80) {
      transformData(currentDatas);
    }
  }
  transformData(resultNumbers);
  return "";
};

//console.log({ part1: part1(test) });

console.log(part1(test));
//console.log({ test, final });
