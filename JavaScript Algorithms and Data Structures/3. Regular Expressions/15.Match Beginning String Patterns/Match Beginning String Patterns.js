let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result);
let result1 = rickyAndCal.match(calRegex);
console.log(result1);