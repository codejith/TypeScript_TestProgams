var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.MyClass = function () { };
    MyClass.prototype.setText = function (message) {
        this.msg = message;
    };
    MyClass.prototype.getText = function () {
        return this.msg;
    };
    return MyClass;
}());
var msg = "Hello World";
var ob = new MyClass();
ob.setText(msg);
console.log(ob.getText());
