/*
 * Project: BingoKata 
 * File: Operations control file.
 * Description: Contains the main functions for game operations.
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

const { calledNumbers, bingoCard } = require('../utils/globals');
const helper = require('../helpers');
const { dimension, message } = require('../utils/codes');


// Function that allows you to call a new bingo number
const bingoCaller = () => {
  let result = {
    response: message.BAD_VALUE,
    updatedCard: []
  };

  if (bingoCard.length) {
    const randomNumber = helper.simpleRandomGenerator(calledNumbers);
    if (randomNumber === 0) {
      return bingoCaller();
    } else {
      calledNumbers.push(randomNumber);
      result.response = `${message.COMPLEMENTARY_TEXT} ${randomNumber}`;
      helper.cardMarker(randomNumber);
      result.updatedCard = [...bingoCard];
    }
  } else {
    result.response = message.EMPTY_CARD;
  }
  return result;
};

// Function that allows creating the bingo card for the player 
const bingoCardGenerator = () => {
  let rowLetterB = helper.complexRandomGenerator(dimension.LOWER_BOUND.B, dimension.UPPER_BOUND.B);
  let rowLetterI = helper.complexRandomGenerator(dimension.LOWER_BOUND.I, dimension.UPPER_BOUND.I);
  let rowLetterN = helper.complexRandomGenerator(dimension.LOWER_BOUND.N, dimension.UPPER_BOUND.N);
  let rowLetterG = helper.complexRandomGenerator(dimension.LOWER_BOUND.G, dimension.UPPER_BOUND.G);
  let rowLetterO = helper.complexRandomGenerator(dimension.LOWER_BOUND.O, dimension.UPPER_BOUND.O);

  let organizedCard = helper.numbersOrganizer(
    rowLetterB,
    rowLetterI,
    rowLetterN,
    rowLetterG,
    rowLetterO
  );

  bingoCard.push(...organizedCard);
  return organizedCard;
};

// Function that verifies that the player has all their numbers marked. 
const bingoChecker = () => {
  let response = message.NOT_YET;
  if (helper.simpleCardValidator()) {
    response = bingo.simpleCardValidator();
  }
  return response;
};

// Function that allows you to print the results of the player's actions 
const bingoPrinter = (output) => {
  if (Array.isArray(output)) {
    for (let index = 0; index < output.length; index++) {
      process.stdout.write('\n' + output[index].join('\t'));
    }
    process.stdout.write('\n');
  } else {
    process.stdout.write(output);
    if (output !== message.PROMPT) process.stdout.write('\n');
  }
};

module.exports = {
  bingoCaller,
  bingoCardGenerator,
  bingoPrinter,
  bingoChecker
}