class Test {
    value:any;
    Test()
    {
        this.value = null;
        console.log("Value : "+this.value);
        
    }

    setValue(val:any):void
    {
        this.value = val;
    }
    getValue():any 
    {
        return this.value;
    }

    getString(): string
    {
        return <string>this.value;
    }

    getNumber(): number 
    {
        return <number> this.value;
    }

}
/*
 * Type assetions  
 * 
*/
 
var ob =  new Test();
ob.setValue('2');
console.log(ob.getString());
ob.setValue(1);
console.log(ob.getNumber());
