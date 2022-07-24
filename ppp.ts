//private, protected, public访问类型
class Person1{
    name:string;
    sayHi(){
    }
}

const person1 = new Person1();

person.name = "hc";

console.log(person1.name);

person1.sayHi();

//默认隐藏public 访问类型
//private 允许在类内被使用
//protected 允许在类内及继承的子类中使用

class Teacher2 extends Person{
    public sayBye(){
        this.name;
    }
}

//constructor 构造器
//执行时机 new实例的一瞬间执行的
class P {

    //传统写法
    // public name:string;
    // constructor(name:string){
    //     this.name = name;
    // }

    //简化写法
    constructor(public name:string){}
}

const person2 = new P("hc");
console.log(person2.name);

class T extends P{
    sayHi(){
        this.name;
    }
//如果父类有构造器，子类也要生成构造器的时候，一定要手动调用一下构造器    
    constructor(public age:Number){
        super('hc');
    }
}