{
//基础类型 string，number, boolean
const teacherNamme:string = "Dell Lee";
const teacherAge:number = 28.0;
const isMale:boolean = true;
//数组类型
const numberArr:number[] = [1,2,3];
const stringArr:string[] = ['a', 'b', 'c'];
const booleanArr:Array<boolean> = [true, false];
//对象类型
const user: {name:string, age:number} = {name:'dell', age:18};
const userOne:{name:string, age?:number} = {name:'dell'};//对象属性可选
//联合类型
function union(id:string|number){
    if(typeof id === 'string'){//类型收窄 Narrowing
        console.log(id.toUpperCase);
    }else{
        console.log(id);
    }
}
//类型别名
type User = {name:string, age:number};
//type Employee = {name:string, age:number, salay: number}
const UserTwo:User = {name:'dell', age:18};
const UserThree:User = {name:'dell', age:18};
//any
function showMessage(message:any){ //不写默认也是any
    console.log(message);
}
//函数类型
function adb(message:string) : number{
    return 123;
}
const def:(age:number) => number = (age:number)=>{ return 28}
//接口类型 Interface
interface Student{
    age:number;
    sex?:string;
}
interface OldStudent extends Student{//拓展
    name:string;
}
const student:Student = {age:18, sex:'male'}
const oldStudent:OldStudent = {age:18, sex:'male', name:'dell'};
//能用interface尽量用interface，其次再用type等等

//交叉类型
type Employee = User & {salary:number};
const employee:Employee = {name:'dell', age:18, salary:1}
//断言 Assersion
const dom: undefined = document.getElementById('#root') as unknown as undefined;
const dom1: undefined = <undefined><unknown>document.getElementById('#root');
//获取节点，在自己知道是undefined的情况下，断言
const testString:string = 123 as any as string;

//字面量类型
const str:'ast' = 'ast'
//值只能是ast
function getPosition(position:'left' | 'right'):string{
    return position;
}
//约束参数只能是left，或者right
getPosition('left');

//字面量类型习题
function request(url:string, method: 'GET'|'POST'):string{
    return 'sending request';
}
const params:{url:string, method:string} = {url:'immoc.com', method:'GET'};
//request(params.url, params.method);
request(params.url, params.method as 'GET');

//null, undefined
const testUndefined : undefined = undefined;
const testNull : null = null;
function checkNull(abc: string|null){
    if(typeof abc === 'string'){
        console.log(abc.toUpperCase());
    }
    else{

    }
}

//void 限制什么都不返回
function getNumber(): void{
    return;
}

}
