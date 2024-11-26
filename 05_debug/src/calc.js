// to debug in Chrome Dev tools:
// node --inspect-brk calc.js
// Then in Chrome, enter chrome://inspect
// wait, then select 'inspect' for 'calc.js'

const add=(a, b)=>{
    const result = a - b; // Intentional mistake for debugging exercise
    return result;
}

const num1 = 5;
const num2 = 3;
console.log(`The sum of ${num1} and ${num2} is:`, add(num1, num2));
