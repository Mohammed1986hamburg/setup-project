const assert = require('assert'); // node.js
const index = require('../srcipts/index.js');

describe('Whole test functions', ()=>{   // mocha

    describe('just a test', ()=>{

        it('Should return the number came out of the string', ()=>{
            const actualResult=index.stringToNum("7");
            const expectedResult=7;
            assert.strictEqual(actualResult,expectedResult);
        })

        it('to test deepEqual for Array and Object', ()=>{
            const actualResult=index.mohammed;
            const expectedResult={firstName:"mohammed", lastName:"wahba", role:"student"};
            assert.deepEqual(actualResult,expectedResult);
        })

    })



})