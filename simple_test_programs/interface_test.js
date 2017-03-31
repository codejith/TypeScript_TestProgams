var customer = {
    firstName: "somename",
    lastName: "somename",
    getName: function (firstName, lastName) {
        return (firstName + " " + lastName);
    }
};
console.log("FirstName : " + customer.firstName);
console.log("FirstName : " + customer.lastName);
console.log("FirstName : " + customer.getName);
