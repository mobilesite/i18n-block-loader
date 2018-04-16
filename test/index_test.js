/**
 * assert(value[, message]) 相当于assert.ok(value[, message])
 * assert.strictEqual(actual, expected[, message])
 * assert.equal(actual, expected[, message])
 * assert.notEqual(actual, expected[, message])
 * assert.strictEqual(actual, expected[, message])
 * assert.notStrictEqual(actual, expected[, message])
 * assert.deepEqual(actual, expected[, message])
 * assert.notDeepEqual(actual, expected[, message]) // 判断两个对象是否不是deeply equal
 * assert.deepStrictEqual(actual, expected[, message])
 * assert.notDeepStrictEqual(actual, expected[, message])
 * assert.throws(block[, error][, message])
 * assert.doesNotThrow(block[, error][, message])
 * assert.fail(actual, expected, message, operator)
 * assert.ifError(value) // Throws value if value is truthy.
 */
import chai from 'chai'; // assert是Node.js自带的断言模块
import loader from '../src/index.js';

import jsdom from 'mocha-jsdom';

chai.should();

describe('env', () => {
    // describe('test', () => {
    //     it('this is a test', () => {
    //         loader.should.equal('0.0.1');
    //     });
    // });
});
