{
    function hello(){}
    const hello1 = function(){}
    const hello2 = () => {}
    
    
    //增加 ：number 函数类型约束
    function add(first:number, second:number) : number{
        //return first + second + '';
        return first + second;
    }
    
    const total = add(1,2);
    
    //不希望有返回值
    function sayHello() : void{
        console.log("Hello");
    }
    
    //这个函数永远不可能执行到最后
    function errorEmitter():never{
        throw new Error();
        console.log(123);
    }
    function errorWhile():never{
        while(true){}
    }
    
    //解构语法
    function add1({first , second}){
        return first + second;
    }
    const total1 = add1({first:1, second:2});
    
    function add2({first, second}:{first:number, second:number}){
        return first + second;
    }
    
    const total2 = add2({first:1, second:2});
    
    
    function getNumber1({first}){
        return first;
    }
    
    const count = getNumber1({first:1});
}
