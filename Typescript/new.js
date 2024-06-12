var x;
x = 10;
x = "string";
var sumFun = function (a, b) {
    return a + b;
};
var val = sumFun(6, "hello");
var isAsult = true;
isAsult = false; //cannot change other types
//creating arrays
var myArray = [1, 2, 3, 4, 5];
var myString = ['a', 'b'];
myArray[3] = 10;
console.log(myArray);
console.log(myArray.filter(function (even) {
    return even % 2 == 0;
}));
