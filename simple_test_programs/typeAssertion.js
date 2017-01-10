var Test = (function () {
    function Test() {
    }
    Test.prototype.Test = function () {
        this.value = null;
        console.log("Value : " + this.value);
    };
    Test.prototype.setValue = function (val) {
        this.value = val;
    };
    Test.prototype.getValue = function () {
        return this.value;
    };
    Test.prototype.getString = function () {
        return this.value;
    };
    Test.prototype.getNumber = function () {
        return this.value;
    };
    return Test;
}());
var ob = new Test();
ob.setValue('2');
console.log(ob.getString());
ob.setValue(1);
console.log(ob.getNumber());
