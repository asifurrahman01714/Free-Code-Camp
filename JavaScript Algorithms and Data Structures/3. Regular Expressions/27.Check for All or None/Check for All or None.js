let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
console.log(result);
console.log(favWord.match(favRegex));
