class Myclass {
    constructor(public name:string) {}
}
interface map {
    [key:string]: Myclass;
}

let controls: map[] = [];
controls.push({"xxx" : new Myclass('name1')});
controls.push({"key2":new Myclass('name2')});
controls.push({"key3":new Myclass('name3')});
let i = 0;
for(i = 0; i<controls.length; ++i)
    console.log(controls[i]);
console.log(controls["key2: Myclass"]);
