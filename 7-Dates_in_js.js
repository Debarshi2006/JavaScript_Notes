let myDate = new Date()
console.log(myDate) // it gives output like 2025-08-17T15:40:10.687Z , which is not usable.
console.log(myDate.toString()); // Sun Aug 17 2025 21:16:48 GMT+0530 (India Standard Time) 
console.log(myDate.toISOString()) // 2025-08-17T15:51:00.320Z
console.log(myDate.toJSON()) // 2025-08-17T15:51:00.320Z
console.log(myDate.toLocaleDateString()) // 8/17/2025
console.log(myDate.toLocaleString()) // 8/17/2025, 9:21:00 PM
console.log(myDate.toDateString()) // Sun Aug 17 2025

let myCreatedDate1 = new Date(2023, 0, 23) // month starts from 0 in js......
console.log(myCreatedDate1.toDateString()) // Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) // month starts from 0 in js......
console.log(myCreatedDate2.toLocaleString()) // 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14") // month starts from 1 in yyyy-mm-ddformat......
console.log(myCreatedDate3.toLocaleString()) // 1/14/2023, 5:30:00 AM

let myCreatedDate4 = new Date("01-14-2023") // month starts from 1 in mm-dd-yyyy format......
console.log(myCreatedDate4.toLocaleString()) // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1755447058717 ===> milisecond format
// This milisecond comparison is specially used in those case where the first voter becomes the winner in any poll......

let newDate = new Date()
console.log(newDate.getMonth()) // 7 ==> month starts from 0 in js, so 7 refers to augest.

newDate.toLocaleString ('default',{
    // We can define what we want. Press ctrl + space to get the list of properties in vscode.
    weekday:"long",
})