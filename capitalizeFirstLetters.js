
function capitalizeFirstLetters(s1) {
    return s1 !== '' ? s1.split(" ").map(e => { return e[0].toUpperCase() + e.slice(1)}).join(" ") : ''
}


// import { strictEqual } from 'assert';
var assert = require('assert');

assert.strictEqual(typeof(capitalizeFirstLetters), 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);

assert.deepStrictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.deepStrictEqual(capitalizeFirstLetters('learning'), 'Learning');
assert.deepStrictEqual(capitalizeFirstLetters(''), '');