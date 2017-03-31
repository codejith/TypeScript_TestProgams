interface Person {
    firstName:string,
    lastName:string,
    getName:(firstName, lastName)=>string;
}

var customer:Person = {
    firstName: "somename",
    lastName: "somename",
    getName: (firstName,lastName):string => {
        return (firstName+" "+lastName);
    }
}

console.log("FirstName : "+customer.firstName);
console.log("FirstName : "+customer.lastName);
console.log("FirstName : "+customer.getName);

