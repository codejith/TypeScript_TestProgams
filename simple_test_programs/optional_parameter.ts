class FunctionTest {
    
    constructor()
    {

    }

    display(value?:string):void 
    {
        if(value==undefined)
        {
            console.log("No Value");
        }
        else
        {
            console.log("No arguments");
        }
        
    }

     getSum(...nums: number[]):void
     {
         var i;
         var sum = 0;
         for(i=0; i<nums.length; ++i)
         {
             sum+=nums[i];
         }
         console.log("Sum : "+sum);
     }



}



var sum = (x:number,y:number) => 
{
    return x+y;
}
var ob = new FunctionTest();
ob.display();
ob.getSum(1,2);
ob.getSum(1,2,3,4,5);
console.log("Sum = "+sum(1,2));