const { bingoCaller, bingoChecker } = require('../src/callers');
const { complexRandomGenerator } = require('../src/helpers');
const { messages } = require('../src/utils/codes');

const uniqueValues = (generatedArray) => {
  return Array.isArray(generatedArray) && new Set(generatedArray).size === generatedArray.length
};

test('The function that generates the 5 values for each row of the card returns only unique values', () => {
  expect(uniqueValues(complexRandomGenerator(1, 15))).toBeTruthy();
});

test('The function indicates that the player still does not win if he does not have all his numbers crossed out.', () => {
  expect(bingoChecker()).toBe(messages.NOT_YET);
});

test('The function that prints the numbers obtained by the caller responds negatively when the card has not yet been created.', () => {
  expect(bingoCaller().response).toBe(messages.EMPTY_CARD);
});