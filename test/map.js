var Myclass = (function () {
    function Myclass(name) {
        this.name = name;
    }
    return Myclass;
}());
var controls = [];
controls.push({ "xxx": new Myclass('name1') });
controls.push({ "key2": new Myclass('name2') });
controls.push({ "key3": new Myclass('name3') });
var i = 0;
for (i = 0; i < controls.length; ++i)
    console.log(controls[i]);
console.log(controls["key2: Myclass"]);
