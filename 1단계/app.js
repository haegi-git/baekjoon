var hello = function (x) {
    return x;
};
console.log(hello("hello"));
var plus = function (a, b) {
    return a + b;
};
console.log(plus(10, 20));
var minus = function (a, b) {
    return a - b;
};
console.log(minus(20, 10));
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(5, 10));
var divide = function (a, b) {
    return a / b;
};
console.log(divide(1, 3));
var rest = function (a, b) {
    return a % b;
};
console.log(rest(5, 3));
var calculation = function (a, b, plus, minus, multiply, divide, rest) {
    var 더하기 = plus(a, b);
    var 빼기 = minus(a, b);
    var 곱하기 = multiply(a, b);
    var 나누기 = Math.floor(divide(a, b));
    var 나머지 = rest(a, b);
    return [더하기, 빼기, 곱하기, 나누기, 나머지];
};
console.log(calculation(7, 3, plus, minus, multiply, divide, rest));
