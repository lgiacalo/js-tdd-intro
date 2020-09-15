
// test/Rectangle.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Test class Rectangle', () => {

    it('Test method isSquare() ', () => {
        let rectangle = new Rectangle(10, 5);
        assert.strictEqual(rectangle.isSquare(), false);
        rectangle = new Rectangle(10, 10)
        assert.strictEqual(rectangle.isSquare(), true);
    });

    it('Test method getArea()', () => {
        rectangle = new Rectangle(13, 7); 
        assert.strictEqual(rectangle.getArea(), 91);
    })

    it('Test method getPerimeter()', () => {
        rectangle = new Rectangle(13, 7); 
        assert.strictEqual(rectangle.getPerimeter(), 40);
    })
})