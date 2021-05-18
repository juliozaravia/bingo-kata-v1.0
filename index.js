/*
 * Project: BingoKata 
 * File: Main file.
 * Description: It contains the functions that read and print in the command console the values necessary to operate the game.
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

const { bingoCaller, bingoCardGenerator, bingoPrinter, bingoChecker } = require('./bingo');
const { commands, messages } = require('./codes');
const { bingoCard } = require('./globals');
const { welcome } = require('./helpers');

/*
Function that allows to capture the orders of the user entered in the console. 
*/
welcome();
process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  let args = data.toString().trim().split(' ');
  let cmd = args.shift();

  switch (cmd) {
    case commands.CALL:
      let { response, updatedCard } = bingoCaller();
      bingoPrinter(response);
      bingoPrinter(updatedCard);
      break;
    case commands.GENERATE:
      if (bingoCard.length) {
        bingoPrinter(messages.DO_NOT_CHEAT);
      } else {
        let card = bingoCardGenerator();
        bingoPrinter(card);
        bingoPrinter(messages.GENERATED_CARD);
      }
      break;
    case commands.BINGO:
      let result = bingoChecker();
      bingoPrinter(result);
      break;
    default:
      bingoPrinter(messages.INVALID_INPUT)
      break;
  }
});