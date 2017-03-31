class Loops {
    limit:number;
    constructor(num: number)
    {
        this.limit = num;
    }
    forLoop():void
    {
        var i:number;
        for(i = 0; i < this.limit; ++i)
        {
            console.log("ForLoop");
        }
    }
    whileLoop():void
    {
        var i:number = 0;
        while(i < this.limit)
        {
            console.log("WhileLoop");
            ++i;
        }
    }
}

 var ob = new Loops(5);
 ob.forLoop();
 ob.whileLoop();