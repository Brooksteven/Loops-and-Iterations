// //make a for loop 1 to 100
// for (let i = 1; i < 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("Fizz Buzz")
// } 
// else if (i % 3 === 0){
//     console.log("Fizz")
// } 

// else if(i % 5 === 0) {
//     console.log("Buzz")
// }
// else {
//     console.log(i)
// }
// }


//part 2

// for (let n = 3; n < 100; n++){
//     if (n % 2 !== 0 && n % 3 !== 0 && n % n == 0){
//         console.log(n) 
//         break;
//     }
// }

//part 3
//do a method called split and then split it twice

const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const labels = "ID, Name, Occupation, Age\n"
const row1 = "42, Bruce, Knight, 41\n"
const row2 = "57, Bob, Fry Cook, 19\n"
const row3 = "63, Blaine, Quiz Master, 58\n"
const row4 = "98, Bill, Doctor’s Assistant, 26\n"

console.log(labels, row1, row2, row3, row4)


// let rows = data.split("\n");

// for (let row of rows) {
//     console.log(row)
// }

// let cells = data.split("\\")

// for (let cell of cells) {
//     console.log(cell)
// }