let testString = '"U-4-1": "100"';
let re = /"/gi; 
let test = testString.replace(re,"");
let testString1 = test.split(":");
console.log(testString1[0]);
console.log(testString1[1]);