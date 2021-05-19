/*
 * Project: BingoKata 
 * File: Main file.
 * Description: It contains the functions that read and print in the command console the values necessary to operate the game.
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

const { bingoCaller, bingoCardGenerator, bingoChecker, bingoPrinter } = require('./callers');
const { command, message } = require('./utils/codes');
const { bingoCard } = require('./utils/globals');
const { welcome } = require('./helpers');

/*
Function that allows to capture the orders of the user entered in the console. 
*/
welcome();
process.stdout.write(message.PROMPT);
process.stdin.on('data', function (data) {
  let args = data.toString().trim().split(' ');
  let cmd = args.shift();

  switch (cmd) {
    case command.CALL:
      let { response, updatedCard } = bingoCaller();
      bingoPrinter(response);
      if (updatedCard.length) bingoPrinter(message.CARD_TITLE);
      if (updatedCard.length) bingoPrinter(updatedCard);
      bingoPrinter(message.PROMPT);

      break;
    case command.GENERATE:
      if (bingoCard.length) {
        bingoPrinter(message.CHEATER_DETECTED);
      } else {
        let card = bingoCardGenerator();
        bingoPrinter(message.CARD_TITLE);
        bingoPrinter(card);
        bingoPrinter(message.GENERATED_CARD);
      }
      bingoPrinter(message.PROMPT);
      break;
    case command.BINGO:
      let result = bingoChecker();
      bingoPrinter(result);
      bingoPrinter(message.PROMPT);
      break;
    default:
      bingoPrinter(message.INVALID_INPUT)
      bingoPrinter(message.PROMPT);
      break;
  }
});