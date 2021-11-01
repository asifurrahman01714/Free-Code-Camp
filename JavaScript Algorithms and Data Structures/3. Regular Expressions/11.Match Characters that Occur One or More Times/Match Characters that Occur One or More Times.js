let difficultSpelling = "Mississsippis";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);
console.log(result)