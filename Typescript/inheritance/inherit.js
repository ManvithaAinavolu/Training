var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(age) {
        this.age = age;
        console.log(this.age);
    }
    Animal.prototype.getAge = function () {
        Animal.animalTYpe = "";
        console.log(this.age);
    };
    Animal.prototype.speaks = function () {
        console.log("animal speaks");
    };
    Animal.hello = function () {
        this.animalTYpe = "";
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mammal.prototype.getNof = function (num) {
        if (num === void 0) { num = 90; }
        console.log(num);
    };
    Mammal.prototype.speaks = function () {
        console.log("mammal speak");
    };
    return Mammal;
}(Animal));
var cow = new Mammal(4); //creating object of animal type
var dog = new Mammal(10);
var cat = new Mammal(12);
//cow.age=12;
cow.nof = 4; //temporary converting to Mammal
cow.getNof(20);
cow.speaks();
Animal.animalTYpe = "animal";
