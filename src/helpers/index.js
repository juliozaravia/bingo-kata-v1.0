/*
 * Project: BingoKata 
 * File: Support operations file.
 * Description: It contains the functions to support the operations required by the main functions. Here we will have the basic data processing.
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

const { dimension, message, control } = require('../utils/codes');
const { bingoCard, notifier } = require('../utils/globals');

// Function that informs the player of the basic commands. 
const welcome = () => {
  if (!notifier.length) {
    process.stdout.write(message.WELCOME);
    notifier.push(control.MARKED);
  }
};

// Function that generates random numbers excluding previously called numbers. 
const simpleRandomGenerator = (calledNumbers) => {
  const generatedNumber = Math.floor(Math.random() * dimension.TOTAL) + 1;
  let aprovedNumber;
  if (calledNumbers.includes(generatedNumber)) {
    aprovedNumber = 0;
  } else {
    aprovedNumber = generatedNumber;
  }
  return aprovedNumber;
}

// Function that generates random numbers in groups of 5 in a certain range.
const complexRandomGenerator = (lowerBound, upperBound, randomNumbers = []) => {
  const generatedNumber = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;
  if (randomNumbers.includes(generatedNumber)) {
    return complexRandomGenerator(lowerBound, upperBound, randomNumbers);
  } else {
    randomNumbers.push(generatedNumber);
    if (randomNumbers.length === dimension.ROW) {
      return randomNumbers;
    } else {
      return complexRandomGenerator(lowerBound, upperBound, randomNumbers);
    }
  }
};

// Function that organizes the random numbers generated to form the player's final card. 
const numbersOrganizer = (rowB, rowI, rowN, rowG, rowO) => {
  let organizedNumbers = [
    [...rowB],
    [...rowI],
    [...rowN],
    [...rowG],
    [...rowO],
  ];
  organizedNumbers[dimension.FREE.X][dimension.FREE.Y] = 0;
  return organizedNumbers;
};

// Function that allows to cross out each number of the player's card 
// that matches the number indicated by the caller. 
const cardMarker = (chosenNumber) => {
  for (let index = 0; index < bingoCard.length; index++) {
    if (bingoCard[index].includes(chosenNumber)) {
      let itemIndex = bingoCard[index].indexOf(chosenNumber);
      bingoCard[index][itemIndex] = 0;
    }
  }
};

// Function that validates that the entire player's card is marked 
const simpleCardValidator = () => {
  const horizontalValidation = [];
  for (let index = 0; index < bingoCard.length; index++) {
    let result = bingoCard[index].every(function (item) {
      return item === control.MARKED;
    });
    horizontalValidation.push(result);
  }
  let horizontalResult = horizontalValidation.includes(false);

  if (!horizontalResult && bingoCard.length) {
    return message.YOU_WON;
  }
};

// Function not used.
// Function that validates that the player has horizontal and / or vertical matches. 
const specialCardValidator = () => {
  const horizontalValidation = [];
  let verticalValidation = {
    colB: [],
    colI: [],
    colN: [],
    colG: [],
    colO: [],
  }

  for (let index = 0; index < bingoCard.length; index++) {
    let result = bingoCard[index].every(function (item) {
      return item === control.MARKED;
    });
    horizontalValidation.push(result);
  }

  for (let x = 0; x < bingoCard.length; x++) {
    for (let y = 0; y < bingoCard[x].length; y++) {
      if (y === 0) {
        if (bingoCard[x][y] === control.MARKED) {
          verticalValidation.colB.push(true);
        } else {
          verticalValidation.colB.push(false);
        }
      } else if (y === 1) {
        if (bingoCard[x][y] === control.MARKED) {
          verticalValidation.colI.push(true);
        } else {
          verticalValidation.colI.push(false);
        }
      } else if (y === 2) {
        if (bingoCard[x][y] === control.MARKED) {
          verticalValidation.colN.push(true);
        } else {
          verticalValidation.colN.push(false);
        }
      } else if (y === 3) {
        if (bingoCard[x][y] === control.MARKED) {
          verticalValidation.colG.push(true);
        } else {
          verticalValidation.colG.push(false);
        }
      } else if (y === 4) {
        if (bingoCard[x][y] === control.MARKED) {
          verticalValidation.colO.push(true);
        } else {
          verticalValidation.colO.push(false);
        }
      }
    }
  }

  let horizontalResult = horizontalValidation.includes(true);
  let verticalResult =
    verticalValidation.colB.includes(false) ||
    verticalValidation.colI.includes(false) ||
    verticalValidation.colN.includes(false) ||
    verticalValidation.colG.includes(false) ||
    verticalValidation.colO.includes(false);

  if (horizontalResult || !verticalResult) {
    return message.YOU_WON;
  }
};

module.exports = {
  welcome,
  simpleRandomGenerator,
  complexRandomGenerator,
  numbersOrganizer,
  cardMarker,
  simpleCardValidator,
  specialCardValidator
};