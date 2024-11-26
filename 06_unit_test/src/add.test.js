import {expect, test, describe} from 'vitest'
import {add} from './add.js'

// return the correct results for addition
describe("Check addition of two numbers",()=>{
    test('should return the sum of two numbers', ()=>{
        const result = add(3,2)
        expect(result).toBe(5)
    })
    // write a test to confirm they must both be numeric
    // expect .toThrow()
})