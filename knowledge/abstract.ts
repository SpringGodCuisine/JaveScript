function abstract(){

class Person{
    private _name: string;
    constructor(name:string){
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

//readonly
class Person1{
    public readonly _name: string;
    constructor(name:string){
        this._name = name;
    }
}

const person = new Person("hc");

console.log(person.name);

//抽象类
//只能被继承，不能被实例化
abstract class Geom{
    abstract getArea();
}

class Cirtcle extends Geom{
    getArea(){

    }
}

class Square extends Geom{
    getArea(){

    }
}

class Triangle extends Geom{
    getArea(){

    }
}


//接口
interface PersonInterface{
    name:string;
}

interface Teacher extends PersonInterface{
    teachAge:number
}

interface student extends PersonInterface{
    age:18
}

const teacher = {
    name:'lee',
    age:18
}

const student = {
    name:"hc",
    age:18
}


const getUserInfo = (user: PersonInterface) =>{
    console.log(user.name)
}

getUserInfo(teacher);
getUserInfo(student);

}