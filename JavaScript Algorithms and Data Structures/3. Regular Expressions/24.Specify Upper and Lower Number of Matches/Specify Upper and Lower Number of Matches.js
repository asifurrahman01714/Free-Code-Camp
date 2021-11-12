let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6} no/; // Change this line
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);
console.log(ohStr.match(ohRegex));