const assert = require('assert');
const index = require('../srcipts/index.js');

describe('Whole test functions', ()=>{

    describe('just a test', ()=>{

        it('Should return the number came out of the string', ()=>{
            const actualResult=index.stringToNum("7");
            const expectedResult=7;
            assert.strictEqual(actualResult,expectedResult);
        })

    })



})