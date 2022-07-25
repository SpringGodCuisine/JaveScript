
function PersonExample(){
//静态属性
//getter setter


class Person {
    constructor(private _name:string){}
    get name(){
        return this._name;
    }
    set name(name:string){
        this._name = name;
    }
}

const person = new Person('hc');

console.log(person.name);

person.name = "lee";

}

//单例模式
class Demo{
    private static instance : Demo;
    private constructor(public name:string){}

    static getInstance(){
        if(!this.instance){
            this.instance = new Demo("hc");
        }
        return this.instance; 
    }
}

const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();

console.log(demo1.name);
console.log(demo2.name);