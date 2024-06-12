import Shape from './shape'
interface CircleProp{
    radius:number
}
class Circle extends Shape<CircleProp>{
calculateArea() {
return Math.PI*this.properties.radius**2;
}
}

const cir:Circle=new Circle({radius:2})
console.log(cir.calculateArea())
