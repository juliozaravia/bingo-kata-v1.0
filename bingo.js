/*
 * Project: BingoKata 
 * File: Operations control file.
 * Description: Contains the main functions for game operations.
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

const { calledNumbers, bingoCard } = require('./globals');
const bingo = require('./helpers');
const { dimension, messages } = require('./codes');


// Function that allows you to call a new bingo number
const bingoCaller = () => {
  let result = {
    response: messages.BAD_VALUE,
    updatedCard: []
  };

  if (bingoCard.length) {
    const randomNumber = bingo.simpleRandomGenerator(calledNumbers);
    if (randomNumber === 0) {
      return bingoCaller();
    } else {
      calledNumbers.push(randomNumber);
      result.response = `The selected number was ${randomNumber}`;
      bingo.cardMarker(randomNumber);
      result.updatedCard = [...bingoCard];
    }
  } else {
    result.response = messages.EMPTY_CARD;
  }
  return result;
};

const bingoChecker = () => {
  let response = messages.NOT_YET;
  if (bingo.simpleCardValidator()) {
    response = bingo.simpleCardValidator();
  }
  return response;
};

// Function that allows creating the bingo card for the player 
const bingoCardGenerator = () => {
  let rowLetterB = bingo.complexRandomGenerator(dimension.LOWER_BOUND.B, dimension.UPPER_BOUND.B);
  let rowLetterI = bingo.complexRandomGenerator(dimension.LOWER_BOUND.I, dimension.UPPER_BOUND.I);
  let rowLetterN = bingo.complexRandomGenerator(dimension.LOWER_BOUND.N, dimension.UPPER_BOUND.N);
  let rowLetterG = bingo.complexRandomGenerator(dimension.LOWER_BOUND.G, dimension.UPPER_BOUND.G);
  let rowLetterO = bingo.complexRandomGenerator(dimension.LOWER_BOUND.O, dimension.UPPER_BOUND.O);

  let organizedCard = bingo.numbersOrganizer(
    rowLetterB,
    rowLetterI,
    rowLetterN,
    rowLetterG,
    rowLetterO
  );

  bingoCard.push(...organizedCard);
  return organizedCard;
};

// Function that allows you to print the results of the player's actions 
const bingoPrinter = (output) => {
  if (Array.isArray(output)) {
    for (let index = 0; index < output.length; index++) {
      process.stdout.write('\n' + output[index].join('\t'));
    }
  } else {
    process.stdout.write(output);
  }
  process.stdout.write('\nprompt > ');
};

module.exports = {
  bingoCaller,
  bingoCardGenerator,
  bingoPrinter,
  bingoChecker
}