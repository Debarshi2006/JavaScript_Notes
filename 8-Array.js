const myArray = [1, 2, 3, 4, 5]
const myPhones = ["apple", "samsung", "motorola"]
const myArray2 = new Array(1, 2, 3, 4, 5)

console.log(myArray[0]) // 1 ; index starts from 0 for array in js.

// Go to browser >> Inspect >> Console 
// Run ====> const numbers = [1, 2, 3, 4, 5]
// Run ====> numbers
// In this way you can get the list [under prototype] of all array properties.

myArray.push(6)
console.log(myArray) // [ 1, 2, 3, 4, 5, 6 ]
myArray.push(7)
console.log(myArray) // [1, 2, 3, 4, 5, 6, 7 ]
myArray.pop()
console.log(myArray) // [ 1, 2, 3, 4, 5, 6 ]
myArray.unshift(0)
console.log(myArray) // [0, 1, 2, 3, 4, 5, 6 ]
myArray.shift()
console.log(myArray) // [ 1, 2, 3, 4, 5, 6 ]

console.log(myArray.includes(9)) // false
console.log(myArray.indexOf(3)) // 2

const newArray = myArray.join()
console.log(newArray) // 1,2,3,4,5,6
console.log(typeof newArray) // string

// slice & splice...............

console.log("A ", myArray) // A  [ 1, 2, 3, 4, 5, 6 ]

const myArray3 = myArray.slice(1,3)
console.log(myArray3) // [ 2, 3 ]
console.log("B ", myArray) // B  [ 1, 2, 3, 4, 5, 6 ]

const myArray4 = myArray.splice(1,3)
console.log(myArray4) // [ 2, 3, 4 ]
console.log("c ", myArray) // c  [ 1, 5, 6 ]

// Slice does not affect the original array. In myArray.slice(i,j) the range starts from index i to index (j-1).
// Splice affects the original array. it extracts the elements including the range from array.

const m_heros = ["ironman", "thor", "hulk"]
const d_heros = ["batman", "superman", "flash"]

/* If we want to merge them and we are using push method
m_heros.push(d_heros)
console.log(m_heros) ===> [ 'ironman', 'thor', 'hulk', [ 'batman', 'superman', 'flash' ] ]
It will treat the second array as an element and it also affects the first array (m_heros).......
*/

const allHeros = m_heros.concat(d_heros)
console.log(allHeros) // [ 'ironman', 'thor', 'hulk', 'batman', 'superman', 'flash' ]
// Here we can use only 2 arrays. Instead of it we can use spread property......
const allNewHeros = [...m_heros, ...d_heros]
console.log(allNewHeros) // [ 'ironman', 'thor', 'hulk', 'batman', 'superman', 'flash' ]
// Here the elements of both of the two arrays are spread and collected in a new array. Here we can use many arrays. 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]
const update_another_array = another_array.flat(Infinity) 
console.log(update_another_array) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// In flat() we have to give a value called depth number. here the max depth number is 2 because the main array contains an array [6,7, [4, 5]], which also contains an array [4, 5].
// we can use infinity if the depth number is unknown to us.
const update_another_array1 = another_array.flat(1) 
console.log(update_another_array1) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]

console.log(Array.isArray("Debarshi")) // false ; because it's a string.
console.log(Array.from("Debarshi")) // [ 'D', 'e', 'b', 'a', 'r', 's', 'h', 'i']
console.log(Array.from({name: "Debarshi" , college: "TIHC"})) 
// [] ; it gives an empty array, because the basis(key, string) on which the array will be constructed, is not mentioned.

let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1, num2, num3)) // [ 100, 200, 300 ]
