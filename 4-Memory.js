// Stack (Primitive) => In case of using, an copy of the data is shared instead of the memory reference. New changes are saved in the copy.
// Heap (Non-primitive) => In case of using, the memory reference of the data is shared. New changes are saved in the original.
let A = "Debarshi"
let B = A
B = "Das"
console.log(A)
console.log(B)
// In stack the main value is not affected by new changes, because a copy of A is passed to B in ( B = A ).

let user1 = {
    email: "debarshidas1234@gmail.com",
    upi: "user@ybl"
}
console.log(user1)
let user2 = user1
user2.email = "dasdebarshi4321@gmail.com"
console.log(user1)
// In heap the main value is affected by new changes, due to reference passing.