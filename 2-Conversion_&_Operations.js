// ***************** Conversion *****************

//--------- Number conversion ---------
let score = "33"
console.log(typeof score)  // Type-1
console.log(typeof(score)) // Type-2 (as a method)
let valueInNumber = Number(score) // 
console.log(typeof valueInNumber)

// For null.....
let num = null
console.log(typeof num)
let value_in_num = Number(num)
console.log(typeof value_in_num)
console.log(value_in_num) // (0)

// Their are some issues...... For an example--
let num1 = "22abc" // It's a string. The value is not a pure number.
console.log(typeof num1)
let value_in_num1 = Number(num1)
console.log(typeof value_in_num1)
console.log(value_in_num1) // (NaN)

let num2 = "abc" // It's a string. The value is also a string.
console.log(typeof num2)
let value_in_num2 = Number(num2)
console.log(typeof value_in_num2)
console.log(value_in_num2) // (NaN)

// For undefined.....
let num3 = undefined
console.log(typeof num3)
let value_in_num3 = Number(num3)
console.log(typeof value_in_num3)
console.log(value_in_num3) // (NaN)
// In case of boolean for true => 1 ; false => 0

//--------- Boolean conversion ---------
let isLogged = 1
let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged) // true
// for value 0 => false.
// If the value is greater than 1, then it returns true.
// for empty, it returns false.
// for string, it returns true.
// for null, it returns false.
// for undefined, it returns false.

//--------- String conversion ---------
let someNum = 333
let stringNumber = String(someNum)
console.log(stringNumber)
console.log(typeof stringNumber)

// ***************** Oparations *****************

console.log(3+2) // => Addition
console.log(3-2) // => Subtraction
console.log(3*2) // => Multiplication
console.log(3**2) // => Power
console.log(3/2) // => Divition
console.log(3%2) // => Reminder

let str1 = "hello"
let str2 = "Debarshi"
let str3 = str1+" "+str2
console.log(str3)

// Now the interesting part..............
console.log("1"+ 2)
console.log("1"+ 2 + 2)
console.log(2 + 2 +"1")
// Different position gives different results, so try to avoid positional confusions like (3 + 4 * 5 % 3) in professional uses.
// some other example of tricky confusions---
console.log(+true)
// its an boolean operation which is systematically correct but poor choice for professional usage.

// Increament & Decreament............
let c = 100
c++
console.log(c)
c--
console.log(c)
// prefix & postfix...........
// read documents of js mdn on browser for better understanding.
// link to study

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
