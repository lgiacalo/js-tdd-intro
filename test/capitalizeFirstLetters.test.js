// // import { strictEqual } from 'assert';
// const assert = require('assert');
// const capitalizeFirstLetters = require('../capitalizeFirstLetters');

// assert.strictEqual(typeof(capitalizeFirstLetters), 'function');
// assert.strictEqual(capitalizeFirstLetters.length, 1);

// assert.deepStrictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// assert.deepStrictEqual(capitalizeFirstLetters('learning'), 'Learning');
// assert.deepStrictEqual(capitalizeFirstLetters(''), '');


// test/capitalizeFirst.test.js
// import { strictEqual } from 'assert';
const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

// give the test suite a label using describe
describe('function: capitalizeFirstLetters()', () => {
  // give the test a label using it
  it('is a function accepting one argument', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('transforms javaScript correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
  });

  it('works with a 1-character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});