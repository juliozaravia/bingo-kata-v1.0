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
const command = Object.freeze({
  CALL: 'call',
  GENERATE: 'generate',
  BINGO: 'bingo'
});

// Informational message container for the player.
const message = Object.freeze({
  WELCOME: `
**********************************************************
***************** Welcome to Bingo Kata! *****************
**********************************************************
[Instructions]
# Enter the 'generate' command to create your player card.
# Enter the 'call' command for the Caller to display a ball. 
# Enter the 'bingo' command to check if you have won!  
`,
  YOU_WON: `
***************************************************************
****************        Congratulations!       **************** 
****************        You won the cup!       **************** 
**************** I hope you get the job too :) ****************
***************************************************************
`,
  CARD_TITLE: '*********** BINGO CARD ***********',
  GENERATED_CARD: '[Success] The card was generated successfully.',
  INVALID_INPUT: '[Alert] Please enter a valid command.',
  EMPTY_CARD: '[Alert] You must generate a bingo card in order to play. Use the <generate> command.',
  CHEATER_DETECTED: '[Alert] You already have a card. Don`t be a cheater :P',
  NOT_YET: '[Alert] Hey! Take it easy friend, you haven`t won yet.',
  BAD_VALUE: '[Error] Oops! Sorry, I dropped the ball. Please try again :)',
  COMPLEMENTARY_TEXT: '[Caller] The caller showed the number',
  PROMPT: 'player > '
});

module.exports = {
  dimension,
  control,
  command,
  message
};