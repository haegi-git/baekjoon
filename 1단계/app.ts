const hello = (x: string): string => {
  return x;
};

type CalculationType = (a: number, b: number) => number;

console.log(hello("hello"));

const plus: CalculationType = (a, b) => {
  return a + b;
};

console.log(plus(10, 20));

const minus: CalculationType = (a, b) => {
  return a - b;
};

console.log(minus(20, 10));

const multiply: CalculationType = (a, b) => {
  return a * b;
};
console.log(multiply(5, 10));

const divide: CalculationType = (a, b) => {
  return a / b;
};
console.log(divide(1, 3));
const rest: CalculationType = (a, b) => {
  return a % b;
};
console.log(rest(5, 3));

const calculation = (
  a: number,
  b: number,
  plus: CalculationType,
  minus: CalculationType,
  multiply: CalculationType,
  divide: CalculationType,
  rest: CalculationType
): number[] => {
  let 더하기 = plus(a, b);
  let 빼기 = minus(a, b);
  let 곱하기 = multiply(a, b);
  let 나누기 = Math.floor(divide(a, b));
  let 나머지 = rest(a, b);
  return [더하기, 빼기, 곱하기, 나누기, 나머지];
};

console.log(calculation(7, 3, plus, minus, multiply, divide, rest));
