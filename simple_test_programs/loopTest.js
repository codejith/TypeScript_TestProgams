var Loops = (function () {
    function Loops(num) {
        this.limit = num;
    }
    Loops.prototype.forLoop = function () {
        var i;
        for (i = 0; i < this.limit; ++i) {
            console.log("ForLoop");
        }
    };
    Loops.prototype.whileLoop = function () {
        var i = 0;
        while (i < this.limit) {
            console.log("WhileLoop");
            ++i;
        }
    };
    return Loops;
}());
var ob = new Loops(5);
ob.forLoop();
ob.whileLoop();
