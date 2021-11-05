// 1st solution 
let username1 = "JackOfAllTrades";
let userCheck1 = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result1 = userCheck1.test(username1);
console.log(result1)

/*
Code Explanation:

^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input

*/

// 2nd solution

let username2 = "JackOfAllTrades";
const userCheck2 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result2 = userCheck2.test(username2);
console.log(result2);

/*
Code Explanation

^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input

*/