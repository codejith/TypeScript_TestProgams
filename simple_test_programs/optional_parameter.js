var FunctionTest = (function () {
    function FunctionTest() {
    }
    FunctionTest.prototype.display = function (value) {
        if (value == undefined) {
            console.log("No Value");
        }
        else {
            console.log("No arguments");
        }
    };
    FunctionTest.prototype.getSum = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i - 0] = arguments[_i];
        }
        var i;
        var sum = 0;
        for (i = 0; i < nums.length; ++i) {
            sum += nums[i];
        }
        console.log("Sum : " + sum);
    };
    return FunctionTest;
}());
var sum = function (x, y) {
    return x + y;
};
var ob = new FunctionTest();
ob.display();
ob.getSum(1, 2);
ob.getSum(1, 2, 3, 4, 5);
console.log("Sum = " + sum(1, 2));
