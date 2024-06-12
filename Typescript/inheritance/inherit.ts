class Animal{
    static animalTYpe:string
    readonly age:number
    constructor(age:number){
        this.age=age
        console.log(this.age)
    }
    getAge(){
        Animal.animalTYpe=""
        console.log(this.age)
    }
    speaks(){
        console.log("animal speaks")
    }
    static hello(){
        this.animalTYpe=""
    }
}

class Mammal extends Animal{
    nof:number
    getNof(num:number=90){
        console.log(num)
    }
    speaks(){
        console.log("mammal speak")
    }
}
const cow:Animal=new Mammal(4);//creating object of animal type
const dog:Animal=new Mammal(10);
const cat:Animal=new Mammal(12);
//cow.age=12;

(cow as Mammal).nof=4;//temporary converting to Mammal

(<Mammal> cow).getNof(20)
cow.speaks();
Animal.animalTYpe="animal"