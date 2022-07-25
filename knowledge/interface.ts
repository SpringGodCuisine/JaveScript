
const getPersonName = (person:any) =>{
    console.log(person.name);
}

const setPersonName = (person:any, name:any) =>{
    person.name = name;
}

const getPersonName1 =(person:{name:any}) =>{
    console.log(person.name);
}

const setPersonName1 = (person:{name:any}, name:any) =>{
    person.name = name;
}

//可以使用interface解决复用
//Ts中，能用接口表述类型就用接口，实在不行再用类型别名
interface Person{
    name:string;
    //age属性可有可无
    age?:number;
    //可以有其他属性
    [propName: string]:any;
    say():string;
}

type Person1 = {
    name:string;
}

const getPersonName2 = (person: Person):void => {
    console.log(person.name);
}

const setPersonName2 = (person:Person, name:string):void => {
    person.name = name;
}

const person = {
    name:"hc",
    say(){
        return 'say Hello';
    }
}

getPersonName2(person);
setPersonName2(person, "123");

getPersonName2({
    name:"hc",
    //当以字面量直接传递函数参数的时候
    //Ts会属性强校验
    //sex:"male"
    say() {
        return "hc"
    },
})

class User1 implements Person {
    name = "hc";
    say(){
        return "hello";
    }
}

interface Teacher extends Person{
    teach():string;
}


const getPersonName3 = (person: Teacher):void => {
    console.log(person.name);
}

const setPersonName3 = (person:Teacher, name:string):void => {
    person.name = name;
}

//声明一个函数类型的接口
interface SayHi{
    (word:string):string
}

const say:SayHi = (word:string) =>{
    return word;
}