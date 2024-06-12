let x:any;
x=10;
x="string";
const sumFun=(a:number,b:string)=>{

    return a+b

}
const val=sumFun(6,"hello")

let isAsult:boolean=true
isAsult=false//cannot change other types



//creating arrays

const myArray:number[][]=[[1,2,3,4,5],[3,4,5,6,7],[8,9,10,11,12]];
const myString:string[]=['a','b']
myArray[3]=10
console.log(myArray)
console.log(myArray.filter((even)=>{
return even%2==0
}))

