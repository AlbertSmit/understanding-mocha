// require assert for the testing logic
const assert = require('assert');
// require the new instances via the family.js file
const { Albert, Dita } = require('../family')

// describe creates a testing group, with the first parameter being the title of it
describe('Does Albert return a name?', () => {
    // create 'individual test' with the argument being the title of the test
    it('is the person name Dita?', () => {
        // assert.ok checks the first argument(statement)
        // the second argument is the error message when false
        // (when 'Lammert' runs 'false', error message 'expected mom' is thrown)
        assert.ok(Dita.personName == 'Dita', 'Expected Dita')
    });
    it('is the person name Henk?', () => {
        assert.ok(Albert.personName == 'Henk')
    });
    // log name of instance to test if it is functional
    // and found by this mocha script.
    console.log(Albert.personName)
});