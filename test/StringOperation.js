var testString = '"U-4-1": "100"';
var re = /"/gi;
var test = testString.replace(re, "");
var testString1 = test.split(":");
console.log(testString1[0]);
console.log(testString1[1]);
