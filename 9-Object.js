// object literals

const mySym = Symbol("key1") // using symbol in object.

const jsuser = {
    name: "Debarshi", 
    [mySym]: "myKey1", // using symbol.
    age: 19,
    location: "kolkata",
    email: "debarshidas1234@gmail.com",
    isLoggedIn: false,
    lastLogin: ["monday", "saturday"],
    "full name": "Debarshi Das"
}
console.log(jsuser.email) // debarshidas1234@gmail.com
console.log(jsuser["email"]) // debarshidas1234@gmail.com
// keys are always considerd as string.
// technique 2 is more useful because ......
console.log(jsuser["full name"]) // Debarshi Das
// here 1st technique generates errors.

console.log(jsuser[mySym]) // myKey1
console.log(typeof mySym) // symbol
// N.B : if we are using mySym: "myKey1" in object it will provide same output but in string datatype. 

// to change value......
jsuser.email = "debarshi333@gmail.com"

// to make the object unchangeable..........
Object.freeze(jsuser)

jsuser.age = 249 // now it is not applicable. 
console.log(jsuser)
/*
{
  name: 'Debarshi',
  age: 19,
  location: 'kolkata',
  email: 'debarshi333@gmail.com',
  isLoggedIn: false,
  lastLogin: [ 'monday', 'saturday' ],
  'full name': 'Debarshi Das',
  [Symbol(key1)]: 'myKey1'
}
*/

const jsuser_new = {
    name: "Debarshi Das", 
    age: 249,
    location: "kolkata",
    email: "debarshidas333@gmail.com",
    isLoggedIn: false,
}

jsuser_new.greeting = function(){
    console.log("Hello js users")
}
console.log(jsuser_new.greeting) // [Function (anonymous)]
console.log(jsuser_new.greeting()) // Hello js users

jsuser_new.greeting2 = function(){
    console.log(`Hello js users, ${this.name}`)
}
console.log(jsuser_new.greeting2()) // Hello js users, Debarshi Das 

const user1 = new Object() // ==> singleton object.
const user2 = {} // ==> non singleton object.

user2.id = "1234abcd"
user2.name = "Debarshi"
user2.number = 123456789

console.log(user2) // { id: '1234abcd', name: 'Debarshi', number: 123456789 }

/* In array discussion, we observed that....
console.log(Array.from({name: "Debarshi" , college: "TIHC"})) provides empty array, because the basis(key, string) on which the array will be constructed, is not mentioned.
but here we are going to discuss mention it......*/
console.log(Object.keys(user2)) // [ 'id', 'name', 'number' ]
console.log(Object.values(user2)) // [ '1234abcd', 'Debarshi', 123456789 ]
console.log(Object.entries(user2)) // [ [ 'id', '1234abcd' ], [ 'name', 'Debarshi' ], [ 'number', 123456789 ] ]
console.log(user2.hasOwnProperty('number')) // true


const user3 = {
    email: "debarshi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Debarshi",
            lastname: "Das"
        }
    }
}
console.log(user3.fullname.userfullname.lastname) // Das

// combine 2 object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = Object.assign({}, obj1, obj2) 
// const obj3 = Object.assign(obj1, obj2) ===> also applicable.
// but the simple way is .......
const obj3 = { ...obj1, ...obj2} // spread technique.
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Go to browser >> Inspect >> Console 
// Run ====> const obj1 = {1: "a", 2: "b"}
// Run ====> obj1
// In this way you can get the list [under prototype] of all object properties.


// Object destructure.......
const course = {
    coursename: "JS for beginners",
    price: "free",
    courseInstructor: "Debarshi"
}
const {courseInstructor: instructor} = course
console.log(instructor) // Debarshi