
//do-while is the exit control loop
//while,for are entry control loop
//for loop can have initialization statements


obj={a : 4,b:8,c:10}
for(t in obj){//for in loop helps in iterate over keys of an object
    console.log(t)
}
 //undefined comes beacuse of for loop 


 //for any array iterating values use 'for of'
 obj1=[2,3,4]
 for (t of obj1){
    console.log(t)
 }
//for each
obj=[2,3,4]
obj.forEach(function(x){console.log(x*x)
})
    

//for...of: It can iterate over any iterable object, including arrays, strings, maps, sets, etc.
//forEach(): It is specifically for arrays and can only be used to iterate over array elements.
