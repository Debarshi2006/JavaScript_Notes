const name = "Debarshi"
const age = 19
console.log(name +" "+ age + " Value") // old style
console.log(`Hello my name is ${name} and my age is ${age}`) // mordern style

const newString = new String('debarshi-das')
console.log(newString[0]) //d
console.log(newString.__proto__) //{}
console.log(newString.length) //12
console.log(newString.toUpperCase()) //DEBARSHI-DAS
console.log(newString.charAt(2)) //b
console.log(newString.indexOf('s')) //5
console.log(newString.indexOf('t')) // There is no t in debarshi so it shows the index -1.

const updateString = newString.substring(0, 4) // Last value is not included in the sub string.
console.log(updateString)

const anotherString = newString.slice(3, 10)
console.log(anotherString) //arshi-d

const new1 ="    Deba    "
console.log(new1) //(    Deba    )
console.log(new1.trim()) //(Deba)

const url = "https://debarshidas.com/debarshi%20Das"
console.log(url.replace('%20', '-'))
console.log(url.includes('das'))

const newString2 = new String('debarshi-das-bca-tihc')
console.log(newString2.split('-')); // [ 'debarshi', 'das', 'bca', 'tihc' ]

// Go to browser >> Inspect >> Console 
// Run ====> const newString = new String('debarshi-das')
// Run ====> console.log(newString)
// In this way you can get the list of all string properties.