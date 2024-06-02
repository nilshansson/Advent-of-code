import { readFile } from "node:fs";

const getData = () => {
  return readFile("day1/data.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const stringData = data.split("\n");

    const numbersSpelledOut = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];

    const regex = /\d/g;
    const lineNumbers: string[] = [];
    for (let line of stringData) {
      lineNumbers.push(line.match(regex)!.join(""));
    }

    let twoNumbersTogether = "";
    let pairStringNumbersArr: string[] = [];

    for (let numberLine of lineNumbers) {
      if (numberLine.length === 1) {
        twoNumbersTogether = numberLine + numberLine;
      } else {
        twoNumbersTogether = numberLine[0] + numberLine[numberLine.length - 1];
      }
      pairStringNumbersArr.push(twoNumbersTogether);
    }
    let pairNumbersArr: number[] = [];
    for (const pair of pairStringNumbersArr) {
      pairNumbersArr.push(parseFloat(pair));
    }

    console.log(
      pairNumbersArr.reduce((sum, currentValue) => sum + currentValue)
    );
  });
};

getData();
