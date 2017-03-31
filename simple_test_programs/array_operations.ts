var numberBag:number[];
var testOne = [1,2,3];
var testTwo = [4,5,6];
var numberBag1:number[] = new Array();

function concatArray():void 
{
 var newArray = testOne.concat(testTwo);
 console.log(newArray);
}

function putNumber(num:number):void
{
 numberBag1.push(num);
}
function removeNum(): void 
{
    numberBag1.pop();
}

function display():void
{
    var i:number;
    for(i = 0; i < numberBag1.length; ++i)
    {
        console.log(numberBag1[i]);
    }
}

function isBig(element, index, array):any
{
    return (element>10);
}

//var passed = [12, 64, 11, 25].every(isBig);
var passed = [12, 64, 1, 25].filter(isBig);

console.log("Test : "+ passed);
//concatArray();


/*
putNumber(1);
display();
putNumber(2);
putNumber(3);
putNumber(24);
display();
removeNum();
console.log("After removing last element");
display();
*/