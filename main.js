const { add, subtract } = require('./utilities.js');

console.log(add(1,2)); // 3
console.log(subtract(2,1)); // 1

process.argv.forEach(argument => console.log(argument));
