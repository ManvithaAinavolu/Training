var Calculate = /** @class */ (function () {
    function Calculate() {
        this.calculate = function (_a) {
            var num1 = _a.num1, num2 = _a.num2, op = _a.op;
            while (op) {
                if (op == '+') {
                    return num1 + num2;
                }
                else if (op == '-') {
                    return num1 - num2;
                }
                else if (op == '*') {
                    return num1 * num2;
                }
                else if (op == '/') {
                    return num1 / num2;
                }
                else {
                    console.log("invalid operator");
                }
            }
        };
    }
    return Calculate;
}());
var btn = document.getElementById('calculate');
btn.addEventListener('click', function () {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var opIN = document.getElementById('op');
    var res = document.getElementById('res');
    var cal = new Calculate();
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var op = opIN.value;
    var result = cal.calculate({ num1: num1, num2: num2, op: op });
    res.innerText = "".concat(result);
});
