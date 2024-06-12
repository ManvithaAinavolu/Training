
//Linear control flow
principle=5000;
rate=50;
time=3;

simpleIntrest=principle*rate*time/100

//simple intrest for 5000 at rate of 5% in 3 years is ....
console.log("simple intrest for"+principle+"at rate of"+rate+"% in"+time+"years is "+simpleIntrest )

console.log(`simple intrest for ${principle} at rate of ${rate}% in ${time} years is`)


//in node js dont look for input for taking iniout in runtime

//applying intrest on new intrest of price is called compound intrest

compoundIntrest= principle*(1+rate/100)**time
console.log(`after ${time} years the compound intrest for rs ${principle} at the ${rate} % is ${compoundIntrest.toFixed(2)}`)

//prompt,alert will block our js code that this application doesnot work properly 
//so they are not reccommendable


//here parsefloat is used because prompt box will only returns string not the actual number
//so we explicitly convert it into float to  get desired vallue
//and this prompt and alert are only for browser environment not for node.




// num1=parseFloat(prompt('enter x'))
// num2=parseFloat(prompt('entr y'))
// res = num1+num2
// alert(`result is ${res}`)



//Branching control flow
//blank lines are considerd to while executing
age=0
if(age = 0){
    console.log(age)
    console.log("eligible to vote")
}
else{
    console.log(age)
    console.log("not eligible")
}

//check if the expression is relational or assignment operator 
//if its a relational then deal with boolean 
//if its a boolean then deal with values 

//var  --defines a variables --will define the variable in global scope --undefined--out of scope
//let -- variable actually should be in the scope


var age=18;
let x=20;
if(age>18){
  let x=20;
    age++;

}
else{
    let x=20;
     age--;
}

console.log(x)
//const --doesnt allow to change the defined value--since its a constant variable

//three ways to create a function
function sum(x,y){
console.log(x+y)

}
sum(8,8)

//using var
const sum1=function(x,y){
    res=x+y;
    console.log(res)
}
sum1(2,4)

//const without function
const sum3=(x,y)=>{
    res=x+y
    console.log(res)
}
console.log(sum3(10,9))//beacuse the functionn is not returning anything it return undefined by default


console.log(fact(5))
