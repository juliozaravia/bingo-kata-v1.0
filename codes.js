/*
 * Project: BingoKata 
 * File: Global codes file.
 * Description: It allows us to have globally available all the codes necessary to show notifications to the user. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

// Container for data related to card size and numerical ranges for each row 
const dimension = Object.freeze({
  TOTAL: 75,
  ROW: 5,
  FREE: {
    X: 2,
    Y: 2
  },
  LOWER_BOUND: {
    B: 1,
    I: 16,
    N: 31,
    G: 46,
    O: 61,
  },
  UPPER_BOUND: {
    B: 15,
    I: 30,
    N: 45,
    G: 60,
    O: 75,
  }
});

// Container of data related to whether an operation was carried out or not 
const control = Object.freeze({
  MARKED: 0,
});

// Basic game command container 
const commands = Object.freeze({
  CALL: 'call',
  GENERATE: 'generate',
  BINGO: 'bingo'
});

// Informational message container for the player.
const messages = Object.freeze({
  WELCOME: `
  Welcome!
  Enter the 'generate' command to create your player card.
  Enter the 'call' command for the Caller to display a ball. 
  Enter the 'bingo' to check if you have won!  
  `,
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  INVALID_INPUT: 'Please enter a valid command.',
  GENERATED_CARD: 'The card was created successfully.',
  EMPTY_CARD: 'You must generate a bingo card in order to play. Use the <generate> command.',
  BAD_VALUE: 'Oops! Sorry, I dropped the ball. Please try again :)',
  YOU_WON: `
  ***************************************************************\n
  Congratulations! You won the cup, I hope you get the job too :)\n
  ***************************************************************\n`,
  DO_NOT_CHEAT: 'You already have a letter. Do not be a cheater :P',
  NOT_YET: 'Hey Take it easy friend, you haven`t won yet.'
});

module.exports = {
  dimension,
  control,
  commands,
  messages
};