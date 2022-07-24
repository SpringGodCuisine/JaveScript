{
//对象类型, {}, Class, function, []
const func = (str: string):number => {
    return parseInt(str, 10);
}

const func1 = (str: string) => {
    return parseInt(str, 10);
}

const func2:(str:string)=>number = (str)=>{
    return parseInt(str, 10);
}

const data = new Date();

//其他的case
interface Person{
    name:'String'
}


const rawData = '{"name":"dell"}';

const newData:Person = JSON.parse(rawData);

//Ts会认为temp永远是number
let temp = 123;
//temp = '456';

let temp1: number | string = 123;
temp1 = '456';
}
