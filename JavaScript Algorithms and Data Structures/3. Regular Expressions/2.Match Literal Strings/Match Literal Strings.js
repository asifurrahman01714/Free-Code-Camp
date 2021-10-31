let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result)


// Another example
let myName = "Asif Ur Rahman";
let myRegex = /Asif/; 
let myRegexResult = myRegex.test(myName);
console.log(myRegexResult)