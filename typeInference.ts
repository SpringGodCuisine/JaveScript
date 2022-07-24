{
// type annotation 类型注解, TS变量是什么类型
// type inference 类型推断, TS会自动的去尝试分析变量的类型
// 如果 TS 能够自动分析变量的类型的话，我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

let count:number;
count = 123;

let countInterfence = 123;

// const firstNumber = 1;
// const secondNumber = 2;
// const total = firstNumber + secondNumber;

function getTotal(firstNumber:any, secondNumber:any){
    return firstNumber + secondNumber;
}

const total = getTotal(1,2);

function getTotal1(firstNumber:number, secondNumber:number){
    return firstNumber + secondNumber;
}

const total1 = getTotal1(1,2);

const obj = {
    name:'dell',
    age:18
}

//写Ts代码就是希望代码里的每个变量包括每个属性都是固定的
//Ts本身会去推断，当无法推断的时候，要自己手动去写类型注解
}
