interface Person{
    name:string,
    roll:number,
    address:{
        city:string,
        pincode:number
    },
    salary?:number | string
}



const person:Person={
    name:"xyz",
    roll:72,
    address:{
        city:"abs",
        pincode:87878767
    }
}
 person.salary=90000