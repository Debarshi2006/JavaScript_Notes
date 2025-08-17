// ***************** Declarations *****************

const accountId = 144553
let account_email = "debarshidas742@gmail.com"
var accountPassword = "1234567890"
accountCity = "kolkata"
let accountState

// accountId = 112233445
account_email = "debarshidas123@gmail.com"
accountPassword = "0987654321"
accountCity = "agartala"

console.log(accountId)

/*
Prefer not to use var,
because of issue in block scope and functional scope.
*/

console.table([account_email,accountPassword,accountCity,accountState])

// ***************** Datatypes *****************

// Depending on the memory allocation and accestion of data , datatypes are divided in two parts.
//primitive & non-primitive.
// Primitive datatypes are call by value in nature. In case of using, an copy of the data is shared instead of the memory reference. New changes are saved in the copy.

//---------Primitive---------
// number
// bigint
// string
// boolean => true/false
// null => standalone value
// undefined
// symbol => to make some element unique

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

console.log(typeof null) //type object. 
console.log(typeof undefined) // type undefined

//--------- Non-primitive or reference ---------
// array
// object
// function

const heros = ["apple", "samsung", "motorola"]

let myObj = {
    names: "Debarshi",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world!")
}

