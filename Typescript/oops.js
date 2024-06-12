var first = /** @class */ (function () {
    function first() {
    }
    first.prototype.hello = function () {
        console.log(this.a);
        return "hello manu";
    };
    return first;
}());
var f = new first();
f.a = "manu";
f.hello();
console.log(f.a);
