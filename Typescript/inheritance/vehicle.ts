abstract class Vehicle{
   abstract drive();

}
class Bycicle extends Vehicle{
    drive(){
        console.log("run on 2 wheels")
    }

}

const bike:Vehicle=new Bycicle()
bike.drive()

