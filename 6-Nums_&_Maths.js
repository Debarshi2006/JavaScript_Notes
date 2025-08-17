const score = 300
console.log(score) // 300

const balance = new Number(100)
console.log(balance) //[Number: 100]
// In first case, js automatically define the value as a number.
// In second case, the value is specifically casted as a number.

console.log(balance.toString()) // 100
console.log(balance.toString().length) // 3
console.log(balance.toFixed(2)) // 100.00

const num1 = 23.796874
const num2 = 123.796874
const num3 = 1123.796874

console.log(num1.toPrecision(3)) //23.8
console.log(num2.toPrecision(3)) //124
console.log(num3.toPrecision(3)) //1.12e+3
// Number of significant digits. Must be in the range 1 - 21, inclusive.
// Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const num4 = 1000000
console.log(num4.toLocaleString()) //1,000,000 ------> In American Standerds
console.log(num4.toLocaleString('en-IN')) //10,00,000 ------> In Indian Standerds

// Go to browser >> Inspect >> Console
// Run ===> const balance = new Number(100) ; it returns ===> Number{100}
// Type ===> Number. ; you will get a long list. Here you can explore various things like EPSILON, isFinit, MAX-SAFE-INTEGER, MIN-SAFE-INTEGER etc.
// MAX-SAFE-INTEGER ==> max number which can be taken in js.
// MIN-SAFE-INTEGER ==> min number which can be taken in js.

// ***************** Maths *****************
console.log(Math)
console.log(Math.abs(-3)) //3 ;used to change negative sign into positive.
console.log(Math.round(4.3)) // 4
console.log(Math.round(4.6)) // 5
// Here We can chose the selection of upper or lower value.
console.log(Math.ceil(4.1)) // 5 ; it pushes the number to upper value.
console.log(Math.floor(4.9)) // 4 ; it pushes the number to lower value.

console.log(Math.min(4, 3, 5, 6)) // 3 ==> lowest value in array.
console.log(Math.max(4, 3, 5, 6)) // 6 ==> biggest value in array.

console.log(Math.random()) // It always generates a random number between 0-1 .
console.log(Math.random()*10) // It always generates a random number between 0-9 .
console.log((Math.random()* 10)+ 1) // It always generates a random number between 1-10 .

// Random number generater between 10 to 20.........
const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 