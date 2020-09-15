

// import { strictEqual } from 'assert';
var assert = require('assert');

assert.strictEqual(typeof(capitalizeFirstLetters), 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.strictEqual(capitalizeFirstLetters('i am learning TDD '), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('learning'), 'Learning');
assert.strictEqual(capitalizeFirstLetters(''), '');