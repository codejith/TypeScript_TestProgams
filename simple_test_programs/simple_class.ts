class MyClass {
    msg:string;
    MyClass() {}

    
    setText(message:string):void 
    {
        this.msg = message;
    }
    getText():string 
    {
        return this.msg;
    }
    
    
}

var msg:string =  "Hello World";
var ob = new MyClass();
ob.setText(msg);