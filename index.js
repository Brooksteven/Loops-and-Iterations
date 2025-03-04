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
//worked on this as a group with Anisa and Jesse

for (let n = 3; n < 100; n++){
    if (n % 2 !== 0 && n % 3 !== 0 && n % n == 0){
        console.log(n) 
        break;
    }
}






//part 3
//do a method called split and then split it twice
//part 3 I received help from Jeevitha P

// const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// const strRows = csvData.split("\n");
// for (let i = 0; i < strRows.length; i++){

//     const cell = strRows[i].split(",");
//     console.log(cell[0], cell[1], cell[2], cell[3]);
// }







