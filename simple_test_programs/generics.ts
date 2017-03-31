function identity<T>(arg:T): T
{
    return arg;
}

function echoArray<T>(args: Array<T>): Array<T>
{
    console.log("Array length : "+args.length);
    return args;
}

var num =  new Array(1,2,3);
console.log<number>(num);

/*
let value = identity<string>("Hello World");
console.log(value);

let phoneNo = identity<number>(9061422004);
console.log(phoneNo);
*/