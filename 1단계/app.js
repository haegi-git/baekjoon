const hello = (x) => {
    return x;
};
console.log(hello("hello"));
const plus = (a, b) => {
    return a + b;
};
console.log(plus(10, 20));
const minus = (a, b) => {
    return a - b;
};
console.log(minus(20, 10));
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 10));
const divide = (a, b) => {
    return a / b;
};
console.log(divide(1, 3));
const rest = (a, b) => {
    return a % b;
};
console.log(rest(5, 3));
const calculation = (a, b, plus, minus, multiply, divide, rest) => {
    let 더하기 = plus(a, b);
    let 빼기 = minus(a, b);
    let 곱하기 = multiply(a, b);
    let 나누기 = Math.floor(divide(a, b));
    let 나머지 = rest(a, b);
    return [더하기, 빼기, 곱하기, 나누기, 나머지];
};
console.log(calculation(7, 3, plus, minus, multiply, divide, rest));
