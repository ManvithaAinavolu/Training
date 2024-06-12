abstract class Shape<T>{
    properties:T
constructor(properties:T){
this.properties=properties
}
abstract calculateArea():number
}

interface SquareProp{
    side:number
}
class Square extends Shape<SquareProp>{
    calculateArea() {
        return this.properties.side**2;
        }

}
const squ:Square=new Square({side:4})
//console.log(cir.calculateArea())
console.log(squ.calculateArea())

export default Shape