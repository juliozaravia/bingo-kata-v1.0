/*
 * Project: BingoKata 
 * File: Global variables file.
 * Description: It contains the variables that will be used globally throughout the program. 
 * @author
 * Julio Zaravia <julio.zaravia.dev@gmail.com>
 */

// Container of the numbers obtained by the caller.
const calledNumbers = [];
// Player card numbers container 
let bingoCard = [];
// Player access control container
let notifier = [];

module.exports = {
  calledNumbers,
  bingoCard,
  notifier
};