import { readFile } from "node:fs";

const getData = () => {
  return readFile("day1/data.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const stringData = data.split("\n");

    const numbersSpelledOut = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
    };
    const replaceLettersToNumbers = (line: string): string => {
      const replaceOne = line.replaceAll("one", "1");
      const replaceTwo = replaceOne.replaceAll("two", "2");
      const replaceThree = replaceTwo.replaceAll("three", "3");
      const replaceFour = replaceThree.replaceAll("four", "4");
      const replaceFive = replaceFour.replaceAll("five", "5");
      const replaceSix = replaceFive.replaceAll("six", "6");
      const replaceSeven = replaceSix.replaceAll("seven", "7");
      const replaceEigth = replaceSeven.replaceAll("eight", "8");
      const replaceNine = replaceEigth.replaceAll("nine", "9");

      return replaceNine;
    };

    const regex = /\d/g;
    const lineNumbers: string[] = [];
    for (let line of stringData) {
      const newLine: string = replaceLettersToNumbers(line);

      lineNumbers.push(newLine.match(regex)!.join(""));
    }
    console.log(lineNumbers);

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
