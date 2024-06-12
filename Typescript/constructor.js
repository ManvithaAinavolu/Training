var contruct = /** @class */ (function () {
    function contruct(a) {
        this.a = a;
    }
    contruct.prototype.hello = function () {
        console.log(this.a);
    };
    return contruct;
}());
var c = new contruct("manvitha");
c.hello();
