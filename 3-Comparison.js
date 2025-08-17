// In case of comparisons, we are familier with > , < , >= , <= , == , != etc.
console.log("2">1) 
// "2" is converted to number by default.
//  But try to avoid the comparison of diffrent data types, because it can generate unpredictable result due to convertion problem.
console.log(null > 0) // False
console.log(null == 0) // False
console.log(null >= 0) // True
// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparison converts null to a number, treating it as 0.
//  Thats why comparison null >= 0 is true and null > 0 is false. but equality check null == 0 is false.

// Here === is also a checking property which checks both of the value and datatype srictly.
console.log("2"== 2) // checks only values 
console.log("2"=== 2) // checks values and datatype.