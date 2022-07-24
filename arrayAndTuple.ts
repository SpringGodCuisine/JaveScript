function arrayAndTuple() {
//数组存储基本数据类型
const numberArr:number[] = [1, 2, 3];
const stringArr:string[] = ['1', '2', '3'];
const arr:(number|string)[] = [1, "2", 3, "4", "5"];
const undefinedArr: undefined[] = [undefined];

//数组存储对象数据类型
const objectArr:{name:string}[] = [{
    name:'dell'
}]

type User = {name:string; age:number};

const objectArr1: User[] = [{
    name:"123",
    age:18
}]

class Teacher{
    name:string;
    age:number;
}

const objectArr2:Teacher[] = [
    new Teacher(),
    {
        name:'hc',
        age:28
    }
]


//元组 tuple
//依靠数组的类型约束，无法控制类型顺序
const teacherInfo :(number| string)[] = ["Hc", "Male", 18];

const teacherInfo1:[string, string, number] = ["Hc", "Male", 18];
//一个数组的长度的固定的，数组中每个类型也是固定的，就可以把数组升为元组

//CSV
// hc , male , 18
// sun , female , 12
// moon , female, 11

const teacherList: [string, string, number] [] = [
    ['hc', 'male', 18],
    ['sun', 'female', 12],
    ['moon', 'female', 11]
]
}
