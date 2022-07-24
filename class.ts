//Ts中的类和es6里面的类很类似

class Person{
    name:string = "dell"
    getName(){
        return this.name;
    }
}

const person = new Person();
console.log(person.getName());

//继承
class Teacher extends Person{
    getTeacherName(){
        return 'Teacher';
    }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());


//重写
class Teacher1 extends Person{
    getTeacherName(){
        return 'Teacher';
    }
    // getName(){
    //     return "hc";
    // }

//super调用父类的方法
    getName(){
        return super.getName() + 'lee';
    }
}

const teacher1 = new Teacher1();
console.log(teacher1.getName());



