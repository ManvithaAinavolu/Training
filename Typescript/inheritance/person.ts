interface Person{
    name:string,
    age:number,
    greet()
}
interface Student extends Person{
roll:number
}
const student:Student={
    name:"manu",
    age:20,
    roll:72,
    greet(){

    }
}